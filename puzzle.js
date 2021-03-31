"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var PuzzleContainer = function PuzzleContainer() {
    var _React$useState = React.useState("meta"),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        puzzle = _React$useState2[0],
        setPuzzle = _React$useState2[1];

    var updatePuzzle = function updatePuzzle(puzzle) {
        setPuzzle(puzzle);
    };
    return React.createElement(
        "div",
        null,
        React.createElement(Header, { updatePuzzle: updatePuzzle }),
        React.createElement(MetaPuzzle, { puzzle: puzzle }),
        React.createElement(Puzzle2, { puzzle: puzzle }),
        React.createElement(Puzzle3, { puzzle: puzzle }),
        React.createElement(Puzzle6, { puzzle: puzzle })
    );
};

var Header = function Header(_ref) {
    var updatePuzzle = _ref.updatePuzzle;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "The Birthday Puzzle"
        ),
        React.createElement(
            "button",
            { onClick: function onClick() {
                    return updatePuzzle("1");
                } },
            "Puzzle1"
        ),
        React.createElement(
            "button",
            { onClick: function onClick() {
                    return updatePuzzle("2");
                } },
            "Puzzle2"
        ),
        React.createElement(
            "button",
            { onClick: function onClick() {
                    return updatePuzzle("3");
                } },
            "Puzzle3"
        ),
        React.createElement(
            "button",
            { onClick: function onClick() {
                    return updatePuzzle("4");
                } },
            "Puzzle4"
        ),
        React.createElement(
            "button",
            { onClick: function onClick() {
                    return updatePuzzle("5");
                } },
            "Puzzle5"
        ),
        React.createElement(
            "button",
            { onClick: function onClick() {
                    return updatePuzzle("6");
                } },
            "Puzzle6"
        ),
        React.createElement(
            "button",
            { onClick: function onClick() {
                    return updatePuzzle("7");
                } },
            "Puzzle7"
        )
    );
};

var MetaPuzzle = function MetaPuzzle(_ref2) {
    var puzzle = _ref2.puzzle;

    if (puzzle == "meta") {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "Insert words"
            )
        );
    } else {
        return null;
    }
};

var Puzzle2 = function Puzzle2(_ref3) {
    var puzzle = _ref3.puzzle;

    if (puzzle == "2") {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement("div", { className: "color-square", style: { backgroundColor: "#F0FFFF" } }),
            React.createElement("div", { className: "color-square", style: { backgroundColor: "#ADFF2F" } }),
            React.createElement("div", { className: "color-square", style: { backgroundColor: "#808080" } }),
            React.createElement("div", { className: "color-square", style: { backgroundColor: "#CD5C5C" } }),
            React.createElement("div", { className: "color-square", style: { backgroundColor: "#800000" } }),
            React.createElement("div", { className: "color-square", style: { backgroundColor: "#FFDEAD" } })
        );
    } else {
        return null;
    }
};

var Puzzle3 = function Puzzle3(_ref4) {
    var puzzle = _ref4.puzzle;

    if (puzzle == "3") {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "ol",
                null,
                React.createElement(
                    "li",
                    null,
                    "Start at your park."
                ),
                React.createElement(
                    "li",
                    null,
                    "Head south on your road (1 mile)."
                ),
                React.createElement(
                    "li",
                    null,
                    "Turn left onto Greenwich Road (3.5 miles)."
                ),
                React.createElement(
                    "li",
                    null,
                    "Turn right onto Mennonite Road (2.6 miles)."
                ),
                React.createElement(
                    "li",
                    null,
                    "Continue onto North Main Street (1.0 mile)."
                ),
                React.createElement(
                    "li",
                    null,
                    "Turn right. Destination will be on the right (98 feet)."
                )
            )
        );
    } else {
        return null;
    }
};

var Puzzle6 = function Puzzle6(_ref5) {
    var puzzle = _ref5.puzzle;

    if (puzzle == "6") {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    null,
                    "Where are the sleepless nights I used to live for?"
                ),
                React.createElement(
                    "li",
                    null,
                    "Don\u2019t give me love, don\u2019t give me faith."
                ),
                React.createElement(
                    "li",
                    null,
                    "Remember the first dance we shared?"
                ),
                React.createElement(
                    "li",
                    null,
                    "The faces of the past keep calling me to come back home."
                ),
                React.createElement(
                    "li",
                    null,
                    "The answer's in the fair winds my love."
                )
            )
        );
    } else {
        return null;
    }
};

var puzzleContainer = document.querySelector("#puzzle");
ReactDOM.render(React.createElement(PuzzleContainer, null), puzzleContainer);