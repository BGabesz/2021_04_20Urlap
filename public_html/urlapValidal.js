window.addEventListener("load",init);

function $(nev){
    return document.querySelectorAll(nev);
    
}

function ID(nev){
    return document.getElementById(nev);
    
}
function init(){
    ID("kuld").addEventListener("click",validalas);
    
}

function validalas(){
    console.log("validálunk");
    
    var nevMezo=ID("nev").value;
//    if(nevMezo.length<3) {
//        $("asside section:nth-child(1) p").innerHTML="Legalább 3 karakterből álljn a név!<br>";
//        ID("nev").style.border="2px solid red";
//        
//    }else{
//        ID("nev").style.border="none";
//        
//    }
    
    var hiba="";
    
    var adat="";
    
    var szuro=/[A-Z]{1}[a-z]{2,19}/;
    if(szuro.test(nevMezo)){
        $("asside section:nth-child(1) p").innerHTML+="Nagybetüvel kezdődjön!<br>";
        ID("nev").style.border="2px solid red";
    }else{
        ID("nev").style.border="none";
        adat+="Név: "+nevMezo+"<br>";
    }
    $("asside section:nth-child(1) p")[0].innerHTML=hiba;
    $("asside section:nth-child(2) p")[0].innerHTML=adat;
}