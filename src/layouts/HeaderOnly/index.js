import Header from "../ComponentsLayout/Header";
import classNames from "classnames";
import styles from "./HeaderOnly.module.scss";

const cx = classNames.bind(styles);

const HeaderOnly = ({ children }) => {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
