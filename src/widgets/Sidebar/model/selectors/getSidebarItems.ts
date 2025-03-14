import { SidebarItemType } from "../types/sidebar";

import {
  getRouteScience,
  getRouteGeneral,
  getRouteEntertainment,
  getRouteTechnology,
  getRouteBusiness,
  getRouteHealth,
  getRouteSports,
} from "@/shared/const/router";

export const useSidebarItems = () => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteScience(),
      text: "SCIENCE",
    },
    {
      path: getRouteGeneral(),
      text: "GENERAL",
    },
    {
      path: getRouteEntertainment(),
      text: "ENTERTAINMENT",
    },
    {
      path: getRouteTechnology(),
      text: "TECHNOLOGY",
    },
    {
      path: getRouteBusiness(),
      text: "BUSINESS",
    },
    {
      path: getRouteHealth(),
      text: "HEALTH",
    },
    {
      path: getRouteSports(),
      text: "SPORTS",
    },
  ];

  return sidebarItemsList;
};
