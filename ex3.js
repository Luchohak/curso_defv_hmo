let year1 = 2018
let year2 = 2999

if (year1 > year2){
    var resta = year1 - year2
    console.log( year2 + " fue hace " + resta + " años")
} else if (year1 < year2){
    var resta = year2 - year1
    console.log("Faltan " + resta + " años para el año " + year2)
} else {
    console.log("Los años son iguales")
}