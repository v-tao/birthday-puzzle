"use strict"
function Puzzle2(props) {
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
}

const puzzleContainer = document.querySelector("#puzzle");
ReactDOM.render(<Puzzle2 />, puzzleContainer);