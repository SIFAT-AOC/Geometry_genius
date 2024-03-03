function calculateTriangleArea() {
  const base = getInputValue("triangle-base");
  const height = getInputValue("triangle-height");
}

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const fieldValue = parseFloat(inputField.value);
  return fieldValue;
}
