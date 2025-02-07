function ParallelogramCalculate(){
    const base = getInputValue("Parallelogram-base")
    const height = getInputValue("Parallelogram-height")
    
    // equation
    const area = base * height;
    setArea("parallelogram-area", area)

}

function getInputValue(inputFieldById){
    const inputField = document.getElementById(inputFieldById);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    return value;
}
function setArea(areaId, area){
    const areaValue = document.getElementById(areaId);
    areaValue.innerText = area;
}