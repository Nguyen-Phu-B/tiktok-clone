import classNames from "classnames/bind";
import imgages from "~/Assets/Img";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react/headless";

import { useState, useEffect } from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItems from "~/components/AccountItems";

const cx = classNames.bind(styles);
const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={imgages.logo} alt="Tiktok"></img>
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx("search-result")}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className={cx("actions")}></div>
            </div>
        </header>
    );
};

export default Header;
