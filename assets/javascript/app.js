let variables = [];

// Creates necessary xml code after user input
document.getElementById("variable-submit").addEventListener("click", function (e) {

  e.preventDefault();

  let name = document.getElementById("variable-name").value.trim();

  let number = document.getElementById("number").value.trim();

  createVariableObjects(name, 1, number);

  document.getElementById("xml-code").innerHTML = xmlConverter.createAllXML(variables);

});

// Resets the case for the user to create another variable
document.getElementById("clear").addEventListener("click", function (e) {

  e.preventDefault();

  clearBox("xml-code");

  resetVariables();

});

// Adds text to clipboard
document.getElementById("copy").addEventListener("click", function (e) {
  let copyText = document.getElementById("xml-code");

  copyText.select();

  document.execCommand("copy");

  console.log("copied");
})

// Takes user input and creates necessary exclusions and names; pushes into
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

// Creates variable name in the format ##
function variableNamer(name, i) {
  if (i < 10) {

    return `${name}0${i}`;

  } else {

    return `${name}${i}`;

  }

}

// Determines previous variables that should be excluded
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

// Clears element given the ID
function clearBox(elementId) {

  document.getElementById(elementId).innerHTML = "";

}

// Resets application
function resetVariables() {

  variables = [];

  document.getElementById("variable-name").value = "";

  document.getElementById("number").value = "";

}