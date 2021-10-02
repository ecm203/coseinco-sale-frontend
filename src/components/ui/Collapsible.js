import React, { useState } from "react";
import PropTypes from "prop-types";

import { CSSTransition } from "react-transition-group";

import { ReactComponent as Chevron } from "../../assets/icons/Chevron-down.svg";

const Collapsible = ({
    active,
    tagWrapper,
    classNameWrapper,
    tagTrigger,
    classNameTrigger,
    classNameIcon,
    tagContent,
    classNameContent,
    titleTagName,
    classNameTitle,
    tittle,
    children,
}) => {
    const [isOpen, setisOpen] = useState(active);

    const ElementWrapper = tagWrapper;
    const ElementTittle = titleTagName;
    const ElementContent = tagContent;

    const openClass = isOpen ? "collapsible__trigger--open" : "";

    const togglePanel = () => {
        setisOpen(!isOpen);
    };

    return (
        <div className={`collapsible ${classNameWrapper}`}>
            <ElementWrapper
                onClick={togglePanel}
                className={`collapsible__trigger ${openClass} s-d-flex s-cross-center s-main-justify ${classNameTrigger}`}
            >
                <ElementTittle className={`${classNameTitle}`}>
                    {tittle}
                </ElementTittle>
                <Chevron className={`trigger__icon ${classNameIcon}`} />
            </ElementWrapper>

            <CSSTransition
                in={isOpen}
                timeout={200}
                classNames="animation-collapsible"
                unmountOnExit
            >
                <ElementContent className={classNameContent}>{children}</ElementContent>
            </CSSTransition>
        </div>
    );
};

Collapsible.propTypes = {
    active: PropTypes.bool,
    tagWrapper: PropTypes.string,
    classNameWrapper: PropTypes.string,
    tagTrigger: PropTypes.string,
    classNameTrigger: PropTypes.string,
    classIcon: PropTypes.string,
    tagContent: PropTypes.string,
    classNameContent: PropTypes.string,
    titleTagName: PropTypes.string,
    classNameTitle: PropTypes.string,
    tittle: PropTypes.string,
    children: PropTypes.node,
};

Collapsible.defaultProps = {
    active: false,
    tagWrapper: "div",
    classNameWrapper: "",
    tagTrigger: "div",
    classNameTrigger: "",
    classIcon: "",
    tagContent:"div",
    classNameContent: "",
    titleTagName: "span",
    classNameTitle: "Collapsible__title",
    tittle: "Collapsible",
    children: null,
};

export default Collapsible;
