import { auth } from "@/app/_lib/auth";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import UserIcon from "./UserIcon";

export default async function Navigation() {
  const session = await auth();
  const user = session?.user;

  const menuItmes = [
    { label: "Cabins", href: "/cabins" },
    { label: "About", href: "/about" },
    { label: "Guest area", href: "/account" },
  ];

  return (
    <>
      <MobileMenu menu={menuItmes} />
      {user && <UserIcon user={user} styles="md:hidden" />}
      <nav className="hidden md:block z-10 text-xl">
        <ul className="flex gap-16 items-center">
          {menuItmes.slice(0, 2).map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-accent-400 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            {user ? (
              <UserIcon user={user}>Guest area</UserIcon>
            ) : (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors"
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
