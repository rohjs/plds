const React = require("react");import CircleIcon from"../../src/cjs/RedditCircleIcon";import OriginalIcon from"../../src/cjs/RedditOriginalIcon";import SolidIcon from"../../src/cjs/RedditSolidIcon";import SolidCircleIcon from"../../src/cjs/RedditSolidCircleIcon";const RedditIcon=({solid,circle,...props})=>{switch(solid){case false:return circle?/*#__PURE__*/React.createElement(CircleIcon,props):/*#__PURE__*/React.createElement(OriginalIcon,props);case true:return circle?/*#__PURE__*/React.createElement(SolidCircleIcon,props):/*#__PURE__*/React.createElement(SolidIcon,props);default:return circle?/*#__PURE__*/React.createElement(CircleIcon,props):/*#__PURE__*/React.createElement(OriginalIcon,props)}};module.exports = RedditIcon;