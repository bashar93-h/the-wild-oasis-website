import SideNavigation from "@/app/_components/SideNavigation";
import SideNavigationMobile from "@/app/_components/SideNavigationMobile";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

export default function Layout({ children }) {
  return (
    <>
      <div className="md:grid grid-cols-[16rem_1fr] h-full gap-12">
        <div className="hidden md:block">
          <SideNavigation links={navLinks} />
        </div>

        <div className="py-1">{children}</div>
      </div>
      <div className="md:hidden">
        <SideNavigationMobile links={navLinks} />
      </div>
    </>
  );
}
