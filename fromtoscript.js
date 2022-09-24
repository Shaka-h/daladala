// ------------------Home From To-----------------------
// ----------------------------------------------------
var stateObject = {
    "Sabasaba": { 
        "Benjamin": ["Sabasaba", "Kimbinyiko", "Hazina", "Makulu", "Osterbay", "Chimwaga", "Getini", "Njia panda", "Infomatics", "Bank", "Mwisho wa Lami", "Block T", "Benjamin"],
        "Mipango": ["Sabasaba", "Kimbinyiko", "Nyerere Square", "Chako ni Chako", "Airport", "Area C", "Kwa Said", "Police", "KKKT", "Mwisho wa Lami", "Bible", "Mipango"],
        "Cha_Ng'ombe": ["Sabasaba", "Kimbinyiko", "Mtera", "Majengo", "Around About", "Kona", "Sokoni", "Msikitini", "Kwa Ramadhani", "Madukani", "Temu", "Kituoni", "Cha_Ng'ombe"],
        "Social": ["Sabasaba", "Kimbinyiko", "Hazina", "Makulu", "Osterbay", "Chimwaga", "Getini", "Njia panda", "ATM", "Hospital", "Humanity", "Bondeni"],
        "Msalato": ["Sabasaba", "Kimbinyiko", "Nyerere Square", "Chako ni Chako", "Airport", "Area C", "Kwa Said", "Police", "KKKT", "Mwisho wa Lami", "Bible", "Mipango",  "Glocery", "Chini ya Mti", "Shuleni", "Posta", "Masalato"],
        "Nanenane": ["Sabasaba", "Bungeni", "Shabiby", "CBE", "GSM", "Korongoni", "Kona", "Barabara ya Usa", "Mataa", "Nanenane"],
        "Hiyumwa": ["Sabasaba", "Kimbinyiko", "Hazina", "Makulu", "Osterbay", "Chimwaga", "Getini", "Njia panda", "National Housing", "Utawala", "Kibandani", "Hiyumwa"],
    },
    "Benjamin": { 
        "Sabasaba": ["Sabasaba", "Kimbinyiko", "Hazina", "Makulu", "Osterbay", "Chimwaga", "Getini", "Njia panda", "Infomatics", "Bank", "Mwisho wa Lami", "Block T", "Benjamin"],
    },
    "Mipango": {
        "Sabasaba": ["Sabasaba", "Kimbinyiko", "Nyerere Square", "Chako ni Chako", "Airport", "Area C", "Kwa Said", "Police", "KKKT", "Mwisho wa Lami", "Bible", "Mipango"],
    },
    "Cha_Ng'ombe": {
        "Sabasaba": ["Sabasaba", "Kimbinyiko", "Mtera", "Majengo", "Around About", "Kona", "Sokoni", "Msikitini", "Kwa Ramadhani", "Madukani", "Temu", "Kituoni", "Cha_Ng'ombe"],
    },
    "Social": {
        "Sabasaba": ["Sabasaba", "Kimbinyiko", "Hazina", "Makulu", "Osterbay", "Chimwaga", "Getini", "Njia panda", "ATM", "Hospital", "Humanity", "Bondeni"],
    },
    "Msalato": {
        "Sabasaba": ["Sabasaba", "Kimbinyiko", "Nyerere Square", "Chako ni Chako", "Airport", "Area C", "Kwa Said", "Police", "KKKT", "Mwisho wa Lami", "Bible", "Mipango",  "Glocery", "Chini ya Mti", "Shuleni", "Posta", "Masalato"],
    },
    "Nanenane": {
        "Sabasaba": ["Sabasaba", "Bungeni", "Shabiby", "CBE", "GSM", "Korongoni", "Kona", "Barabara ya Usa", "Mataa", "Nanenane"],
    },
    "Hiyumwa": {
        "Sabasaba": ["Sabasaba", "Kimbinyiko", "Hazina", "Makulu", "Osterbay", "Chimwaga", "Getini", "Njia panda", "National Housing", "Utawala", "Kibandani", "Hiyumwa"],
    },
    }
window.onload = function () {
    var fromSel = document.getElementById("from"),
    toSel = document.getElementById("to"),
    whereSel = document.getElementById("where");
    
    for (var from in stateObject) {
        fromSel.options[fromSel.options.length] = new Option(from, from);
    }
    fromSel.onchange = function () {
        toSel.length = 1; // remove all options bar first
        whereSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done 
        
        for (var to in stateObject[this.value]) {
            toSel.options[toSel.options.length] = new Option(to, to);
        }
    }
    fromSel.onchange(); // reset in case page is reloaded
    toSel.onchange = function () {
        whereSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done 
        
        var where = stateObject[fromSel.value][this.value];
        for (var i = 0; i < where.length; i++) {
            whereSel.options[whereSel.options.length] = new Option(where[i], where[i]);
        }
    }
}

function validateForm() {
    let from = document.forms["form"]["from"].value;
    let to = document.forms["form"]["to"].value;
    let where = document.forms["form"]["where"].value;
    if (from==" "||to==" "||where==" ") {
        alert("Fill all Informations");
        return false;
    }
    if (from==" "||to==" "||where==" ") {
        alert("Fill all Informations");
        return false;
    }
    else{
        return true;
    }
}