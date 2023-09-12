import React from "react";

interface NavLinkProps {
  href: string;
  text: string;
  isCurrent: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, isCurrent }) => {
  const linkClasses = `block py-2 pl-3 pr-4 rounded ${
    isCurrent
      ? "text-white bg-blue-700"
      : "text-gray-900 hover:bg-gray-100 md:border-0 md:hover:bg-transparent md:hover:text-blue-700"
  } md:p-0 ${
    isCurrent
      ? "md:bg-transparent md:text-blue-700"
      : "dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  }`;

  return (
    <a
      href={href}
      className={linkClasses}
      aria-current={isCurrent ? "page" : undefined}
    >
      {text}
    </a>
  );
};

export default NavLink;
