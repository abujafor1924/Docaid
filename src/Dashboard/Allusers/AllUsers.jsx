import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import "../../index.css";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handaleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success(`${user.name} is Admin Now`);
          refetch();
        }
      });
  };

  const handeleDeleteUser = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success(`${user.name} is Deleted`);
          refetch();
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>All Users || Doc-Aid</title>
      </Helmet>
      <div>
        <h1 className="text-4xl font-bold text-center py-4 text-[#07332F]">
          All Users {users.length}
        </h1>
        {/* table area */}
        <div className="overflow-x-auto">
          <table className="table table-xs  w-[100%]">
            <thead>
              <tr className="text-2xl font-semibold text-black">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Roll</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handaleMakeAdmin(user)}
                        className="btn btn-custom"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handeleDeleteUser(user)}
                      className="btn btn-custom"
                    >
                      Remove User
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
