export const getRoutes = (routes) => {
  return routes.map(
    (route) =>
      !route?.hidden && {
        path: route.path,
        component: route.component,
      }
  );
};

export const getNavigation = (routes) => {
  const navItems = [];
  routes.forEach((route) => {
    const baseRoute = route.path.split("/")[1];
    const indexBaseRoute = navItems.findIndex(
      (item) => item.path === `/${baseRoute}`
    );

    if (indexBaseRoute === -1 && !route.path.includes(":")) {
      navItems.push({
        path: `/${baseRoute}`,
        label: route.label,
        dropdownItems: [],
      });
    } else {
      // navItems[indexBaseRoute].dropdownItems.push({
      //   path: route.path,
      //   label: route.label,
      // });
    }
  });

  return navItems;
};
