document.getElementById("send").addEventListener("click", function send() {
  var input = document.getElementById("input").value;
  console.log("input", input);
  fetch("http://topipatthar.pythonanywhere.com/predict", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  body: JSON.stringify({
    name: input
  })
})
.then( response => response.text()) 
.then(data => {
  console.log(data);
  alert(data)
})
});

