import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { app } from "./../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);

  //   Create Users
  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in
  const singIn = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //    loged out User
  const logdOut = () => {
    setLoding(true);
    return signOut(auth);
  };

  //   update Users
  const UpadteUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  //   forgate Password
  const forgetPassword = (email) => {
    setLoding(true);
    return sendPasswordResetEmail(auth, email);
  };

  // observer using
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // get set JWT token
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", { email: currentUser.email })
          .then((data) => {
            // console.log(data.data.token);
            localStorage.setItem("acces-token", data.data.token);
            setLoding(false);
          });
      } else {
        localStorage.removeItem("acces-token");
      }
    });

    // stop obserbing
    return () => {
      return unSubscribe;
    };
  }, []);

  // google singin  Functonality
  const googleLoge = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };

  // TODO: send a verfication User

  //   authInfo for Exporte
  const authInfo = {
    user,
    loading,
    createUser,
    UpadteUser,
    singIn,
    logdOut,
    forgetPassword,
    googleLoge,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaider;
