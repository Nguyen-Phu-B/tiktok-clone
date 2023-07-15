import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Img from "../Images";
import styles from "./AccountItems.module.scss";

const cx = classNames.bind(styles);

const AccountItems = ({ data }) => {
    return (
        <Link to={`/${data.nickname}`} className={cx("wrapper")}>
            <Img className={cx("avatar")} src={data.avatar} alt={data.last_name} />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>{data.full_name}</span>
                    {data.tick && <i className={"fa-solid fa-circle-check " + cx("check")}></i>}
                </h4>
                <span className={cx("username")}>{data.nickname}</span>
            </div>
        </Link>
    );
};

export default AccountItems;
