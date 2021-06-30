import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "User",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
    subNav: [
      {
        title: "User Management",
        path: "/admin/user-management",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
      },
      {
        title: "Staff Management",
        path: "/admin/staff-management",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Conference",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    subNav: [
      {
        title: "Main Conference",
        path: "/admin/conference-management",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
      },
      {
        title: "Upcoming Conference",
        path: "/admin/upcoming-management",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
      },
    ],
  },

  {
    title: "Template",
    icon: <AiIcons.AiFillCodeSandboxSquare />,
    cName: "nav-text",
    subNav: [
      {
        title: "Add Templates",
        path: "/admin/add-template",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
      },
      {
        title: "View Templates",
        path: "/admin/view-template",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
      },
    ],
  },

  {
    title: "Requests",
    path: "/admin/requestmanagement",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },

  {
    title: "Support",
    path: "/admin/supportmanagement",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
