"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation">
      {links.map((link) => {
        const active = pathname.includes(`/account/${link}`);
        const label =
          link === "signin"
            ? "Signin"
            : link === "signup"
              ? "Signup"
              : "Profile";
        return (
          <Link
            key={link}
            href={`/account/${link}`}
            className={`block py-2 text-sm no-underline ${
              active
                ? "border-l-4 border-l-neutral-900 pl-2 font-semibold text-neutral-900"
                : "pl-2 text-red-600"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}