const zoneJeu = document.querySelector('article')
const phrase1 = document.querySelector('div[data-side="left"]')
const phrase2 = document.querySelector('div[data-side="right"]')
const btn = document.querySelectorAll('button')
const winPhrase = document.querySelector('aside')
phrase1.innerText="Joueur 1, joue avec X"

counter = btn.length
var firstPlayer = true
var joueur

function victoryTest()
{
    let win = false
    for(let i=1; i<=3; i++)
    {
        const elementX = document.querySelectorAll('button[data-x="' + i + '"]')
        const elementY = document.querySelectorAll('button[data-y="' + i + '"]')
        const elementD1 = document.querySelectorAll('button[data-d1="1"]')
        const elementD2 = document.querySelectorAll('button[data-d2="2"]')

        let sameValueX = true
        let sameValueY = true
        let sameValueD1 = true
        let sameValueD2 = true

        for(let k=0; k < elementX.length-1; k++)
        {
            if(elementX[k].innerText != elementX[k+1].innerText || elementX[k].innerText == "")
            {
                sameValueX = false
            }
            if(elementY[k].innerText != elementY[k+1].innerText || elementY[k].innerText == "")
            {
                sameValueY = false
            }
            if(elementD1[k].innerText != elementD1[k+1].innerText || elementD1[k].innerText == "")
            {
                sameValueD1 = false
            }
            if(elementD2[k].innerText != elementD2[k+1].innerText || elementD2[k].innerText == "")
            {
                sameValueD2 = false
            }
        }
        if(sameValueX || sameValueY || sameValueD1 || sameValueD2) {
            win=true
            break;
        }
    }
    return win
}

zoneJeu.addEventListener('click', function(e) {
    phrase1.innerText = ""
            phrase2.innerText = ""
    if(e.target.innerText == "" && victoryTest()==false) {
        if(firstPlayer == true) {
            e.target.innerText = "X"
            joueur = 1
            counter==1 ? winPhrase.innerHTML="<h2>Le jeu est fini, personne n'est gagné.</h2>" :  phrase2.innerText = "Joueur 2, joue avec O"
        }
        else {
            e.target.innerText = "O"
            joueur = 2
            counter==1 ? winPhrase.innerHTML="<h2>Le jeu est fini, personne n'est gagné.</h2>" : phrase1.innerText = "Joueur 1, joue avec X"
        }
        victoryTest()
        if(victoryTest()==true) {
            phrase1.innerText = ""
            phrase2.innerText = ""
            winPhrase.innerHTML = "<h2>Victoire ! Joueur " + joueur + " à gagné !</h2>"
        }
        firstPlayer = !firstPlayer
        counter--
    }
})




