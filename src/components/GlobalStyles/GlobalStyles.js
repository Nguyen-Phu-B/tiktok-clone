import "./GlobalStyles.scss";
import React from "react";
import PropTypes from "prop-types";

const GlobalStyles = ({ children }) => {
    //  nhận duy nhất 1 children
    return React.Children.only(children);
};

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
