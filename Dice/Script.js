const buttonEl = document.getElementById('roll-button');
const diceEl = document.getElementById('dice');
let historyList = [ ];

buttonEl.addEventListener('click',()=>{
    diceEl.classList.add('roll-animation')
    setTimeout(() => {
        diceEl.classList.remove('roll-animation')
        rollDice()
    }, 1000);
} ) 

function rollDice()
{
    const rollResult = Math.floor(Math.random()*6)+1;
    const diceface = getDiceface(rollResult);
    diceEl.innerHTML = diceface;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory()
{
    const historyEl = document.getElementById('roll-history');
    historyEl.innerHTML = " ";
    for(let i=0; i<historyList.length; i++)
    {
        const listitem = document.createElement('li');
        listitem.innerHTML = `Roll ${i + 1} : <span>${
            getDiceface(historyList[i])
        }</span>`
        historyEl.appendChild(listitem);
    }

}
function getDiceface(rollResult)
{
    switch(rollResult)
        {
            case 1:
                return '&#9856;';
            case 2:
                return '&#9857;';
            case 3:
                return '&#9858;';
            case 4:
                return '&#9859;';
            case 5:
                return '&#9860;';
            case 6:
                return '&#9861;';
            default:
                return ' ';
        }
}

     