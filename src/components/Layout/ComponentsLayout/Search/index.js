import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItems from "~/components/AccountItems";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 1, 1, 1]);
        }, 0);
    }, []);
    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
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
        </HeadlessTippy>
    );
};

export default Search;
