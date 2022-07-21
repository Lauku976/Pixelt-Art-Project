// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const sizeform = document.getElementById("sizePicker");
const heightInput = document.getElementById("inputHeight");
const widthInput = document.getElementById("inputWidth");
const artTable = document.getElementById("pixelCanvas");
const submitButton = sizeform.lastElementChild;
const colorPicker = document.getElementById("colorPicker");
const tbody = document.createElement("tbody");
artTable.appendChild(tbody);

//making the Grid
function makeGrid() {
    //clearing out the table    
    tbody.textContent = "";
    //grabbing the height and width
    const N = heightInput.value;
    const M = widthInput.value;
    //for loop to make rows and columns
    for (var r = 1; r<=N; r++){ 
        row = document.createElement('tr');
        tbody.appendChild(row);
        for (var j = 1; j<=M; j++){
            col = document.createElement("td");
            row.appendChild(col);
        }
        
    }

    
}



//Listener for click event on a cell
artTable.addEventListener("click", function(event){
    if(event.target.nodeName === "TD"){
        event.target.bgColor = colorPicker.value;
    }
});

//Listener for click submit button
sizeform.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});
makeGrid();
