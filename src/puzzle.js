"use strict"
class PuzzleContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMetaPuzzle: true,
            showPuzzle2: false,
        }
    }

    render() {
        return (
            <div>
                <MetaPuzzle show={this.state.showMetaPuzzle}></MetaPuzzle>
                <Puzzle2 show={this.state.showPuzzle2}></Puzzle2>
            </div>
        )
    }
}

function MetaPuzzle(props) {
    if (props.show) {
        return ( 
            <div>
                <p>Insert words</p>
            </div>
        )
    } else {
        return null;
    }
}

function Puzzle2(props) {
    if (props.show) {
        return (
            <div className="container">
                <div>
                    <div className="color-square" style={{backgroundColor: "#F0FFFF"}}></div>
                    <div className="color-square" style={{backgroundColor: "#ADFF2F"}}></div>
                    <div className="color-square" style={{backgroundColor: "#808080"}}></div>
                </div>
                <div>
                    <div className="color-square" style={{backgroundColor: "#CD5C5C"}}></div>
                    <div className="color-square" style={{backgroundColor: "#800000"}}></div>
                    <div className="color-square" style={{backgroundColor: "#FFDEAD"}}></div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

const puzzleContainer = document.querySelector("#puzzle");
ReactDOM.render(<PuzzleContainer />, puzzleContainer);