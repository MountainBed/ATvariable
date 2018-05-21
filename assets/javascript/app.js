let variables = [];

document.getElementById("variable-submit").addEventListener("click", function (e) {

  e.preventDefault();

  let name = document.getElementById("variable-name").value.trim();
  let number = document.getElementById("number").value.trim();

  createVariableObjects(name, 1, number);

  console.log(variables);

  xmlConverter.createXML(variables);

});

function createVariableObjects(name, i, total) {

  let dummyVariable = {
    name: variableNamer(name, i),
    exclusions: determineExclusions(name, i)
  }

  variables.push(dummyVariable);

  if (i < total) {
    return createVariableObjects(name, i + 1, total);

  } else {

    return false;
  }


}

function variableNamer(name, i) {
  if (i < 10) {
    return `~${name}0${i}`;
  } else {
    return `~${name}${i}`;
  }
}

function determineExclusions(name, i) {
  let exclusions = [];

  if (i === 1) {
    return exclusions;
  } else {
    for (let j = 1; j < i; j++) {
      exclusions.push(variableNamer(name, j));
    }
    return exclusions;
  }

}