function calculateTriangleArea() {
  const base = getInputValue("triangle-base");
  const height = getInputValue("triangle-height");

  const result = base * height;
  if (isNaN(base) || isNaN(height)) {
    return;
  }
  showCalculateArea("Triangle Base", result);
  setElement("triangle-area", result);
}
function calculateRectangleArea() {
  const width = getInputValue("rectangle-width");
  const length = getInputValue("rectangle-length");
  const result = width * length;
  if (isNaN(width) || isNaN(length)) {
    return;
  }
  setElement("rectangle-area", result);
}
function calculateEllipseArea() {
  const maxiAb = getInputValue("max-Ellipse");
  const minimumab = getInputValue("min-Ellipse");
  const result = 3.14 * maxiab * minimumab;
  if (isNaN(maxiAb) || isNaN(minimumab)) {
    return;
  }
  setElement("Ellipse-area", result.toFixed(2));
}

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  const fieldValue = parseFloat(inputValue);
  return fieldValue;
}

function setElement(elementId, result) {
  const element = document.getElementById(elementId);
  element.innerText = result;
}

function showCalculateArea(areaType, area) {
  const showCalculation = document.getElementById("showCalculateArea");

  const count = showCalculation.childElementCount;

  const p = document.createElement("p");
  p.classList.add("area");
  p.innerHTML = `${
    count + 1
  } ${areaType} ${area} cm <sup>2</sup> <button class="btn btn-success"> convert<button>`;
  showCalculation.appendChild(p);
}
