import Image from "next/image";
import logo from "../../public/logo.svg";
import { PiMoonLight } from "react-icons/pi";
import Toggle from "./Toggle";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="w-full p-6 md:px-10 md:pt-[58px] md:pb-[52px]">
      <div className="flex justify-between max-w-[736px] mx-auto">
        <Image alt="logo" src={logo} width={28.05} height={32} />
        <div className="flex">
          <Dropdown />
          <div className="flex items-center gap-3 pl-4">
            <Toggle />
            <PiMoonLight size={20} className="dark:text-primary" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
