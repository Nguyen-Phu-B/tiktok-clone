import Home from "~/Pages/Home";
import Following from "~/Pages/Following";
import Profile from "~/Pages/Profile";
import Search from "~/Pages/Search";
import Upload from "~/Pages/Upload";
import routesConfig from "~/Config/routes";

// Layout
import { HeaderOnly } from "~/Components/Layout";

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
