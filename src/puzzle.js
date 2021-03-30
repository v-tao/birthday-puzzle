"use strict"
class Puzzle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>
                    Puzzle
                </h1>
            </div>
        )
    }
}

const puzzleContainer = document.querySelector("#puzzle");
ReactDOM.render(<Puzzle />, puzzleContainer);