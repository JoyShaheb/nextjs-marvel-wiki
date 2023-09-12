import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  location: string;
  isMobile: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ location, isMobile }) => {
  const baseStyle = `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md`;
  const activeStyle = `bg-gray-900 text-white`;

  const textStyle = isMobile ? "text-base" : "text-sm";
  const fontStyle = "font-medium";

  const pathname = usePathname()!;
  const path = pathname.split("/")[1];

  const isActive = path === location;
  const colorStyle = isActive ? activeStyle : "";

  return (
    <Link
      href={`/${location}`}
      className={`${colorStyle} ${baseStyle} ${textStyle} ${fontStyle}`}
      {...(path === location && { "aria-current": "page" })}
    >
      {location}
    </Link>
  );
};

export default NavLink;
