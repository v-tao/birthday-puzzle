"use strict"

const PuzzleContainer = () => {
    const [puzzle, setPuzzle] = React.useState("meta");
    const updatePuzzle = (puzzle) => {
        setPuzzle(puzzle);
    }
    return (
        <div>
            <Header updatePuzzle={updatePuzzle}></Header>
            <MetaPuzzle puzzle={puzzle}></MetaPuzzle>
            <Puzzle2 puzzle={puzzle}></Puzzle2>
            <Puzzle6 puzzle={puzzle}></Puzzle6>
        </div>
    )
}

const Header = ({updatePuzzle}) => {
    return( 
        <div>
            <h1>The Birthday Puzzle</h1>
            <button onClick={()=> updatePuzzle("1")}>Puzzle1</button>
            <button onClick={()=> updatePuzzle("2")}>Puzzle2</button>
            <button onClick={()=> updatePuzzle("3")}>Puzzle3</button>
            <button onClick={()=> updatePuzzle("4")}>Puzzle4</button>
            <button onClick={()=> updatePuzzle("5")}>Puzzle5</button>
            <button onClick={()=> updatePuzzle("6")}>Puzzle6</button>
            <button onClick={()=> updatePuzzle("7")}>Puzzle7</button>
        </div>
    )
}

const MetaPuzzle = ({puzzle}) => {
    if (puzzle == "meta") {
        return ( 
            <div>
                <p>Insert words</p>
            </div>
        )
    } else {
        return null;
    }
}

const Puzzle2 = ({puzzle}) => {
    if (puzzle == "2") {
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

const Puzzle6 = ({puzzle}) => {
    if (puzzle == "6") {
        return (
            <div className="container">
                <ul>
                    <li>Where are the sleepless nights I used to live for?</li>
                    <li>Don’t give me love, don’t give me faith.</li>
                    <li>Remember the first dance we shared?</li>
                    <li>The faces of the past keep calling me to come back home.</li>
                    <li>The answer's in the fair winds my love.</li>
                </ul>
            </div>
        )
    } else {
        return null;
    }
}

const puzzleContainer = document.querySelector("#puzzle");
ReactDOM.render(<PuzzleContainer />, puzzleContainer);