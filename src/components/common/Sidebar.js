/* eslint-disable @next/next/no-img-element */
"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { FaTimes } from "react-icons/fa";
import { useUiContext } from "@/context/UiContext";
import { ACTION_TYPES } from "@/context/reducer";
import Link from "next/link";
import { links } from "@/data/links";
import { usePathname } from "next/navigation";
import { useActivePath } from "@/utils/activeLink";

const Sidebar = () => {
  const { isSidebarOpen, dispatch } = useUiContext();

  const pathName = usePathname();
  const checkActivePath = useActivePath();

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("modal"))
      dispatch({ type: ACTION_TYPES.closeSidebar });
  };

  return (
    <div
      className={`sidebar modal ${isSidebarOpen && "open"}`}
      onClick={handleCloseSidebar}
    >
      <div className={`dialog ${isSidebarOpen && "open"}`}>
        <div className="pt-3 pb-2 border-b border-slate-400 flex-center-between lg:hidden">
          <p className="uppercase">menu</p>
          <div
            className="p-3 rounded-full bg-[#224620] hover:bg-[#294f27] lg:hidden cursor-pointer"
            onClick={() => dispatch({ type: ACTION_TYPES.closeSidebar })}
          >
            <FaTimes />
          </div>
        </div>
        {/* Logo */}
        <Link href="/dashboard" className="p-2 hidden lg:block !opacity-100">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="w-28 h-28 object-contain mx-auto rounded-lg"
          />
        </Link>
        <div className="mt-5">
          {links.map(({ id, title, icon, url }) => {
            return (
              <Link
                href={url}
                key={id}
                className={`px-2 pl-4 py-2 my-3 flex-align-center gap-x-3 ${
                  checkActivePath(url) && "active"
                }`}
                onClick={() => dispatch({ type: ACTION_TYPES.closeSidebar })}
              >
                {icon}
                <span>{title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
