import*as React from"react";import Horizontal from"../../src/esm/PlanetariumHorizontalIcon";import Symbol from"../../src/esm/PlanetariumSymbolIcon";import Vertical from"../../src/esm/PlanetariumVerticalIcon";import Wordmark from"../../src/esm/PlanetariumWordmarkIcon";const PlanetariumIcon=({type,...props})=>{switch(type){case"horizontal":return/*#__PURE__*/React.createElement(Horizontal,props);case"symbol":return/*#__PURE__*/React.createElement(Symbol,props);case"vertical":return/*#__PURE__*/React.createElement(Vertical,props);case"wordmark":return/*#__PURE__*/React.createElement(Wordmark,props);default:return/*#__PURE__*/React.createElement(Horizontal,props)}};export default PlanetariumIcon;