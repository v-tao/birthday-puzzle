"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PuzzleContainer = function (_React$Component) {
    _inherits(PuzzleContainer, _React$Component);

    function PuzzleContainer(props) {
        _classCallCheck(this, PuzzleContainer);

        var _this = _possibleConstructorReturn(this, (PuzzleContainer.__proto__ || Object.getPrototypeOf(PuzzleContainer)).call(this, props));

        _this.state = {
            showMetaPuzzle: true,
            showPuzzle2: false
        };
        return _this;
    }

    _createClass(PuzzleContainer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(MetaPuzzle, { show: this.state.showMetaPuzzle }),
                React.createElement(Puzzle2, { show: this.state.showPuzzle2 })
            );
        }
    }]);

    return PuzzleContainer;
}(React.Component);

function MetaPuzzle(props) {
    if (props.show) {
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
}

function Puzzle2(props) {
    if (props.show) {
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
    } else {
        return null;
    }
}

var puzzleContainer = document.querySelector("#puzzle");
ReactDOM.render(React.createElement(PuzzleContainer, null), puzzleContainer);