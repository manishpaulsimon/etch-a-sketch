//Get div class container from index.html
const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
document.body.appendChild(container);


//Create the Div Boxes inside a function
function boxGrid() {
    for (let i=0;i<16;i++) {
            const row = document.createElement('div');
            container.appendChild(row);

            for (let j=0;j<16;j++) {
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
boxGrid();

const divHover = document.querySelectorAll('.divBoxSingle');
divHover.forEach(divBox => {
    divBox.addEventListener('mouseover',function() {
        divBox.style.backgroundColor = 'blue';
    });   
});




