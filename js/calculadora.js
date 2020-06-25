function primary(id) {
    let input = document.getElementById('pantalla');
    input.value = input.value + id;
}

function ce(){
    document.getElementById('pantalla').value = "";
}

function resultado(){
    console.log("OK")
    let input = document.getElementById('pantalla');
    input.value = eval(input.value);
}
