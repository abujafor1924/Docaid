import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" mx-auto">
      <h1>Error 404?</h1>
      <Link to={"/"}>
        <button>Back Home</button>
      </Link>
    </div>
  );
};

export default Error;
