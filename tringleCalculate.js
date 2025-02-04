function triangleCalculate(){
    const triangleBase = document.getElementById("triangle-base");
    const triangleBaseText = triangleBase.value;
    const base = parseFloat(triangleBaseText)
    console.log(base)

    const triangleHeight = document.getElementById("triangle-height");
    const triangleHeightText = triangleHeight.value;
    const height = parseFloat(triangleHeightText)
    console.log(height)

}