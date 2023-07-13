import classNames from "classnames/bind";
import { forwardRef, useState } from "react";
import images from "~/Assets/Img";
import styles from "./Img.module.scss";

const cx = classNames.bind(styles);

const Img = forwardRef(
    ({ fallback = images.noImg, className, src, ...props }, ref) => {
        const [fallBack, setFallBack] = useState("");

        const classes = cx("wrapper", className);

        const handlErr = () => {
            setFallBack(fallback);
        };

        return (
            <img
                className={classes}
                ref={ref}
                src={fallBack || src}
                {...props}
                onError={handlErr}
            />
        );
    }
);

export default Img;
