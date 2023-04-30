var sp, btn_start, btn_stop, t, ms, s, mn, h;

// initialisation des au chargement de la page

window.onload = function(){
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0; s=0; mn=0; h=0; 
}

// Le compteur

function update_chrono(){
    ms+= 1;
    if(ms == 10){
        ms = 1;
        s+=1
    }
    if(s==60){
        s=0;
        mn+=1
    }
    if(mn==60){
        mn= 0;
        h+=1;
    }

// insertion des valeurs dans les span
// [0] pour le premier span 
// [1]      le 2e span etc... 

    sp[0].innerHTML = h + "h" ;
    sp[1].innerHTML = mn + "min" ;
    sp[2].innerHTML = s + "s" ;
    sp[3].innerHTML = ms + "ms" ;
}

// début du chrono
function start(){
    // upadate du chrono toutes les 100 ms
    t = setInterval(update_chrono,100);
    btn_start.disabled = true
}

// fin du chrono
function stop() {
    clearInterval(t);
    btn_start.disabled = false
}

//Initialisation du chrono

function reset(){
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0; s = 0; mn = 0; h = 0; 

    //nouvelles valeurs
    sp[0].innerHTML = h + "h" ;
    sp[1].innerHTML = mn + "min" ;
    sp[2].innerHTML = s + "s" ;
    sp[3].innerHTML = ms + "ms" ;
}