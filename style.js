function hide(element) {
    element = alert("Loading wether report...");
};


function logout(element) {
    element.textContent = 'Logout';
};


let temperaturas = document.getElementsByClassName("temp");

//let temperaturas = document.querySelectorAll(".temp");

function temp(element) {
    alert("Elegiste " + element.value);
    var gradoSeleccionado = element.value;
    let temperaturasConvertidas = [];

    for(let i = 0; i<temperaturas.length;i++){
        console.log(gradoSeleccionado, "grado seleccionado");

        if (gradoSeleccionado == 2){ //Si 2 entonces convertir a °F
        
            let valorConvertir = temperaturas[i].textContent;
            let numeroString = valorConvertir.substring(0, 2);
            let numeroEntero=  parseInt(numeroString);
            let numeroFarenheit = numeroEntero * 3;
            temperaturasConvertidas.push(numeroFarenheit)
            temperaturas[i].innerText = numeroFarenheit+"°";
            }
        else {

        }
    }
}


var nameTag = document.getElementById("cajacookies");
console.log("NAMETAG",nameTag);

function cookie() {
    nameTag.innerHTML += `<h1>Stop cockie time</h1>
    <p>
    We use cockie (sadly not the edible ones) to personalise conten add ads, 
    to provide social media feature and analised an trafict <a href="politica.html">política de privacidad</a>.
    </p>
    <button class="btn1" onclick="message('cajacookies')" > I Aceept </button>`
}

function message(id) {
    let cajaRemover = document.getElementById(id);
    cajaRemover.remove();
}

setTimeout(cookie, 3000);
clearTimeout(cookie); 





//swal("Stop cockie time", " We use cockie (sadly not the edible ones) to personalise conten add ads, to provide social media feature and analised an trafict", "/assets/cookie.png");













