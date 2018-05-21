const xmlConverter = {
  variables: [],

  test: function () {

    console.log(`working --- xml converter`);

  },

  createName: function (name) {
    let temp = `<var name="${name}" type="int">`

    return temp;
  },

  createLimits: function (low, high) {

    let temp = `  <limits>
    <limit type="ge">${low}</limit>
    <limit type="le">${high}</limit>
  </limits>`

    return temp;
  },

  createExclusions: function (current) {
    let temp = "  <excl>\n";

    for (let i = 0; i < current; i++) {
      temp += `     <expr>${this.variables[i].name}</expr>\n`;
    }

    temp += "  </excl>";

    return temp;
  },

  createXML: function (variables) {

    this.variables = variables;

    for (let i = 0; i < variables.length; i++) {

      console.log(`VARIABLE ${i + 1}`);

      console.log(this.createName(variables[i].name));

      console.log(`<constraint>`);

      console.log(this.createLimits(1, variables.length));

      console.log(this.createExclusions(i));

      console.log(` </constraint>
</var>`);

      console.log(`\n`);
    }
  }
}