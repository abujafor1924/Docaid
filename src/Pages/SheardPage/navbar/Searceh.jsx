import { BiSearch } from "react-icons/bi";

const Searceh = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm w-60 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block text-right ml-24">Search Doctor</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searceh;
