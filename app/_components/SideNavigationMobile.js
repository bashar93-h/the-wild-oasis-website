"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "./SignOutButton";

function SideNavigationMobile({ links }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="border-t border-primary-800 fixed z-10 bottom-0 left-0 right-0 bg-primary-900 px-4">
      <ul className="flex text-sm justify-between">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-2 px-2 hover:bg-primary-950 hover:text-primary-100 transition-colors flex flex-col items-center justify-center gap-2 font-medium text-primary-200 ${
                link.href === pathname && "bg-primary-950"
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigationMobile;
