import { usePathname } from "next/navigation";

export const useActivePath = (path) => {
  const pathname = usePathname();

  const checkActivePath = (path) => {
    if (path === "/dashboard" && pathname !== path) {
      return false;
    }
    return pathname.startsWith(path);
  };

  return checkActivePath;
};
