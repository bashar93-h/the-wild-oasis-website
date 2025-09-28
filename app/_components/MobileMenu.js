"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

function MobileMenu({ menu }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((cur) => !cur);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="z-10 md:hidden"
        onClick={handleClick}
      >
        {isOpen ? (
          <XMarkIcon className="w-10 h-10 text-primary-100 z-10" />
        ) : (
          <Bars3Icon className=" w-10 h-10 text-primary-100 z-10" />
        )}
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-10"
          onClick={closeMenu}
        ></div>
      )}

      {isOpen && (
        <nav
          id="mobile-menu"
          role="menu"
          className={`z-10 md:hidden text-xl bg-primary-400/90 absolute top-full w-full left-0 `}
        >
          <ul className="flex flex-col gap-6">
            {menu.map((item) => (
              <li
                role="menuitem"
                className="hover:bg-primary-400/70 transition p-4"
                key={item.label}
              >
                <Link
                  href={item.href}
                  className="hover:text-accent-400 transition-colors text-gray-50 font-semibold"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default MobileMenu;
