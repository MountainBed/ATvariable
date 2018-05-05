document.getElementById("variable-submit").addEventListener("click", function(e) {

  e.preventDefault();

  let name = document.getElementById("variable-name").value.trim();
  let number = document.getElementById("number").value.trim();

  for (let i = 0; i < number; i++) {
    console.log(`${i}: ${name}`);
  }

});