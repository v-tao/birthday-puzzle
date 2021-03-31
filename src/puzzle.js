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
            <Puzzle3 puzzle={puzzle}></Puzzle3>
            <Puzzle4 puzzle={puzzle}></Puzzle4>
            <Puzzle6 puzzle={puzzle}></Puzzle6>
            <Puzzle7 puzzle={puzzle}></Puzzle7>
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
                    <div className="color-square" style={{backgroundColor: "#F0FFFF"}}></div>
                    <div className="color-square" style={{backgroundColor: "#ADFF2F"}}></div>
                    <div className="color-square" style={{backgroundColor: "#808080"}}></div>
                    <div className="color-square" style={{backgroundColor: "#CD5C5C"}}></div>
                    <div className="color-square" style={{backgroundColor: "#800000"}}></div>
                    <div className="color-square" style={{backgroundColor: "#FFDEAD"}}></div>
            </div>
        )
    } else {
        return null;
    }
}

const Puzzle3 = ({puzzle}) => {
    if (puzzle == "3") {
        return (
            <div className = "container">
                <ol>
                    <li>Start at your park.</li>
                    <li>Head south on your road (1 mile).</li>
                    <li>Turn left onto Greenwich Road (3.5 miles).</li>
                    <li>Turn right onto Mennonite Road (2.6 miles).</li>
                    <li>Continue onto North Main Street (1.0 mile).</li>
                    <li>Turn right. Destination will be on the right (98 feet).</li>
                </ol>
            </div>
        )
    } else {
        return null;
    }
}

const Puzzle4 = ({puzzle}) => {
    if (puzzle == "4") {
        return (
            <div className="container">
                <h1 id="puzzle4-clue1">Think inside a smaller box.</h1>
                <h1 id="puzzle4-clue2">Open another box within this box. Call Ray.</h1>
            </div>
        )
    } else {
        return null;
    }
}

const Ray = () => {
    console.log("Think outside this box, and in another box. Your code phrase is \"I proudly announce that I am a furry uwu\"")
}

const Puzzle6 = ({puzzle}) => {
    if (puzzle == "6") {
        return (
            <div className="container">
                <ul>
                    <li>Don’t give me love, don’t give me faith.</li>
                    <li>Remember the first dance we shared?</li>
                    <li>The answer's in the fair winds my love.</li>
                    <li>The faces of the past keep calling me to come back home.</li>
                    <li>Where are the sleepless nights I used to live for?</li>
                </ul>
            </div>
        )
    } else {
        return null;
    }
}

const Puzzle7 = ({puzzle}) => {
    if (puzzle == "7") {
        return (
            <div className="container">
                <ul>
                    <li>Alix E. Harrow</li>
                    <li>Lisa Moore</li>
                    <li>Philip Kerr</li>
                    <li>Elizabeth von Arnim</li>
                    <li>Jake Tapper</li>
                    <li>Stephen E. Ambrose</li>
                    <li>Joan Lingard</li>
                    <li>Barbara W. Tuchman</li>
                    <li>Rosamunde Pilcher</li>
                    <li>Fred Hoyle</li>
                    <li>Ernest J. Gaines</li>
                    <li>Anita Hale Shreve</li>
                </ul>
            </div>
        )
    } else {
        return null;
    }
}

const puzzleContainer = document.querySelector("#puzzle");
ReactDOM.render(<PuzzleContainer />, puzzleContainer);