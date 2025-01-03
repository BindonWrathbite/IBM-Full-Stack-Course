function temp_convert(){
    var c = document.getElementById("c").value;
    var f = document.getElementById("f").value;
    
    switch(true){
        case(c == "" && f == ""):
            alert("Please enter a value");
            c.focus();
            return false;
        case(c != "" && f == ""):
            f = c * 9/5 + 32;
            document.getElementById("f").value = f.toFixed(2);
            return true;
        case(c == "" && f != ""):
            c = (f - 32) * 5/9;
            document.getElementById("c").value = c.toFixed(2);
            return true;
    }
}

function temp_reset(){
    document.getElementById("c").value = "";
    document.getElementById("f").value = "";
    document.getElementById("c").focus();
}

function weight_convert(){
    var kg = document.getElementById("kg").value;
    var lbs = document.getElementById("lbs").value;
    
    switch(true){
        case(kg == "" && lbs == ""):
            alert("Please enter a value");
            kg.focus();
            return false;
        case(kg != "" && lbs == ""):
            lbs = kg * 2.20462;
            document.getElementById("lbs").value = lbs.toFixed(2);
        case(kg == "" && lbs != ""):
            kg = lbs / 2.20462;
            document.getElementById("kg").value = kg.toFixed(2);
    }
}

function wgt_reset(){
    document.getElementById("kg").value = "";
    document.getElementById("lbs").value = "";
    document.getElementById("kg").focus();
}

function distance_convert(){
    var km = document.getElementById("km").value;
    var miles = document.getElementById("mi").value;
    
    switch(true){
        case(km == "" && miles == ""):
            alert("Please enter a value");
            km.focus();
            return false;
        case(km != "" && miles == ""):
            miles = km * 0.621371;
            document.getElementById("mi").value = miles.toFixed(2);
        case(km == "" && miles != ""):
            km = miles / 0.621371;
            document.getElementById("km").value = km.toFixed(2);
    }
}

function dist_reset(){
    document.getElementById("km").value = "";
    document.getElementById("mi").value = "";
    document.getElementById("km").focus();
}