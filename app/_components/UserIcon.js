import Link from "next/link";

function UserIcon({ user, children, styles }) {
  return (
    <Link
      href="/account"
      className={`z-10 hover:text-accent-400 transition-colors flex items-center gap-4 ${styles}`}
    >
      <img
        className="h-8 rounded-full "
        src={user.image}
        alt={user.name}
        referrerPolicy="no-referrer"
      />
      {children && <span>{children}</span>}
    </Link>
  );
}

export default UserIcon;
