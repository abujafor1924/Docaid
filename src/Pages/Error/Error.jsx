import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" lg:w-[900px] w-full mx-auto  relative ">
      <img src="https://i.ibb.co/QJNgYvL/error-404.jpg" alt="Error" />
      <Link to={"/"} className="absolute bottom-5  ml-[38%]">
        <button className="btn btn-error text-white ">Back Home</button>
      </Link>
    </div>
  );
};

export default Error;
