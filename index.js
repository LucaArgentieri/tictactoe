const container = document.querySelector('.tris_container')
const bot_container = document.querySelector('.tris_bot_container')
const singleBtn = document.querySelector('#single')
const oneVsOne = document.querySelector('#oneVsOne')
const btnContainer = document.querySelector('.btnContainer')
let mode
let filteredList




const TicTacToe = class TicTacToe {
    constructor() {
        this.img
        this.turn = Math.random() < 0.5
    }
    init() {


        // singleBtn.addEventListener('click', evt => {
        //     mode = false
        //     btnContainer.classList.add('puff')
        //     bot_container.classList.remove('puff')
        //     if (!mode) {
        //         this.setBotMoves()
        //     }
        // })

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
            this.turn === 0 ? evt.target.setAttribute('id', 'x') : evt.target.setAttribute('id', 'o')

            evt.target.appendChild(this.img)
            this.checkTurn()
        })

    }

    setBotMoves() {
        // bot_container.addEventListener('click', evt => {
        //     this.img = document.createElement('img')
        //     this.turn === 0 ? this.img.setAttribute('src', './img/times-solid.svg') : this.checkBotMoves()
        //     this.turn === 0 ? evt.target.setAttribute('id', 'x') : evt.target.setAttribute('id', 'o')
        //     evt.target.appendChild(this.img)
        //     this.checkTurn()
        // })
    }
    checkBotMoves() {
        //Filtrare la lista di span disponibili dove creare img
        // Prenderne uno a caso ed inserire l'img
        // this.img = document.createElement('img')

        // this.img.setAttribute('src', './img/circle-regular.svg')

        // let randomSpan = bot_container.children[Math.floor(Math.random() * 9) + 1]
        // if (randomSpan.attributes.id) {
        //     if (randomSpan.attributes.id.value === 'x' || randomSpan.attributes.id.value === 'o' || randomSpan.attributes.id.value === undefined) {
        //         console.log('nope')
        //     } else {
        //         randomSpan.appendChild(this.img)
        //     }
        // } else {
        //     return
        // }

    }

    checkTurn() {
        // Devo alternare i turni tra O e X
        this.turn = this.turn === 0 ? 1 : 0
        this.checkWinner()
        this.checkBotWinner()

    }
    checkWinner() {
        // Devo controllare se 3 segni sono allineati
        if (
            (container.children[0].id === 'x'
                && container.children[3].id === 'x'
                && container.children[6].id === 'x')
            ||
            (container.children[6].id === 'x'
                && container.children[3].id === 'x'
                && container.children[0].id === 'x')
            ||
            (container.children[1].id === 'x'
                && container.children[4].id === 'x'
                && container.children[7].id === 'x')
            ||
            (container.children[7].id === 'x'
                && container.children[4].id === 'x'
                && container.children[1].id === 'x')
            ||
            (container.children[2].id === 'x'
                && container.children[5].id === 'x'
                && container.children[8].id === 'x')
            ||
            (container.children[8].id === 'x'
                && container.children[5].id === 'x'
                && container.children[2].id === 'x')
            ||
            (container.children[0].id === 'x'
                && container.children[1].id === 'x'
                && container.children[2].id === 'x')
            ||
            (container.children[2].id === 'x'
                && container.children[1].id === 'x'
                && container.children[0].id === 'x')
            ||
            (container.children[3].id === 'x'
                && container.children[4].id === 'x'
                && container.children[5].id === 'x')
            ||
            (container.children[6].id === 'x'
                && container.children[7].id === 'x'
                && container.children[8].id === 'x')
            // Diagonali
            ||
            (container.children[0].id === 'x'
                && container.children[4].id === 'x'
                && container.children[8].id === 'x')
            ||
            (container.children[8].id === 'x'
                && container.children[4].id === 'x'
                && container.children[0].id === 'x')
            ||
            (container.children[2].id === 'x'
                && container.children[4].id === 'x'
                && container.children[6].id === 'x')
            ||
            (container.children[6].id === 'x'
                && container.children[4].id === 'x'
                && container.children[2].id === 'x')
        ) {
            alert('X ha vinto')
            location.reload();

        } else if (
            (container.children[0].id === 'o'
                && container.children[3].id === 'o'
                && container.children[6].id === 'o')
            ||
            (container.children[6].id === 'o'
                && container.children[3].id === 'o'
                && container.children[0].id === 'o')
            ||
            (container.children[1].id === 'o'
                && container.children[4].id === 'o'
                && container.children[7].id === 'o')
            ||
            (container.children[7].id === 'o'
                && container.children[4].id === 'o'
                && container.children[1].id === 'o')
            ||
            (container.children[2].id === 'o'
                && container.children[5].id === 'o'
                && container.children[8].id === 'o')
            ||
            (container.children[8].id === 'o'
                && container.children[5].id === 'o'
                && container.children[2].id === 'o')
            ||
            (container.children[0].id === 'o'
                && container.children[1].id === 'o'
                && container.children[2].id === 'o')
            ||
            (container.children[2].id === 'o'
                && container.children[1].id === 'o'
                && container.children[0].id === 'o')
            ||
            (container.children[3].id === 'o'
                && container.children[4].id === 'o'
                && container.children[5].id === 'o')
            ||
            (container.children[6].id === 'o'
                && container.children[7].id === 'o'
                && container.children[8].id === 'o')
            // Diagonali
            ||
            (container.children[0].id === 'o'
                && container.children[4].id === 'o'
                && container.children[8].id === 'o')
            ||
            (container.children[8].id === 'o'
                && container.children[4].id === 'o'
                && container.children[0].id === 'o')
            ||
            (container.children[2].id === 'o'
                && container.children[4].id === 'o'
                && container.children[6].id === 'o')
            ||
            (container.children[6].id === 'o'
                && container.children[4].id === 'o'
                && container.children[2].id === 'o')
        ) {
            alert('O ha vinto')
            location.reload();
        } else if (document.querySelectorAll('span#x').lengthlength > 6 || document.querySelectorAll('span#o').length > 6) {
            alert('Draw')
            location.reload();

        }




    }
    checkBotWinner() {
        if (
            (bot_container.children[0].id === 'x'
                && bot_container.children[3].id === 'x'
                && bot_container.children[6].id === 'x')
            ||
            (bot_container.children[6].id === 'x'
                && bot_container.children[3].id === 'x'
                && bot_container.children[0].id === 'x')
            ||
            (bot_container.children[1].id === 'x'
                && bot_container.children[4].id === 'x'
                && bot_container.children[7].id === 'x')
            ||
            (bot_container.children[7].id === 'x'
                && bot_container.children[4].id === 'x'
                && bot_container.children[1].id === 'x')
            ||
            (bot_container.children[2].id === 'x'
                && bot_container.children[5].id === 'x'
                && bot_container.children[8].id === 'x')
            ||
            (bot_container.children[8].id === 'x'
                && bot_container.children[5].id === 'x'
                && bot_container.children[2].id === 'x')
            ||
            (bot_container.children[0].id === 'x'
                && bot_container.children[1].id === 'x'
                && bot_container.children[2].id === 'x')
            ||
            (bot_container.children[2].id === 'x'
                && bot_container.children[1].id === 'x'
                && bot_container.children[0].id === 'x')
            ||
            (bot_container.children[3].id === 'x'
                && bot_container.children[4].id === 'x'
                && bot_container.children[5].id === 'x')
            ||
            (bot_container.children[6].id === 'x'
                && bot_container.children[7].id === 'x'
                && bot_container.children[8].id === 'x')
            // Diagonali
            ||
            (bot_container.children[0].id === 'x'
                && bot_container.children[4].id === 'x'
                && bot_container.children[8].id === 'x')
            ||
            (bot_container.children[8].id === 'x'
                && bot_container.children[4].id === 'x'
                && bot_container.children[0].id === 'x')
            ||
            (bot_container.children[2].id === 'x'
                && bot_container.children[4].id === 'x'
                && bot_container.children[6].id === 'x')
            ||
            (bot_container.children[6].id === 'x'
                && bot_container.children[4].id === 'x'
                && bot_container.children[2].id === 'x')
        ) {
            alert('X ha vinto')
            location.reload();

        } else if (
            (bot_container.children[0].id === 'o'
                && bot_container.children[3].id === 'o'
                && bot_container.children[6].id === 'o')
            ||
            (bot_container.children[6].id === 'o'
                && bot_container.children[3].id === 'o'
                && bot_container.children[0].id === 'o')
            ||
            (bot_container.children[1].id === 'o'
                && bot_container.children[4].id === 'o'
                && bot_container.children[7].id === 'o')
            ||
            (bot_container.children[7].id === 'o'
                && bot_container.children[4].id === 'o'
                && bot_container.children[1].id === 'o')
            ||
            (bot_container.children[2].id === 'o'
                && bot_container.children[5].id === 'o'
                && bot_container.children[8].id === 'o')
            ||
            (bot_container.children[8].id === 'o'
                && bot_container.children[5].id === 'o'
                && bot_container.children[2].id === 'o')
            ||
            (bot_container.children[0].id === 'o'
                && bot_container.children[1].id === 'o'
                && bot_container.children[2].id === 'o')
            ||
            (bot_container.children[2].id === 'o'
                && bot_container.children[1].id === 'o'
                && bot_container.children[0].id === 'o')
            ||
            (bot_container.children[3].id === 'o'
                && bot_container.children[4].id === 'o'
                && bot_container.children[5].id === 'o')
            ||
            (bot_container.children[6].id === 'o'
                && bot_container.children[7].id === 'o'
                && bot_container.children[8].id === 'o')
            // Diagonali
            ||
            (bot_container.children[0].id === 'o'
                && bot_container.children[4].id === 'o'
                && bot_container.children[8].id === 'o')
            ||
            (bot_container.children[8].id === 'o'
                && bot_container.children[4].id === 'o'
                && bot_container.children[0].id === 'o')
            ||
            (bot_container.children[2].id === 'o'
                && bot_container.children[4].id === 'o'
                && bot_container.children[6].id === 'o')
            ||
            (bot_container.children[6].id === 'o'
                && bot_container.children[4].id === 'o'
                && bot_container.children[2].id === 'o')
        ) {
            alert('O ha vinto')
            location.reload();
        } else if (document.querySelectorAll('span#x').lengthlength >= 5 || document.querySelectorAll('span#o').length >= 5) {
            alert('Draw')
            location.reload();
        }

    }
}




const tris = new TicTacToe()
tris.init()




