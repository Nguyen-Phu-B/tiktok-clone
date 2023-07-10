import Header from "../ComponentsLayout/Header";
import Sidebar from "./Slidebar";
const DefaultLayout = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
