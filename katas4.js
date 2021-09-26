const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function showResults(parametro){
    const body = document.getElementsByTagName('body')[0]
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    const resultado = document.createElement('p');
    resultado.textContent = JSON.stringify(parametro);
    newBox.appendChild(resultado);
    body.appendChild(newBox);
}

//Katas Principais:

function kata1() {
    let header = document.createElement("div");
    header.textContent = "Kata 1:";
    document.body.appendChild(header);
    let gotCitiesArray = gotCitiesCSV.split(',')
    return gotCitiesArray; 
}
showResults(kata1())

function kata2() {
    let header = document.createElement("div");
    header.textContent = "Kata 2:";
    document.body.appendChild(header);
    let bestThingArray = bestThing.split(' ')
    return bestThingArray;
}
showResults(kata2())

function kata3() {
    let header = document.createElement("div");
    header.textContent = "Kata 3:";
    document.body.appendChild(header);
    let gotCitiesArray2 = gotCitiesCSV.split(',').join('; ')
    return gotCitiesArray2; 
}
showResults(kata3())

function kata4() {
    let header = document.createElement("div");
    header.textContent = "Kata 4:";
    document.body.appendChild(header);
    let stringLotr = lotrCitiesArray.join(', ');
    return stringLotr;
}
showResults(kata4())

function kata5() {
    let header = document.createElement("div");
    header.textContent = "Kata 5:";
    document.body.appendChild(header);
}

function kata6() {
    let header = document.createElement("div");
    header.textContent = "Kata 6:";
    document.body.appendChild(header);
}

function kata7() {
    let header = document.createElement("div");
    header.textContent = "Kata 7:";
    document.body.appendChild(header);
}

function kata8() {
    let header = document.createElement("div");
    header.textContent = "Kata 8:";
    document.body.appendChild(header);
}

function kata9() {
    let header = document.createElement("div");
    header.textContent = "Kata 9:";
    document.body.appendChild(header);
}

function kata10() {
    let header = document.createElement("div");
    header.textContent = "Kata 10:";
    document.body.appendChild(header);
}

function kata11() {
    let header = document.createElement("div");
    header.textContent = "Kata 11:";
    document.body.appendChild(header);
}

function kata12() {
    let header = document.createElement("div");
    header.textContent = "Kata 12:";
    document.body.appendChild(header);
}

function kata13() {
    let header = document.createElement("div");
    header.textContent = "Kata 13:";
    document.body.appendChild(header);
}

function kata14() {
    let header = document.createElement("div");
    header.textContent = "Kata 14:";
    document.body.appendChild(header);
}

function kata15() {
    let header = document.createElement("div");
    header.textContent = "Kata 15:";
    document.body.appendChild(header);
}

function kata16() {
    let header = document.createElement("div");
    header.textContent = "Kata 16:";
    document.body.appendChild(header);
}

function kata17() {
    let header = document.createElement("div");
    header.textContent = "Kata 17:";
    document.body.appendChild(header);
}

function kata18() {
    let header = document.createElement("div");
    header.textContent = "Kata 18:";
    document.body.appendChild(header);
}

function kata19() {
    let header = document.createElement("div");
    header.textContent = "Kata 19:";
    document.body.appendChild(header);
}

function kata20() {
    let header = document.createElement("div");
    header.textContent = "Kata 20:";
    document.body.appendChild(header);
}

// Katas Bônus:

function bonus1() {
    let header = document.createElement("div");
    header.textContent = "bônus 1:";
    document.body.appendChild(header);
}

function bonus2() {
    let header = document.createElement("div");
    header.textContent = "bônus 2:";
    document.body.appendChild(header);
}

function bonus3() {
    let header = document.createElement("div");
    header.textContent = "bônus 3:";
    document.body.appendChild(header);
}

function bonus4() {
    let header = document.createElement("div");
    header.textContent = "bônus 4:";
    document.body.appendChild(header);
}

function bonus4() {
    let header = document.createElement("div");
    header.textContent = "bônus 4:";
    document.body.appendChild(header);
}

function bonus5() {
    let header = document.createElement("div");
    header.textContent = "bônus 5:";
    document.body.appendChild(header);
}

function bonus6() {
    let header = document.createElement("div");
    header.textContent = "bônus 6:";
    document.body.appendChild(header);
}

function bonus7() {
    let header = document.createElement("div");
    header.textContent = "bônus 7:";
    document.body.appendChild(header);
}

function bonus8() {
    let header = document.createElement("div");
    header.textContent = "bônus 8:";
    document.body.appendChild(header);
}

function bonus9() {
    let header = document.createElement("div");
    header.textContent = "bônus 9:";
    document.body.appendChild(header);
}

function bonus10() {
    let header = document.createElement("div");
    header.textContent = "bônus 10:";
    document.body.appendChild(header);
}

function bonus11() {
    let header = document.createElement("div");
    header.textContent = "bônus 11:";
    document.body.appendChild(header);
}

function bonus12() {
    let header = document.createElement("div");
    header.textContent = "bônus 12:";
    document.body.appendChild(header);
}
