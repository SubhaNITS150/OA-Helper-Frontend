import SubjectSelector from "./SubjectSelector";
import { FaCode } from "react-icons/fa6";
import { LiaNewspaper } from "react-icons/lia";
import { TbTie } from "react-icons/tb";
import { MdComputer } from "react-icons/md";
import PhotoSidebarAnimation from "./PhotoSidebarAnimation";

export default function Practice() {
  return (
    <div className="w-full h-[90vh] flex flex-col px-15 py-4 ">
      <div className="flex flex-row justify-center w-[100%]">
        <div className="flex flex-col gap-4 px-6 py-4 w-[50%] justify-center ">
          <h1 className="text-5xl font-semibold">Unlock <span>Perfection</span></h1>
          <p>
            Solve easy to complex problems & get hands-on experience to get
            hired by your dream company!
          </p>

          <button className="px-6 py-3 w-[50%] rounded-xl my-6 text-white" style={{backgroundColor: 'var(--color-primary)'}}>
            Prepare for Interviews Now
          </button>
        </div>

        <div className="w-[50%] flex justify-center py-6">
            <PhotoSidebarAnimation />
        </div>
      </div>

      <div className="flex flex-row gap-4 w-full px-6 py-4 flex-wrap">
        <h1 className="mr-4">Trending <br/> Domains</h1>
        <SubjectSelector iconComponent={<FaCode className="text-[20px]" />} description="Computer Network" />

        <SubjectSelector iconComponent={<LiaNewspaper className="text-[20px]" />} description="Database Management Systems" />

        <SubjectSelector iconComponent={<TbTie className="text-[20px]" />} description="Data Structures" />

        <SubjectSelector iconComponent={<MdComputer className="text-[20px]" />} description="OOPS" />

        <SubjectSelector iconComponent={<MdComputer className="text-[20px]" />} description="System Design" />
      </div>
    </div>
  );
}
