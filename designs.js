
// create grid after clicking submit button with respect to the grid height and with inputs
function makeGrid() {
    const pixelCanvas = document.querySelector('#pixelCanvas');

    // get grid size from input
    const rowElements = Number(document.querySelector('#inputHeight').value);
    const columnElements = Number(document.querySelector('#inputWidth').value);

    // if a current grid exists, delete grid before creating new one
    if (pixelCanvas.firstChild) {
        while (pixelCanvas.firstChild) {
            pixelCanvas.removeChild(pixelCanvas.firstChild);
        }
    }

    //create new grid and add it to the table
    let elementNumber = 0;
    for (let row = 0; row < rowElements; row++) {
        let tr = document.createElement('tr');
        for (let column = 0; column < columnElements; column++) {

            // create gird element
            let td = document.createElement('td');
            td.bgColor = 'white';
            td.addEventListener('click', function (event) {
                td.bgColor = document.querySelector('#colorPicker').value
            });
            tr.appendChild(td);
            elementNumber += 1;
        }
        pixelCanvas.appendChild(tr);
    }
}


