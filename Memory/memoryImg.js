class Memory {
    constructor(grid, tab1) {
        this.grid = grid
        this.tableau = []
        this.tab1 = tab1

        this.init()
        this.melange()
        this.remplir()
        this.jeu()
    }
    init() {
        for (let i = 0; i < this.tab1.length; i++) {
            this.tableau.push(this.tab1[i])
            this.tableau.push(this.tab1[i])
        }
    }

    melange() {
        for (let i = 0; i < this.tableau.length; i++) {
            let x = Math.floor(Math.random() * 16)
            let tmp = this.tableau[x]
            this.tableau[x] = this.tableau[i]
            this.tableau[i] = tmp
        }
    }
    remplir() {
        for (let i = 0; i < this.tableau.length; i++) {
            this.grid.innerHTML += "<div class='case'><div class='mask' data-id='"+ this.tableau[i] +"'></div><img src='" + this.tableau[i] + "'/></div>"
        }
    }
    jeu() {
        let click1 = true
        let compteurBon = 0
        let compteur = 0
        let tmp=undefined
        const compter = document.querySelector('span')
        const victory = document.querySelector('footer')

        this.grid.addEventListener('click', function (e) {
            if(!e.target.classList.contains("noMask")) {
                e.target.classList.add("noMask")
                if (!click1) {
                    if(e.target.getAttribute("data-id")==tmp.getAttribute("data-id")) {
                        compteurBon++
                        compter.innerText = compteur
                        if (compteurBon == 8) {
                            victory.innerText="Vous avez gagné !!! Vous avez fait " + compteur + " essais"
                        }
                        click1=true
                    }
                    else {
                            setTimeout(function () {
                                e.target.classList.remove("noMask")
                                tmp.classList.remove("noMask")
                            }, 500)
                            click1=true
                        }
                    }
                    
                else {
                    compteur++
                    tmp = e.target;
                    click1=false;
                }
                }
            }
        )
    }
}

const section = document.querySelector('section')
const imagesSrc = [
    "Images/36-small-flowers.jpg", 
    "Images/66284132_medium.jpg", 
    "Images/DSC4176-900x601.jpg", 
    "Images/hedgehog.jpg", 
    "Images/images.jpg", 
    "Images/Springs-20170505-1515.jpg", 
    "Images/unnamed(1).jpg", 
    "Images/unnamed(2).jpg"]

jouer = new Memory(section, imagesSrc)
