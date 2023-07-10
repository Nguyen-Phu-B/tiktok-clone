import classNames from "classnames/bind";
import imgages from "~/Assets/Img";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
const Header = () => {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={imgages.logo} alt="Tiktok"></img>
                </div>

                <div className={cx("search")}>
                    <input
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                    />

                    <button className={cx("search-clear")}>
                        <i className="fa-regular fa-circle-xmark"></i>
                    </button>

                    <div className={cx("search-loading")}>
                        <i className="fa-solid fa-spinner"></i>
                    </div>

                    <button className={cx("search-btn")}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div className={cx("actions")}></div>
            </div>
        </header>
    );
};

export default Header;
