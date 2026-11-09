"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        id="wd-username"
        placeholder="username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-password"
        type="password"
        placeholder="password"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-firstname"
        placeholder="First Name"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-lastname"
        placeholder="Last Name"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-email"
        type="email"
        placeholder="email"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <select
        id="wd-role"
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        className="mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
      >
        <option value="STUDENT">Student</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
        <option value="USER">User</option>
      </select>
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="block w-full rounded bg-red-600 px-3 py-2 text-center text-white"
      >
        Sign out
      </button>
    </div>
  );
}