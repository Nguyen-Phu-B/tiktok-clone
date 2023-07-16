import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import images from "~/assets/Img";
import styles from "./Header.module.scss";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import Icon from "~/components/Icon";
import Img from "~/components/Images";
import Search from "../Search";
import { Link } from "react-router-dom";
import config from "~/config";
import { useEffect, useState } from "react";

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
        to: "",
    },
    {
        icon: <i className="fa-solid fa-keyboard"></i>,
        title: "Keyboard shortcuts",
    },
];

const Header = () => {
    const [dataMenu, setDataMenu] = useState(MENU_ITEMS);
    const [currentUser, setCurrentUser] = useState(false);

    // const currentUser = false;

    useEffect(() => {
        console.log(!!currentUser);
        if (!!currentUser) {
            setDataMenu([
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
                    // to: "/logout",
                    separate: true,
                },
            ]);
        } else {
            setDataMenu(MENU_ITEMS);
        }
    }, [currentUser]);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // handle Lang
                console.log(menuItem);
                break;
            default:
        }
    };

    const handleLoginClick = () => setCurrentUser((prev) => !prev);

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Link to={config.routes.home} className={cx("logo")}>
                    <img src={images.logo} alt="Tiktok"></img>
                </Link>

                <Search />

                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom" delay={[0, 100]}>
                                <button className={cx("action-btn")}>
                                    <Icon name={"upload"} />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom" delay={[0, 100]}>
                                <button className={cx("action-btn")}>
                                    <Icon name={"mess"} width="2.6rem" height="2.6rem" />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[0, 100]}>
                                <button className={cx("action-btn")}>
                                    <Icon name={"inbox"} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary onClick={handleLoginClick}>
                                Login
                            </Button>
                        </>
                    )}
                    {console.log("curr", dataMenu)}
                    {/* <Menu items={currentUser ? dataChildrenMenu : dataMenu} onChange={handleMenuChange}> */}
                    <Menu items={dataMenu} onChange={handleMenuChange} onClick={handleLoginClick}>
                        {currentUser ? (
                            <Img
                                className={cx("user-avatar")}
                                alt="NguyeeVanA"
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c88850334850c70784068cad9dcaa03f~c5_100x100.jpeg?x-expires=1689393600&x-signature=IhlocZZaz%2BWNEsW6VxcN3JGQS5w%3D"
                                fallback="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
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
