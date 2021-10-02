import React, { useState, useEffect } from "react";
import { ReactComponent as Whatsapp } from "../../assets/icons/Whatsapp.svg";
import { ReactComponent as Chevron } from "../../assets/icons/Chevron-up.svg";
import { CSSTransition } from "react-transition-group";

const FixedButtons = () => {

    const [showScroll, setShowScroll] = useState(false);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 200) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 200) {
                setShowScroll(false);
            }
        };
        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    }, [showScroll]);

    return (
        <div className="fixed-button">
            <CSSTransition
                in={showScroll}
                timeout={200}
                classNames="animation__fixed-button"
                unmountOnExit
            >
                <div
                    className="fixed-button__box fixed-button__box--scroll"
                    onClick={scrollTop}
                >
                    <Chevron className="box__icon" />
                </div>
            </CSSTransition>

            <a
                href={"https://api.whatsapp.com/send/?phone=51983734000&text=Hola+tio+Coseinco!!"}
                target="blank"
                rel="noopener noreferrer"
                className="fixed-button__box fixed-button__box--wtsp s-d-inline-block"
            >
                <Whatsapp className="box__icon" />
            </a>
        </div>
    );
};

export default FixedButtons;
