// VALORES DIVISAS
const dolar = 890;
const euro = 950;
const real = 183;
const yuan = 123;

// =================================================

let continuar;

// =================================================
// FUNCONES

function conversion(ars, divisa){

    do{
        ars = parseFloat (prompt ("Ingrese el valor en pesos argentinos:"));
        divisa = prompt("¿A que divisa desea convertir sus pesos? Puede selecionar: Dolar, Euro, Real, Yuan.").toLowerCase();
        
        if (!isNaN(ars)){

            switch (divisa){
                case "dolar":
                    resultado = ars / dolar;
                    alert(ars + " Pesos " + "equivalen a " + resultado.toFixed(2) + " Dolares");
                    break;
                case "euro":
                    resultado = ars / euro;
                    alert(ars + " Pesos " + "equivalen a " + resultado.toFixed(2) + " Euros");
                    break;
                case "real":
                    resultado = ars / real;
                    alert(ars + " Pesos " + "equivalen a " + resultado.toFixed(2) + " Reales");
                    break;
                case "yuan":
                    resultado = ars / yuan;
                    alert(ars + " Pesos " + "equivalen a " + resultado.toFixed(2) + " Yuanes");
                    break;
                case "":
                    alert("debe ingresar una divisa para poder hacer la conversion");
                    break;
                default:
                    alert("Lo siento, no disponemos el valor de esa divisa. Selecciona una de las mencionadas");
            }
        } else{
            alert("El monto en pesos debe ser ingresado en numeros");
        }
    continuar = prompt("¿Desea continuar con otra conversion? SI / NO").toLocaleLowerCase();
    } while(continuar === "si"){
        alert("Adios, que tengas buen dia!");

    }

}

// =================================================
// LLAMADO DE FUNCIONES

conversion();
