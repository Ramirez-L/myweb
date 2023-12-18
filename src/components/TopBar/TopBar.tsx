import React from "react";
import { Leaf, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <nav className="max-w-full h-auto px-6 pt-2">
      <div className="flex flex-row items-center text-center py-2 px-2 justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex">
            <Leaf className="w-8 h-8 mr-1 text-slate-100" />
            <h1 className="font-bold text-2xl text-slate-50 ">Luis Blog</h1>
          </Link>
        </div>

        <div className="flex items-center bg-slate-600 rounded-xl">
          <Link href="/posts">
            <h1 className="text-lg font-bold px-2 py-1 text-slate-200 hover:scale-110">
              Post
            </h1>
          </Link>
          <Link href="/about">
            <h1 className="text-lg font-bold px-2 py-1 text-slate-200 hover:scale-110">
              About
            </h1>
          </Link>
          <Link href="contact">
            <h1 className="text-lg font-bold px-2 py-1 text-slate-200 hover:scale-110">
              Contact
            </h1>
          </Link>
        </div>

        <div className="flex items-center text-center bg-slate-600 rounded-xl">
          <a href="https://www.linkedin.com/in/ramireznluis/" target="_blank">
            <Linkedin className="w-10 h-10 px-2 py-2 text-slate-300 hover:scale-125" />
          </a>
          <Link href="/contact">
            <Mail className="w-10 h-10 px-2 py-2 text-slate-300 hover:scale-125" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default TopBar;
