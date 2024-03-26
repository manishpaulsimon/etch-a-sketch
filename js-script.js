

//Create button on top
const button = document.getElementById('button');
button.textContent = 'Resize';
button.style.textAlign = 'center';
button.style.fontSize = '20px';
button.style.justifyContent = 'center';
button.style.alignItems = 'center';
button.style.margin = '50px';

//Add event functionality to resize button to resize elements
const resize = button.addEventListener('click',function() {
    mainDiv.removeChild(container);
    let e;
    do {
        e = prompt('Enter resize value between 1 and 100:');
        if (e === null) {
            //user canceled the prompt
            return;
        }
        e = parseInt(e);
        if (isNaN(e) || e<=0 || e>100) {
            alert('Please enter a valid number between 0 and 100');
        }
    }
    while (isNaN(e) || e<=0 || e>100);

    boxGrid(e);
    mainDiv.appendChild(container);
    addEventListenerToGrid();
});


//Get div class container from index.html
const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

//Function to create new Event Listeners
function addEventListenerToGrid() {
    const divHover = document.querySelectorAll('.divBoxSingle');
    divHover.forEach(divBox => {
        divBox.addEventListener('mouseover',hoverHandler);
    });
}

//Function to remove old Event Listners
function removeEventListenerFromGrid() {
    const divHover = document.querySelectorAll('.divBoxSingle');
    divHover.forEach(divBox => {
        divBox.removeEventListener('mouseover',hoverHandler);
    }); 
}

//Create the Div Boxes inside a function
function boxGrid(gridNumber) {

    //removes hover functionality on new creation of grid
    removeEventListenerFromGrid();
    container.innerHTML = '';
    
    for (let i=0;i<gridNumber;i++) {
            const row = document.createElement('div');
            container.appendChild(row);

            for (let j=0;j<gridNumber;j++) {
                const divBox = document.createElement('div');
                divBox.classList.add('divBoxSingle');
                divBox.style.boxSizing = 'border-box';
                divBox.style.width = '50px';
                divBox.style.height = '50px';
                divBox.style.border = '1px solid black';
                row.appendChild(divBox);
            }
    }

};
//creates default grid with hover functionality
boxGrid(16);
addEventListenerToGrid();

//Arrange Items in Center
const mainDiv = document.createElement('div');
mainDiv.style.display = 'flex';
mainDiv.style.flexDirection = 'column';
mainDiv.style.justifyContent = 'center';
mainDiv.style.alignItems = 'center';
mainDiv.appendChild(button);
mainDiv.appendChild(container);
document.body.appendChild(mainDiv);

//change color of hover
function hoverHandler() {
    this.style.backgroundColor = 'blue';
}



