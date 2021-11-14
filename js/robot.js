// Constants

// Landmarks

const schoolLine = 4
const schoolCol = 1
const cinemaLine = 0
const cinemaCol = 2
const lakeLine = 1
const lakeCol = 5
const supermarketLine = 4
const supermarketCol = 7
const soccerFieldLine = 2
const soccerFieldCol = 8

// Board

const maxTileLine = 8
const maxTileCol = 9

// Scenarios

const scenario1 =
    "<div>Para ir ao Supermercado:</div><hr>\n" +
    "<ol>\n" +
    "<li>Deu um passo em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu três passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu um passo em frente</li>\n" +
    "</ol>"

const scenario2 =
    "<div>Para ir ao Supermercado:</div><hr>\n" +
    "<ol>\n" +
    "<li>Deu quatro passos em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu três passos em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "</ol>"

const scenario3 =
    "<div>Para ir ao Supermercado:</div><hr>\n" +
    "<ol>\n" +
    "<li>Deu dois passos em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu quatro passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu um passo em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "</ol>"

const scenario4 =
    "<div>Para ir ao Campo de Futebol:</div><hr>\n" +
    "<ol>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu quatro passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu quatro passos em frente</li>\n" +
    "</ol>"

const scenario5 =
    "<div>Para ir ao Campo de Futebol:</div><hr>\n" +
    "<ol>\n" +
    "<li>Deu um passo em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu dois passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu quatro passos em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu um passo em frente</li>\n" +
    "</ol>"

const scenario6 =
    "<div>Para ir ao Campo de Futebol:</div><hr>\n" +
    "<ol>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu dois passos em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu cinco passos em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu cinco passos em frente</li>\n" +
    "</ol>"

const scenario7 =
    "<div>Para ir ao Lago:</div><hr>\n" +
    "<ol>\n" +
    "<li>Deu três passos em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu um passo em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu dois passos em frente</li>\n" +
    "</ol>"

const scenario8 =
    "<div>Para ir ao Lago:</div><hr>\n" +
    "<ol>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu dois passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu seis passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "</ol>"

const scenario9 =
    "<div>Para ir ao Lago:</div><hr>\n" +
    "<ol>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu quatro passos em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu seis passos em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu quatro passos em frente</li>\n" +
    "</ol>"

const scenario10 =
    "<div>Para ir à Escola:</div><hr>\n" +
    "<ol>\n" +
    "<li>Deu quatro passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu três passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "</ol>"

const scenario11 =
    "<div>Para ir à Escola:</div><hr>\n" +
    "<ol>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu dois passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu dois passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu quatro passos em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu um passo em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "</ol>"

const scenario12 =
    "<div>Para ir à Escola:</div><hr>\n" +
    "<ol>\n" +
    "<li>Deu quatro passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu três passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "</ol>"

const scenario13 =
    "<div>Para ir ao Cinema:</div><hr>\n" +
    "<ol>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu dois passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu sete passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu três passos em frente</li>\n" +
    "</ol>"

const scenario14 =
    "<div>Para ir ao Cinema:</div><hr>\n" +
    "<ol>\n" +
    "<li>Deu quatro passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu um passo em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu três passos em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "</ol>"

const scenario15 =
    "<div>Para ir ao Cinema:</div><hr>\n" +
    "<ol>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu três passos em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu dois passos em frente</li>\n" +
    "<li>Virou um quarto de volta à direita</li>\n" +
    "<li>Deu um passo em frente</li>\n" +
    "<li>Virou um quarto de volta à esquerda</li>\n" +
    "<li>Deu quatro passos em frente</li>\n" +
    "</ol>"

