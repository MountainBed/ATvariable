const xmlConverter = {
  variables: [],

  createName: function (name) {

    let temp = `<var name="${name}" type="int">`

    return temp;
  },

  createLimits: function (low, high) {

    let temp = `
    <limits>
      <limit type="ge">${low}</limit>
      <limit type="le">${high}</limit>
    </limits>`

    return temp;
  },

  createExclusions: function (current) {

    let temp = `
    <excl>`;

    for (let i = 0; i < current; i++) {
      temp += `\n       <expr>~${this.variables[i].name}</expr>`;
    }

    temp += `
    </excl>`;

    return temp;

  },

  createVariableXML: function (variable, i) {

    let tempVar = "";

    tempVar += this.createName(variable.name);
    tempVar += `
<constraint>`;

    tempVar += this.createLimits(1, this.variables.length);

    tempVar += this.createExclusions(i);

    tempVar += `
    </constraint>
</var>`;

    tempVar += `\n`;

    return tempVar;

  },

  createAllXML: function (variables) {

    this.variables = variables;

    let tempAllVariables = "";

    for (let i = 0; i < variables.length; i++) {

      tempAllVariables += this.createVariableXML(variables[i], i);

    }

    return tempAllVariables;

  }
}