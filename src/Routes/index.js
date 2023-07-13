import Home from "../Pages/Home";
import Following from "../Pages/Following";
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";
import Upload from "../Pages/Upload";
// Layout
import { HeaderOnly } from "~/Components/Layout";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/:nickname", component: Profile },
    { path: "/following", component: Following },
    { path: "/search", component: Search, layout: null },
    { path: "/upload", component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
