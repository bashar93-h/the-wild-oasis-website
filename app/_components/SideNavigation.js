"use client";

import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNavigation({ links }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="border-r border-primary-900 h-full">
      <ul className="flex flex-col gap-2 text-lg h-full">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                link.href === pathname && "bg-primary-900"
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
