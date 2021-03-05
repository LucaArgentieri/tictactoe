const container = document.querySelector('.tris_container')
const oneVsOne = document.querySelector('#oneVsOne')
const btnContainer = document.querySelector('.btnContainer')
let mode
let filteredList




const TicTacToe = class TicTacToe {
    constructor() {
        this.img
        this.turn = Math.random() < 0.5
        this.grid = document.querySelector('.col')
        this.gameState = ["", "", "", "", "", "", "", "", ""];
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    }
    init() {

        oneVsOne.addEventListener('click', evt => {
            mode = true
            btnContainer.classList.add('puff')
            container.classList.remove('puff')
            if (mode) {
                this.setMoves()
            }
        })


    }

    setMoves() {
        container.addEventListener('click', evt => {
            this.img = document.createElement('img')
            this.turn === 0 ? this.img.setAttribute('src', './img/times-solid.svg') : this.img.setAttribute('src', './img/circle-regular.svg')
            this.turn === 0 ? evt.target.setAttribute('data-id', 'x') : evt.target.setAttribute('data-id', 'o')
            this.gameState.push(evt.target.dataset.id)
            evt.target.appendChild(this.img)
            this.checkTurn()
        })

    }


    checkTurn() {
        this.turn = this.turn === 0 ? 1 : 0
        this.checkWinner()

    }
    checkWinner() {

        console.log(this.gameState)


        // Per ogni elemento della lista di mosse vincenti
        for (let i = 0; i <= 7; i++) {

            //Crea questa variabile che contiene le mosse
            const winCondition = this.winningConditions[i];

            //Ed inserisci il valore in base alla sua posizione
            let a = this.gameState[winCondition[0]];
            let b = this.gameState[winCondition[1]];
            let c = this.gameState[winCondition[2]];

            console.log(this.grid.dataset.id)



            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                alert('ciao')
            }

        }





    }

}




const tris = new TicTacToe()
tris.init()




