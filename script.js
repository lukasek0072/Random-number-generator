

function Generate() {
    var rnd_input = document.getElementById("rnd_input").value;;
    console.log(rnd_input);
    var result = Math.floor(Math.random() * rnd_input);
    console.log(result);
    document.getElementById("rnd_result").innerHTML = result;
}