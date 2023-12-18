import React from "react";
import { Heart, Rocket } from "lucide-react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-slate-500  w-auto">
      <div className="flex flex-col items-center content-center">
        <blockquote className="pt-4 text-slate-200 font-semibold text-lg">
          &quot;Life is like riding a bicycle. To keep your balance, you must
          keep moving.&quot;
          <p className="ml-4">Albert Einstein</p>
        </blockquote>
        <div className="flex flex-row items-center">
          <p className="py-4 text-slate-200 font-normal text-sm">
            Made with
            <Heart className="inline-block px-1" />
            and patience
            <Rocket className="inline-block px-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
