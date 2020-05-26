function makeGrid() {
    const pixelCanvas = document.querySelector('#pixelCanvas');
    const rowElements = Number(document.querySelector('#inputHeight').value);
    const columnElements = Number(document.querySelector('#inputWidth').value);

    if (pixelCanvas.firstChild) {
        while (pixelCanvas.firstChild) {
            pixelCanvas.removeChild(pixelCanvas.firstChild);
        }
    }

    let elementNumber = 0;
    for (let row = 0; row < rowElements; row++) {
        let tr = document.createElement('tr');
        for (let column = 0; column < columnElements; column++) {
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


