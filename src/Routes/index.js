import Home from "../Pages/Home";
import Following from "../Pages/Following";
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";
import Upload from "../Pages/Upload";
// Layout
import { HeaderOnly } from "~/components/Layout";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/profile", component: Profile },
    { path: "/following", component: Following },
    { path: "/search", component: Search },
    { path: "/upload", component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
