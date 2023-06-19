const Banner = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[95vh] "
        src="https://img.freepik.com/free-photo/doctor-crossing-arms-while-holding-stethoscope-white-coat_176474-8491.jpg?w=740&t=st=1686905704~exp=1686906304~hmac=018f30da7381fccde056ba786f5762ccbe12f030ec0efea56f08e29afdc01f2a"
        alt=""
      />
      <div className=" mr-10 absolute top-36 right-0 ...">
        <div className="text-slate-600">
          <h1 className="text-6xl font-bold ">
            Your Best Medical <br /> Help Center
          </h1>
          <p className="text-1xl font-medium mt-3">
            Prompt, accurate, compassionate, professional, effective,
            <br />
            empathetic, reliable, holistic, accessible, comprehensive.
          </p>
          <button className="btn btn-primary rounded-xl mt-3 bg-[#F7A582]   border-0 hover:bg-red-500">
            All Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
