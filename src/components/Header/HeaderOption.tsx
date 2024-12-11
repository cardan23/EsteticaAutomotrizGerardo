import Link from "next/link";
import React from "react";

interface headerAttributes {
  text: string;
  href: string;
}

const HeaderOption = ({ text, href }: headerAttributes) => {
  return (
    <Link
      className="p-4 text-2xl rounded-md text-neutral-100 transition duration-150 hover:scale-110 hover:bg-sky-700"
      href={href}
    >
      {text}
    </Link>
  );
};

export default HeaderOption;
