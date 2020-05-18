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
    if(isNaN(valor)) {
        alert("Se ingreso in valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }else if(id == "metro") {
        document.lasUnidades.unid_pulgada.value = 39.3701 * valor;
        document.lasUnidades.unid_pie.value = 3.28084 * valor;
        document.lasUnidades.unid_yarda.value = 1.0936133333333 * valor;
    }else if(id == "pulgada") {
        document.lasUnidades.unid_metro.value = 0.0254 * valor;
        document.lasUnidades.unid_pie.value = 0.0833333 * valor;
        document.lasUnidades.unid_yarda.value = 0.0277778 * valor;
    }else if(id == "yarda") {
        document.lasUnidades.unid_pulgada.value = 36 * valor;
        document.lasUnidades.unid_pie.value = 3 * valor;
        document.lasUnidades.unid_metro.value = 0.9144 * valor;
    }else if(id == "pie"){
        document.lasUnidades.unid_pulgada.value = 12 * valor;
        document.lasUnidades.unid_metro.value = 0.3048 * valor;
        document.lasUnidades.unid_yarda.value = 0.333333 * valor;
    }
}