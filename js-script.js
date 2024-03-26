

//Create button on top
const button = document.getElementById('button');
button.textContent = 'Resize';
button.style.textAlign = 'center';
button.style.fontSize = '20px';
button.style.justifyContent = 'center';
button.style.alignItems = 'center';
button.style.margin = '50px';
const resize = button.addEventListener('click',function() {
        let e = prompt('Enter resize value');
        if (e>100) {
            return;
        }
        boxGrid(Number(e));
});


//Get div class container from index.html
const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';


//Create the Div Boxes inside a function
function boxGrid(gridNumber) {
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
boxGrid(10);

const divHover = document.querySelectorAll('.divBoxSingle');
divHover.forEach(divBox => {
    divBox.addEventListener('mouseover',function() {
        divBox.style.backgroundColor = 'blue';
    });   
});

//Arrange Items in Center
const mainDiv = document.createElement('div');
mainDiv.style.display = 'flex';
mainDiv.style.flexDirection = 'column';
mainDiv.style.justifyContent = 'center';
mainDiv.style.alignItems = 'center';
mainDiv.appendChild(button);
mainDiv.appendChild(container);
document.body.appendChild(mainDiv);



