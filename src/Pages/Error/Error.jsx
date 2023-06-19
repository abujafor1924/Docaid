import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" w-[900px] mx-auto  relative ">
      <img src="https://i.ibb.co/QJNgYvL/error-404.jpg" alt="Error" />
      <Link to={"/"} className="absolute bottom-5 left-[390px]">
        <button className="btn btn-error text-white ">Back Home</button>
      </Link>
    </div>
  );
};

export default Error;
