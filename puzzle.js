"use strict";

function Puzzle(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Test"
        )
    );
}

var puzzleContainer = document.querySelector("#puzzle");
ReactDOM.render(React.createElement(Puzzle, null), puzzleContainer);