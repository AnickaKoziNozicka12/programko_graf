let hodnoty = [];


function barvicka(barva, x, sirka, vyska){
    let c = document.getElementById("bordelik");
    let ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = barva;
    ctx.fillRect(x, 150, sirka, vyska);
    ctx.stroke();
}

function sloupcovy(){
    let c = document.getElementById("bordelik");
    let ctx = c.getContext("2d");
        
    let width = 300;
    let delka_pole = hodnoty.length;
    let x = 0;
    let barva = true;

    ctx.clearRect(0,0,500,200);
        
    for (let i = 0; i < hodnoty.length; i++) {
        let sirka = width/delka_pole;
        let neco = -hodnoty[i];
        console.log(neco);
        let vyska = Number(neco);
        let maxY = -200;
        
        let max = Math.max(...hodnoty);
        let min = Math.min(...hodnoty);


        if (barva == true){
            
            if (hodnoty[i] == max){

                barvicka("green", x, sirka, maxY);
            }
            else if (hodnoty[i] == min){
                let neco1 = ((vyska/max)*200)+25;
                console.log("min" + neco1);
                barvicka("red", x, sirka, neco1);
            }
            else{
                let neco1 = ((vyska/max)*200)+25;
                barvicka("pink", x, sirka, neco1);
                
                barva = false;
            }
        }
        else if(barva == false){
            
            if (hodnoty[i] == max){
                barvicka("green", x, sirka, maxY);
            }
            else if (hodnoty[i] == min){
                let neco1 = ((vyska/max)*200)+25;
                barvicka("red", x, sirka, neco1);
            }else {
                let neco1 = ((vyska/max)*200)+25;
                console.log("mezi" + neco1);
                barvicka("orange", x, sirka, neco1);
    
                barva = true;
            }
        } 
        document.getElementById("nvm_uz").innerHTML = sirka;
        x = x + sirka;
    }
}

function pridat(){
    let cislo = document.getElementById("hodnota").value;

    if (!isNaN(cislo)){
        hodnoty.push(cislo);
    }
    else{
        alert("nn.");
    }

    document.getElementById("vypis").innerHTML = hodnoty;
    document.getElementById("zkouska").innerHTML = hodnoty.length;

    sloupcovy();
}
/*
function sloupcovy(){
    let pomoc = document.getElementById("bordelik");
    let umiram = pomoc.getContext("2d");
        
    let width = 300;
    let timhle = hodnoty.length;
    let x = 0;
    let barva = true;

    umiram.clearRect(0,0,500,200);
        
    for (let i = 0; i < hodnoty.length; i++) {
        let nevim = width/timhle;
        let neco = -hodnoty[i];
        neco = Number(neco);
        
        let max = Math.max(...hodnoty);
        let min = Math.min(...hodnoty);
        

        if (barva == true){
            
            if (hodnoty[i] == max){
                umiram.beginPath();
                umiram.fillStyle = "green";
                umiram.fillRect(x, 150, nevim, neco);
                umiram.stroke();
            }
            else if (hodnoty[i] == min){
                umiram.beginPath();
                umiram.fillStyle = "red";
                umiram.fillRect(x, 150, nevim, neco);
                umiram.stroke();
            }
            else{
                umiram.beginPath();
                umiram.fillStyle = "blue";
                umiram.fillRect(x, 150, nevim, neco);
                umiram.stroke();

                barva = false;
            }
        }
        else if(barva == false){
            
            if (hodnoty[i] == max){
                umiram.beginPath();
                umiram.fillStyle = "green";
                umiram.fillRect(x, 150, nevim, neco);
                umiram.stroke();
            }
            else if (hodnoty[i] == min){
                umiram.beginPath();
                umiram.fillStyle = "red";
                umiram.fillRect(x, 150, nevim, neco);
                umiram.stroke();
            }else {
                umiram.beginPath();
                umiram.fillStyle = "pink";
                umiram.fillRect(x, 150, nevim, neco);
                umiram.stroke();
    
                barva = true;
            }
        }
        
            
        document.getElementById("nvm_uz").innerHTML = neco;

        x = x + nevim;


    }

    
    max = 100%

    */
