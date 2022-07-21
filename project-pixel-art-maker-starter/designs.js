// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const sizeform = document.getElementById("sizePicker");
const heightInput = document.getElementById("inputHeight");
const widthInput = document.getElementById("inputHeight");
const artTable = document.getElementById("pixelCanvas");
const submitButton = sizeform.lastElementChild;
const colorPicker = document.getElementById("colorPicker");
const tbody = document.createElement("tbody");

function makeGrid() {
    artTable.appendChild(tbody);
    const N = heightInput.value
    const M = widthInput.value
    for (var r = 1; r<=N; r++){ 
        row = document.createElement('tr');
        tbody.appendChild(row);
        for (var j = 1; j<=M; j++){
            col = document.createElement("td");
            row.appendChild(col);
        }
        
    }

    
}



console.log(colorPicker.value);
artTable.addEventListener("click", function(event){
    if(event.target.nodeName === "TD"){
        event.target.bgColor = colorPicker.value;
        console.log(event);
    }
});
sizeform.addEventListener("submit", function(event) {
    event.preventDefault();
    artTable.removeChild(tbody);
    makeGrid();
});
makeGrid();
