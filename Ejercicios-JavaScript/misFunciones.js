/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param (string) id = El id de los inputs de metros, yardas, pies o pulgadas
 * @param (number) valor = El valor de los inputs de metros, yardas pies o pulgadas
 * @return
 */
function cambiarUnidades(id, value) {
    var metro, pulgada, pie, yarda;

    if (valor.include(",")){
        valor = valor.replace(",",".");
    }

    if(isNaN(valor)) {
        alert("Se ingreso in valor invalido " + id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if(id == "metro") {
        metro = valor
        pulgada = 39.3701 * valor;
        pie = 3.28084 * valor;
        yarda = 1.0936133333333 * valor;
    }else if(id == "pulgada") {
        pulgada = valor
        metro = 0.0254 * valor;
        pie = 0.0833333 * valor;
        yarda = 0.0277778 * valor;
    }else if(id == "yarda") {
        yarda = valor
        pulgada = 36 * valor;
        pie = 3 * valor;
        metro = 0.9144 * valor;
    }else if(id == "pie"){
        pie = valor
        pulgada = 12 * valor;
        metro = 0.3048 * valor;
        yarda = 0.333333 * valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
}

function convertirgr(id) {
    var grad, rad;
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180
    else if (id=="radianes"){
            rad = document.getElementById("radianes").value;
            grad = (rad*180)/Math.PI
        }
        document.getElementById("grados").value = grad;
        document.getElementById("radianes").value = rad;
    }

}

function mostrar_ocultar(valorMO) {
    if(velorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    else if(valorMO=="val_ocultar"){
            document.getElementById("divMO").style.display = 'none';
        }
    }

}

function calcularSuma() {
    var num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;

}

function calcularResta() {
    var num1, num2;
    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
}

function calcularMultip() {
    var num1, num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2;
}

function calcularDivi() {
    var num1, num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    if (num2 != 0)
        document.getElementsByName("div_total")[0].innerHTML = num1 / num2;
}

function cargarWeb() {
    var cant, unidad, urlComp;
    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp)

}

function cargarResultado() {
    var urlComp, can, un;

    urlComp= window.location.href.split("/")[5];

    cant = urlComp.split("#")[1]
    un = urlComp.split("#")[2]
    document.getElementById("dist").value = can + " " + un;

}

function dibujarCirCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;

    ctx.fillStyle = "#451648";
    ctx.fillRect(0 + margen, yMax - 40 - margen, 40, 40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#866543"
    ctx.fill();

}

var bandera;
function dibujar(event) {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY)

    canvas.onmousedown = function(){bandera = true};
    canvas.onmouseup = function(){bandera = false};
    if (bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill()
    }

}

function limpiarCanvas() {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

}