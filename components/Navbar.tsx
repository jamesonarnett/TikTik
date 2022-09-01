import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

export const Navbar = () => {
  return (
    <div>
      <Link href={""}>
        <div>
          <Image className="cursor-pointer" src="placeholder.png" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
