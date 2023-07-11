import classNames from "classnames/bind";
import styles from "./AccountItems.module.scss";

const cx = classNames.bind(styles);

const AccountItems = () => {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/750989386d547fa72e4c09435452aa44.jpeg?x-expires=1687687200&x-signature=sj6xUNbFiDHdeW5zni1QOSJLAV0%3D"
                alt="Hoa"
            ></img>
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nguyen Van Hoa</span>
                    <i
                        className={"fa-solid fa-circle-check " + cx("check")}
                    ></i>
                </h4>
                <span className={cx("username")}>nguyenvanhoa</span>
            </div>
        </div>
    );
};

export default AccountItems;
