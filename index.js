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
