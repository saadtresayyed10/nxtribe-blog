import Link from "next/link";
import { MenuBar } from "./MenuBar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center lg:px-8 px-6 py-4 bg-black text-white">
      <Logo />
      <MenuBar />
    </div>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-white font-medium text-2xl cursor-none text-center font-unbounded">
        n
        <span className="ml-0.5 text-4xl font-bold text-black font-outline-2 font-circular hover:text-purple-500 hover:dark:text-purple-700 duration-300">
          X
        </span>
        tribe
      </h1>
      <p className="font-circular text-white font-semibold text-xs uppercase">
        Making way for success
      </p>
    </Link>
  );
};

export default Navbar;
