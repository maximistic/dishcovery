import Link from "next/link";
import React from "react";

interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={`hover:text-orange-600 dark:hover:text-orange-400 transition ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
