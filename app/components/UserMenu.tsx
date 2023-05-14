"use client";

import { useCallback, useState } from "react";

import Bars from "~icons/fa/bars.jsx";
import Avatar from "~icons/fa/user-circle-o.jsx";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((value) => !value);
  }

  return (
    <div className="relative flex items-center gap-3">
      <div className="hidden rounded-full px-4 py-3 font-semibold hover:bg-neutral-100 md:block">
        Airbnb your home
      </div>

      <div
        className="flex items-center gap-3 rounded-full border-x border-y p-4 hover:shadow-md"
        onClick={toggleMenu}
      >
        <Bars />

        <div className="hidden md:block">
          <Avatar />
        </div>
      </div>

      {isOpen ? (
        <div className="absolute right-0 top-16 z-20 w-[40vw] rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div>
            <div className="px-4 py-3 font-semibold hover:bg-neutral-100">
              Login
            </div>
            <div className="px-4 py-3 font-semibold hover:bg-neutral-100">
              Sign Up
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserMenu;
