import Image from "next/image";
import logo from "../../public/logo.svg";
import { IoChevronDownSharp } from "react-icons/io5";
import { PiMoonLight } from "react-icons/pi";
import Toggle from "./Toggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 flex justify-between w-full p-6">
      <Image alt="logo" src={logo} width={28.05} height={32} />
      <div className="flex">
        <div className="flex items-center gap-4 pr-4 border-r border-dark-300 dark:border-">
          <p className="text-sm font-bold leading-6">Sans Serif</p>
          <IoChevronDownSharp size={18} className="text-primary" />
        </div>
        <div className="flex items-center gap-3 pl-4">
          <Toggle />
          <PiMoonLight size={20} className="dark:text-primary" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
