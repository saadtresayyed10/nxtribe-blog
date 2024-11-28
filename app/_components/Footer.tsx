"use client";

import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconHome,
  IconPhoneCall,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-3 bg-white font-circular text-black my-6">
      <div className="flex justify-center items-center gap-x-6">
        <Link className="" href="https://www.instagram.com/nxt.tribe/">
          <IconBrandInstagram />
        </Link>
        <Link
          className=""
          href="https://www.linkedin.com/in/nxtribe-making-way-for-%E2%80%9Csuccess%E2%80%9D-706921337/"
        >
          <IconBrandLinkedin />
        </Link>
        <Link className="" href="http://nxtribe.com/">
          <IconHome />
        </Link>
        <Link className="" href="https://wa.me/919112814584">
          <IconBrandWhatsapp />
        </Link>
        <Link className="" href="tel:+919112814584">
          <IconPhoneCall />
        </Link>
      </div>
      <div className="flex justify-center items-center flex-col lg:gap-y-2 font-circular text-xs font-light text-muted-foreground">
        <Link href="https://sayyedsaad.vercel.app/" target="_blank">
          <span className="dark:text-purple-500 text-purple-700">
            Developer
          </span>
          : Saad Sayyed
        </Link>
        <h4>
          <span className="dark:text-purple-500 text-purple-700">Mail</span>:
          info@nxtribe.com
        </h4>
        <Link href="https://maps.app.goo.gl/GbAmDFXs37TqqLMb8" target="_blank">
          <span className="dark:text-purple-500 text-purple-700">Office</span>:
          India - Maharashtra, Pune, Pisoli
        </Link>
      </div>
    </div>
  );
};
