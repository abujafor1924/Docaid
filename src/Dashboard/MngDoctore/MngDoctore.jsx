import { toast } from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";

const MngDoctore = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: data = [], refetch } = useQuery(["doctor"], async () => {
    const res = await axiosSecure.get("/doctor");
    console.log(res);
    return res.data;
  });

  const handelDoctorDelete = (data) => {
    fetch(`http://localhost:5000/doctor/${data._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success(`doctor is Deleted`);
          refetch();
        }
      });
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-center  text-[#07332F]">
        Manage Doctors {data.length}
      </h1>
      {/* Table  */}
      <div className="overflow-x-auto">
        <table className="table tect-2xl font-medium">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialist</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={data.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{data.name}</td>
                <td>{data.specialty}</td>
                <th>
                  <button
                    onClick={() => handelDoctorDelete(data)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MngDoctore;
