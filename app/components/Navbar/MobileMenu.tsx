import React from "react";
import NavLink from "./NavLinks";
import ThemeToggle from "../ThemeToggleButton";

interface MobileMenuProps {
  navItems: { label: string; href: string }[];
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navItems, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-gray-900 py-6 border-t border-gray-200 dark:border-gray-700">
      <ul className="space-y-6 text-center">
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink
              href={item.href}
              className="hover:text-orange-600 dark:hover:text-orange-500"
            >
              {item.label}
            </NavLink>
          </li>
        ))}
        <div className="mt-4">
          <ThemeToggle />
        </div>
      </ul>
    </div>
  );
};

export default MobileMenu;