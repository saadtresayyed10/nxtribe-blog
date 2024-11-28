"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Menu
            className="w-6 h-6 stroke-[2] cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-white flex text-center flex-col justify-center items-center w-full h-[100%] text-black font-unbounded lg:gap-y-16 gap-y-10"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full font-circular lg:text-4xl bg-white text-black"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>About</AccordionTrigger>
              <AccordionContent onClick={closeSheet}>
                <div className="flex justify-center items-start flex-col gap-y-2 p-6">
                  <Link href="http://nxtribe.com/about/our-purpose">
                    Our Purpose
                  </Link>
                  <Link href="http://nxtribe.com/about/founder">Founder</Link>
                  <Link href="http://nxtribe.com/">Home</Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What We Offer</AccordionTrigger>
              <AccordionContent onClick={closeSheet}>
                <div className="flex justify-center items-start flex-col gap-y-2 p-6">
                  <Link href="http://nxtribe.com/whatweoffer/it">
                    IT & ITES
                  </Link>
                  <Link href="http://nxtribe.com/whatweoffer/training">
                    Training & Coaching
                  </Link>
                  <Link href="http://nxtribe.com/whatweoffer/digital-marketing">
                    Digital Marketing
                  </Link>
                  <Link href="http://nxtribe.com/whatweoffer/hr">
                    HRO & CHRO
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Workshop</AccordionTrigger>
              <AccordionContent onClick={closeSheet}>
                <div className="flex justify-center items-start flex-col gap-y-2 p-6">
                  <Link href="http://nxtribe.com/workshop/workshop">
                    Workshops
                  </Link>
                  <Link href="http://nxtribe.com/workshop/training">
                    Training
                  </Link>
                  <Link href="http://nxtribe.com/workshop/webinar">
                    Webinar
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Media</AccordionTrigger>
              <AccordionContent onClick={closeSheet}>
                <div className="flex justify-center items-start flex-col gap-y-2 p-6">
                  <Link href="http://nxtribe.com/media">Videos</Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <button className="w-full text-xl py-4 bg-black text-white mt-6 rounded-xl hover:bg-white uppercase hover:text-black border-2 border-black duration-300">
              <Link href="http://nxtribe.com/contact" onClick={closeSheet}>
                Contact
              </Link>
            </button>
          </Accordion>
        </SheetContent>
      </Sheet>
    </>
  );
};
