"use strict";

function Puzzle2(props) {
    return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
            "div",
            null,
            React.createElement("div", { className: "color-square", style: { backgroundColor: "#F0FFFF" } }),
            React.createElement("div", { className: "color-square", style: { backgroundColor: "#ADFF2F" } }),
            React.createElement("div", { className: "color-square", style: { backgroundColor: "#808080" } })
        ),
        React.createElement(
            "div",
            null,
            React.createElement("div", { className: "color-square", style: { backgroundColor: "#CD5C5C" } }),
            React.createElement("div", { className: "color-square", style: { backgroundColor: "#800000" } }),
            React.createElement("div", { className: "color-square", style: { backgroundColor: "#FFDEAD" } })
        )
    );
}

var puzzleContainer = document.querySelector("#puzzle");
ReactDOM.render(React.createElement(Puzzle2, null), puzzleContainer);