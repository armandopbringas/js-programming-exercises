const calcSquareArea = () => {
  const input = document.querySelector('#input');
  const value = input.value;
  const squareArea = value * value;
  const outpuResult = document.querySelector('#areaRes');
  const printResult = outpuResult.innerHTML = squareArea;
  return printResult;
}

const calcSquarePerimeter = () => {
  const input = document.querySelector('#input');
  const value = input.value;
  const squarePerimeter = value * 4;
  const outputResult = document.querySelector('#perimeterRes');
  const printResult = outputResult.innerHTML = squarePerimeter;
  return printResult;
}

const calcTrianglePerimeter = () => {
  const getInputA = document.getElementById("inputA");
  const getInputB = document.getElementById("inputB");
  const getInputBase = document.getElementById("inputBase");
  const outputResult = document.getElementById("outputPerimeter");
  const sA = parseInt(getInputA.value);
  const sB = parseInt(getInputB.value);
  const base = parseInt(getInputBase.value);
  const trianglePerimeter = sA + sB + base;
  const printResult = outputResult.innerHTML = trianglePerimeter;
  return printResult;
}

const calcTriangleArea = () => {
  const getBase = document.getElementById("inputBase");
  const getHeight = document.getElementById("inputHeight");
  const outputResult = document.getElementById("outputArea");
  const b = parseInt(getBase.value);
  const h = parseInt(getHeight.value);
  const triangleArea = (b * h) / 2;
  const printResult = outputResult.innerHTML = triangleArea;
  return printResult;
}

const calcCirclePerimeter = () => {
  const pi = 3.1416;
  const getInputDiameter = document.querySelector('#inputDiameter');
  const diameter = parseInt(getInputDiameter.value);
  const circlePerimeter = diameter * pi;
  const ouptutResDiameter = document.querySelector('#outputCirlcePerimeter');
  const printRes = ouptutResDiameter.innerHTML = circlePerimeter;
  return printRes;
}

const calcCircleArea = () => {
  const pi = 3.1416;
  const getInputRadio = document.querySelector('#inputRadio');
  const circleRadio = parseInt(getInputRadio.value);
  const circleArea = (circleRadio * circleRadio) * pi;
  const outputResArea = document.querySelector('#outputCircleArea');
  const printRes = outputResArea.innerHTML = circleArea;
  return printRes;
}