const scenario1Path = ["fwd", "right", "fwd", "fwd", "fwd", "left", "fwd"]
const scenario2Path = ["fwd", "fwd", "fwd", "fwd", "right", "fwd", "fwd", "fwd", "right"]
const scenario3Path = ["fwd", "fwd", "right", "fwd", "fwd", "fwd", "fwd", "left", "fwd", "left"]
const scenario4Path = ["right", "fwd", "fwd", "fwd", "fwd", "left", "fwd", "fwd", "fwd", "fwd"]
const scenario5Path = ["fwd", "right", "fwd", "fwd", "left", "fwd", "fwd", "fwd", "fwd", "right", "fwd"]
const scenario6Path = ["left", "fwd", "fwd", "right", "fwd", "fwd", "fwd", "fwd", "fwd", "right", "fwd", "fwd", "fwd", "fwd", "fwd"]
const scenario7Path = ["fwd", "fwd", "fwd", "right", "fwd", "left", "fwd", "fwd"]
const scenario8Path = ["right", "fwd", "fwd", "left", "fwd", "fwd", "fwd", "fwd", "fwd", "fwd", "left"]
const scenario9Path = ["left", "fwd", "fwd", "fwd", "fwd", "right", "fwd", "fwd", "fwd", "fwd", "fwd", "fwd", "right", "fwd", "fwd", "fwd", "fwd"]
const scenario10Path = ["fwd", "fwd", "fwd", "fwd", "left", "fwd", "fwd", "fwd", "left"]
const scenario11Path = ["right", "fwd", "fwd", "left", "fwd", "fwd", "left", "fwd", "fwd", "fwd", "fwd", "right", "fwd", "left"]
const scenario12Path = ["fwd", "fwd", "fwd", "fwd", "left", "fwd", "fwd", "fwd", "left"]
const scenario13Path = ["right", "fwd", "fwd", "left", "fwd", "fwd", "fwd", "fwd", "fwd", "fwd", "fwd", "left", "fwd", "fwd", "fwd"]
const scenario14Path = ["fwd", "fwd", "fwd", "fwd", "left", "fwd", "right", "fwd", "fwd", "fwd", "left"]
const scenario15Path = ["left", "fwd", "fwd", "fwd", "right", "fwd", "fwd", "right", "fwd", "left", "fwd", "fwd", "fwd", "fwd"]

///////////////////////////////////////////////

// Globals

let board = [
    ["", "", "", "", "", "", "", "", ""], // board[0]
    ["", "", "", "", "", "", "", "", ""], // board[1]
    ["", "", "", "", "", "", "", "", ""], // board[2]
    ["", "", "", "", "", "", "", "", ""], // board[3]
    ["", "", "", "", "", "", "", "", ""], // board[4]
    ["", "", "", "", "", "", "", "", ""], // board[5]
    ["", "", "", "", "", "", "", "", ""], // board[6]
    ["", "", "", "", "X", "", "", "", ""], // board[7]
];
let pathBoard = [
    ["", "", "", "", "", "", "", "", ""], // board[0]
    ["", "", "", "", "", "", "", "", ""], // board[1]
    ["", "", "", "", "", "", "", "", ""], // board[2]
    ["", "", "", "", "", "", "", "", ""], // board[3]
    ["", "", "", "", "", "", "", "", ""], // board[4]
    ["", "", "", "", "", "", "", "", ""], // board[5]
    ["", "", "", "", "", "", "", "", ""], // board[6]
    ["", "", "", "", "X", "", "", "", ""], // board[7]
];
let currRotation = "up"
let currTileLine = 9
let currTileCol = 4
let currScenario = 0
let currScenarioNextPathIndex = 0

// Scenarios

let scenarios = ["",
    scenario1,
    scenario2,
    scenario3,
    scenario4,
    scenario5,
    scenario6,
    scenario7,
    scenario8,
    scenario9,
    scenario10,
    scenario11,
    scenario12,
    scenario13,
    scenario14,
    scenario15
]

let scenariosPath = [0,
    scenario1Path,
    scenario2Path,
    scenario3Path,
    scenario4Path,
    scenario5Path,
    scenario6Path,
    scenario7Path,
    scenario8Path,
    scenario9Path,
    scenario10Path,
    scenario11Path,
    scenario12Path,
    scenario13Path,
    scenario14Path,
    scenario15Path
]

// Logic

function processScenario(op) {
    console.log("scenario move: " + op)
    console.log("curr scenario: " + currScenario + " curr scenario next move: " + scenariosPath[currScenario][currScenarioNextPathIndex])

    if (currScenarioNextPathIndex === scenariosPath[currScenario].length) {
        return
    }

    if (op === scenariosPath[currScenario][currScenarioNextPathIndex]) {
        process(op)

        currScenarioNextPathIndex++

        if (currScenarioNextPathIndex === scenariosPath[currScenario].length) {
            winSound()
        }
    } else {
        wrongSound()
    }
}

