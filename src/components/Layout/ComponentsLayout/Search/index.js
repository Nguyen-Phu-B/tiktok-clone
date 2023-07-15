import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "~/Components/Popper";
import AccountItems from "~/Components/AccountItems";
import styles from "./Search.module.scss";
import * as searchService from "~/Services/searchService";

import { useDebounce } from "~/Hook";

const cx = classNames.bind(styles);

const Search = () => {
    const [searchVal, setSearchVal] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounced = useDebounce(searchVal, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    const handleClearBtn = () => {
        setSearchVal("");
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChangeSearch = (e) => {
        const _valueSearch = e.target.value;

        if (!_valueSearch.startsWith(" ")) {
            setSearchVal(_valueSearch);
        }
    };

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItems key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx("search")}>
                    <input
                        ref={inputRef}
                        value={searchVal}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChangeSearch}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchVal && !loading && (
                        <button className={cx("search-clear")} onClick={handleClearBtn}>
                            <i className="fa-regular fa-circle-xmark"></i>
                        </button>
                    )}
                    {loading && (
                        <div className={cx("search-loading")}>
                            <i className="fa-solid fa-spinner"></i>
                        </div>
                    )}
                    <button className={cx("search-btn")} onMouseDown={(e) => e.preventDefault()}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
