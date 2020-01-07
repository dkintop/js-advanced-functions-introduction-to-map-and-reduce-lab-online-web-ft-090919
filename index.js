function mapToNegativize(array) {
  let output = [];
  array.forEach(element => {
    output.push(element * -1);
  });
  return output;
}

function mapToNoChange(array) {
  return array;
}

function mapToDouble(array) {
  let output = [];
  array.forEach(element => {
    output.push(element * 2);
  });
  return output;
}

function mapToSquare(array) {
  let output = [];
  array.forEach(element => {
    output.push(element * element);
  });
  return output;
}

function reduceToTotal(src, startingPoint = 0) {
  let total = startingPoint;
  for (let i = 0; i < src.length; i++) {
    total = total + src[i];
  }
  return total;
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++) {
    if (!src[i]) return false;
  }
  return true;
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++) {
    if (src[i]) return true;
  }
  return false;
}
