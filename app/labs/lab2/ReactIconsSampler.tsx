import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { GiSpaceship } from "react-icons/gi";
import { TbRocket } from "react-icons/tb";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <MdOutlineLocalLibrary className="text-4xl text-blue-600" />
        <HiOutlineSparkles className="text-4xl text-rose-600" />
        <GiSpaceship className="text-4xl text-emerald-600" />
        <TbRocket className="text-2xl text-orange-500" />
      </div>
    </div>
  );
}