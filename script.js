
function Result() {
    var max = document.getElementById("max").value;
    console.log(max)
    var number = Math.floor(Math.random() * max);
    document.getElementById("result").innerHTML = number;
}