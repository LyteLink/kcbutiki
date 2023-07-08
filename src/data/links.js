import { FiBookOpen, FiGrid, FiImage, FiLayers } from "react-icons/fi";
import { BsCalendar2Date, BsNewspaper } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi";

export const links = [
  {
    id: 1,
    title: "Dashboad",
    icon: <FiGrid />,
    url: "/dashboard",
  },
  {
    id: 2,
    title: "Events",
    icon: <BsCalendar2Date />,
    url: "/dashboard/events",
  },
  {
    id: 3,
    title: "Uneb",
    icon: <SlGraduation />,
    url: "/dashboard/uneb",
  },
  {
    id: 4,
    title: "Butiki Family",
    icon: <HiOutlineUsers />,
    url: "/dashboard/family",
  },
  {
    id: 5,
    title: "Clubs",
    icon: <FiLayers />,
    url: "/dashboard/clubs",
  },
  {
    id: 6,
    title: "Subjects",
    icon: <FiBookOpen />,
    url: "/dashboard/subjects",
  },
  {
    id: 7,
    title: "News",
    icon: <BsNewspaper />,
    url: "/dashboard/posts",
  },
  {
    id: 8,
    title: "Slides",
    icon: <FiImage />,
    url: "/dashboard/slides",
  },
];