function process(op) {
    console.log("current - line: " + currTileLine + " col: " + currTileCol)

    let change = ""
    let newTileLine = 1000
    let newTileCol = 1000

    for (let i = 0; i < board.length; i++) {
        const line = board[i];

        for (let j = 0; j < line.length; j++) {
            if (line[j] === "X") {
                switch (op) {
                    case "fwd":
                        change = "move"
                        switch (currRotation) {
                            case "up":
                                newTileLine = i - 1
                                newTileCol = j
                                break
                            case "left":
                                newTileLine = i
                                newTileCol = j - 1
                                break
                            case "right":
                                newTileLine = i
                                newTileCol = j + 1
                                break
                            case "down":
                                newTileLine = i + 1
                                newTileCol = j
                                break
                        }
                        break
                    case "left":
                        change = "rotateLeft"
                        break
                    case "right":
                        change = "rotateRight"
                        break
                }
            }
        }
    }

    let newBoard = [
        ["", "", "", "", "", "", "", "", ""], // board[0]
        ["", "", "", "", "", "", "", "", ""], // board[1]
        ["", "", "", "", "", "", "", "", ""], // board[2]
        ["", "", "", "", "", "", "", "", ""], // board[3]
        ["", "", "", "", "", "", "", "", ""], // board[4]
        ["", "", "", "", "", "", "", "", ""], // board[5]
        ["", "", "", "", "", "", "", "", ""], // board[6]
        ["", "", "", "", "", "", "", "", ""], // board[7]
    ];

    switch (change) {
        case "move":
            // validate edges
            if (newTileLine < 0 || newTileLine >= maxTileLine || newTileCol < 0 || newTileCol >= maxTileCol) {
                return
            }

            // prevent stepping on landmarks
            if (
                (newTileLine === schoolLine && newTileCol === schoolCol) ||
                (newTileLine === cinemaLine && newTileCol === cinemaCol) ||
                (newTileLine === lakeLine && newTileCol === lakeCol) ||
                (newTileLine === supermarketLine && newTileCol === supermarketCol) ||
                (newTileLine === soccerFieldLine && newTileCol === soccerFieldCol)
            ) {
                return;
            }

            // move
            newBoard[newTileLine][newTileCol] = "X"
            pathBoard[newTileLine][newTileCol] = "X"

            currTileLine = newTileLine
            currTileCol = newTileCol
            break
        case "rotateLeft":
            newBoard = board
            switch (currRotation) {
                case "up":
                    currRotation = "left"
                    break
                case "left":
                    currRotation = "down"
                    break
                case "right":
                    currRotation = "up"
                    break
                case "down":
                    currRotation = "right"
                    break
            }
            break
        case "rotateRight":
            newBoard = board
            switch (currRotation) {
                case "up":
                    currRotation = "right"
                    break
                case "left":
                    currRotation = "up"
                    break
                case "right":
                    currRotation = "down"
                    break
                case "down":
                    currRotation = "left"
                    break
            }
            break
    }

    console.log("new - line: " + currTileLine + " col: " + currTileCol)

    board = newBoard
    console.log("board: " + board)

    render()
}

function render() {
    for (let i = 0; i < board.length; i++) {
        const line = board[i];

        for (let j = 0; j < line.length; j++) {
            // paint path
            if (pathBoard[i][j] === "X") {
                document.getElementById("" + i + j).className = "tilePath"
            } else {
                document.getElementById("" + i + j).className = "tile";
            }

            // paint robot
            if (line[j] === "X") {
                document.getElementById("" + i + j).className = "tile"
                switch (currRotation) {
                    case "up":
                        document.getElementById("" + i + j).innerHTML = '<img class="tileImage" src="images/robot/robot.png">';
                        break
                    case "left":
                        document.getElementById("" + i + j).innerHTML = '<img class="tileImage rotateimg270" src="images/robot/robot.png">';
                        break
                    case "right":
                        document.getElementById("" + i + j).innerHTML = '<img class="tileImage rotateimg90" src="images/robot/robot.png">';
                        break
                    case "down":
                        document.getElementById("" + i + j).innerHTML = '<img class="tileImage rotateimg180" src="images/robot/robot.png">';
                        break
                }
            } else {
                document.getElementById("" + i + j).innerHTML = "";
            }
        }
    }

    paintLandmarks()
}

