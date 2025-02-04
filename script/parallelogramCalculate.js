function ParallelogramCalculate(){
    const base = getInputValue("Parallelogram-base")
    const height = getInputValue("Parallelogram-height")
    console.log(base,height)
}

function getInputValue(inputFieldById){
    const inputField = document.getElementById(inputFieldById);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    return value;
}