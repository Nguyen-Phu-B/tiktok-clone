import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import HeadlessTippy from "@tippyjs/react/headless";

import { useState, useEffect } from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import imgages from "~/Assets/Img";
import styles from "./Header.module.scss";
import AccountItems from "~/components/AccountItems";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <i className="fa-solid fa-earth-asia"></i>,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
    },
    {
        icon: <i className="fa-solid fa-circle-question"></i>,
        title: "Feedback and help",
        to: "/upload",
    },
    {
        icon: <i className="fa-solid fa-keyboard"></i>,
        title: "Keyboard shortcuts",
    },
];

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    const userMenu = [
        {
            icon: <i className="fa-solid fa-user"></i>,
            title: "View profile",
            to: "/@hoaa",
        },
        {
            icon: <i className="fa-solid fa-coins"></i>,
            title: "Get coins",
            to: "/coin",
        },
        {
            icon: <i className="fa-solid fa-gear"></i>,
            title: "Settings",
            to: "/setting",
        },
        ...MENU_ITEMS,
        {
            icon: <i className="fa-solid fa-right-from-bracket"></i>,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // handle Lang
                console.log(menuItem);
                break;
            default:
        }
    };

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={imgages.logo} alt="Tiktok"></img>
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>

                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                content="Upload Video"
                                placement="bottom"
                                delay={[0, 200]}
                            >
                                <button className={cx("action-btn")}>
                                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                </button>
                            </Tippy>
                            <button className={cx("action-btn")}>
                                <i class="fa-regular fa-message"></i>
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img
                                className={cx("user-avatar")}
                                alt="NguyeeVanA"
                                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
