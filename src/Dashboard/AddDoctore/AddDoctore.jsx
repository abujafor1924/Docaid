import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
const image_hoisting_token = import.meta.env.VITE_image_uplode_token;
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const AddDoctore = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imge_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hoisting_token}`;

  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imge_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, specialty, email } = data;
          const newItem = {
            name,
            specialty,
            email,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/doctor", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              toast.success(`Doctor is Added`);
              reset();
            }
          });
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>Add Doctore || Doc-Aid</title>
      </Helmet>
      <div>
        <div>
          <h1 className="text-center font-bold text-4xl text-[#07332F] my-8">
            {" "}
            ADD A DOCTORE
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            <div className="my-4">
              <input
                type="text"
                placeholder=" Name"
                {...register("name", { required: true })}
                className="input my-6 input-bordered input-primary w-full max-w-xs"
              />
              {errors.name && (
                <span className="text-red-600">Email field is required</span>
              )}
              <input
                type="email"
                placeholder=" Email"
                {...register("email", { required: true })}
                className="input input-bordered input-primary w-full max-w-xs"
              />
              {errors.email && (
                <span className="text-red-600">Email field is required</span>
              )}
            </div>
            <div className="form-control my-2 w-80">
              <label className="label">
                <span className="label-text">Specialty</span>
              </label>

              <select
                {...register("specialty")}
                className="bg-slate-100 rounded text-xl font-medium"
              >
                <option value="psychiatrist">Psychiatrist</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="dentist">Dentist</option>
                <option value="neurologist">Neurologist</option>
                <option value="radiologist">Radiologist</option>
              </select>
            </div>
            <div className="form-control py-4">
              <label className="label">
                <span className="label-text">Picture Upload</span>
              </label>
              <input
                type="file"
                {...register(" image", { required: true })}
                className="file-input file-input-bordered file-input-primary w-[100%] max-w-xs"
              />
              {errors.image && (
                <span className="text-red-600">Image field is required</span>
              )}
            </div>
            <div className="my-4 ml-24">
              <input
                className="btn btn-custom "
                type="submit"
                value="Add Doctore"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDoctore;