function paintLandmarks() {
    document.getElementById("" + schoolLine + schoolCol).innerHTML = '<img class="tileImage" src="images/robot/school.png" alt="ESCOLA">';
    document.getElementById("" + cinemaLine + cinemaCol).innerHTML = '<img class="tileImage" src="images/robot/cinema.png" alt="CINEMA">';
    document.getElementById("" + lakeLine + lakeCol).innerHTML = '<img class="tileImage" src="images/robot/lake.png" alt="LAGO">';
    document.getElementById("" + supermarketLine + supermarketCol).innerHTML = '<img class="tileImage" src="images/robot/supermarket.png" alt="SUPER-MERCADO">';
    document.getElementById("" + soccerFieldLine + soccerFieldCol).innerHTML = '<img class="tileImage" src="images/robot/soccerField.png" alt="CAMPO FUTEBOL">';
}

function scenario(scenario) {
    // set scenario
    currScenario = scenario
    currScenarioNextPathIndex = 0

    // activate itinerary feature
    document.getElementById("scenario").innerHTML = scenarios[scenario]
    document.getElementById("scenarios").className = "blocksScenarioActive"
    document.getElementById("controls").innerHTML = "<div>Move o Robot:</div>\n" +
        "        <hr>\n" +
        "        <div class=\"blocks\">\n" +
        "            <img class=\"control\" src=\"images/robot/left.png\" onclick=\"processScenario('left')\">\n" +
        "        </div>\n" +
        "        <div class=\"blocks\">\n" +
        "            <img class=\"control\" src=\"images/robot/fwd.png\" onclick=\"processScenario('fwd')\">\n" +
        "        </div>\n" +
        "        <div class=\"blocks\">\n" +
        "            <img class=\"control\" src=\"images/robot/right.png\" onclick=\"processScenario('right')\">\n" +
        "        </div>\n" +
        "        <div class=\"buttonBlocks\">\n" +
        "            <button class=\"button\" onclick=\"reload()\">Recomeçar</button>\n" +
        "        </div>"

    reload()
}

function reload() {
    board = [
        ["", "", "", "", "", "", "", "", ""], // board[0]
        ["", "", "", "", "", "", "", "", ""], // board[1]
        ["", "", "", "", "", "", "", "", ""], // board[2]
        ["", "", "", "", "", "", "", "", ""], // board[3]
        ["", "", "", "", "", "", "", "", ""], // board[4]
        ["", "", "", "", "", "", "", "", ""], // board[5]
        ["", "", "", "", "", "", "", "", ""], // board[6]
        ["", "", "", "", "X", "", "", "", ""], // board[7]
    ];
    pathBoard = [
        ["", "", "", "", "", "", "", "", ""], // board[0]
        ["", "", "", "", "", "", "", "", ""], // board[1]
        ["", "", "", "", "", "", "", "", ""], // board[2]
        ["", "", "", "", "", "", "", "", ""], // board[3]
        ["", "", "", "", "", "", "", "", ""], // board[4]
        ["", "", "", "", "", "", "", "", ""], // board[5]
        ["", "", "", "", "", "", "", "", ""], // board[6]
        ["", "", "", "", "X", "", "", "", ""], // board[7]
    ];
    currRotation = "up"
    currTileLine = 9
    currTileCol = 4
    currScenarioNextPathIndex = 0

    render()
}

// SFX

function wrongSound() {
    let wrong = new Sound("sfx/robot/wrong.mp3");
    wrong.play()
}

function winSound() {
    let win = new Sound("sfx/robot/win.wav");
    win.play()
}

function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

// Key bindings

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }

    switch (event.key) {
        case "Up": // IE/Edge specific value
        case "ArrowUp":
            if (currScenario === 0) {
                process("fwd")
            } else {
                processScenario("fwd")
            }
            break;
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
            if (currScenario === 0) {
                process("left")
            } else {
                processScenario("left")
            }
            break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
            if (currScenario === 0) {
                process("right")
            } else {
                processScenario("right")
            }
            break;
        default:
            return;
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);
