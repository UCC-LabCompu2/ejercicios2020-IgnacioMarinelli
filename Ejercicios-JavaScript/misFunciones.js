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
        grad = document.getElementById(elementid:"grados").value;
        rad = (grad*Math.PI)/180
    else if (id=="radianes"){
            rad = document.getElementById(elementid:"radianes").value;
            grad = (rad*180)/Math.PI
        }
        document.getElementById(elementid:"grados").value = grad;
        document.getElementById(elementid:"radianes").value = rad;
    }

}

function mostrar_ocultar(valorMO) {
    if(velorMO=="val_mostrar"){
        document.getElementById(elementid:"divMO").style.display = 'block';
    else if(valorMO=="val_ocultar"){
            document.getElementById(elementid:"divMO").style.display = 'none';
        }
    }

}

function calcularSuma() {
    var num1, num2;
    num1 = Number(document.getElementsByName(elementName: "sum_num1")[0].value);
    num2 = Number(document.getElementsByName(elementName: "sum_num2")[0].value);
    document.getElementsByName(elementName: "sum_total")[0].innerHTML = num1 + num2;

}

function calcularResta() {
    var num1, num2;
    num1 = Number(document.getElementsByName(elementName: "res_num1")[0].value);
    num2 = Number(document.getElementsByName(elementName: "res_num2")[0].value);
    document.getElementsByName(elementName: "res_total")[0].innerHTML = num1 - num2;
}

function calcularMultip() {
    var num1, num2;
    num1 = Number(document.getElementsByName(elementName: "mul_num1")[0].value);
    num2 = Number(document.getElementsByName(elementName: "mul_num2")[0].value);
    document.getElementsByName(elementName: "mul_total")[0].innerHTML = num1 * num2;
}

function calcularDivi() {
    var num1, num2;
    num1 = Number(document.getElementsByName(elementName: "div_num1")[0].value);
    num2 = Number(document.getElementsByName(elementName: "div_num2")[0].value);
    if (num2 != 0)
        document.getElementsByName(elementName: "div_total")[0].innerHTML = num1 / num2;
}

function cargarWeb() {
    var cant, unidad, urlComp;
    cant = document.getElementById(elementid: "distancia").value;
    unidad = document.getElementsByName(elementName: "unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp)

}

function cargarResultado() {
    var urlComp, can, un;

    urlComp= window.location.href.split(separator: "/")[5];

    cant = urlComp.split(separator: "#")[1]
    un = urlComp.split(separator: "#")[2]

    document.getElementById(elementid: "dist").value = can + " " + un;

}