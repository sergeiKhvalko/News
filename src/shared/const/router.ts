export enum AppRoutes {
  MAIN = "main",
  NEWS = "news",
  // last
  NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteNews = () => "/news";
export const getRouteScience = () => "/science";
export const getRouteGeneral = () => "/general";
export const getRouteEntertainment = () => "/entertainment";
export const getRouteTechnology = () => "/technology";
export const getRouteBusiness = () => "/business";
export const getRouteHealth = () => "/health";
export const getRouteSports = () => "/sports";

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteNews()]: AppRoutes.NEWS,
};
