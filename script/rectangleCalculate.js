function rectangleCalculate(){
    const rectangleWidth = document.getElementById("rectangle-width");
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText)

    const rectangleLength = document.getElementById("rectangle-length");
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText)

    const area = width * length ;

    const rectangleArea = document.getElementById("rectangle-area")
    rectangleArea.innerText = area;
}