function sign(){
    var day = parseInt(document.getElementById('day').value);
    var month = document.getElementById('month').value;
    var img = document.getElementById('img')
    var form = document.getElementById('form');
    var title = document.getElementById('msg-title');
    var msg = document.getElementById('msg');
    
    if(day >= 20 && month == "January" || day <= 18 && month == "February"){
        img.src = "./img/aquarius.gif"
        form.innerHTML = " ";
        title.innerText = "Characteristics";
        msg.innerText = "Problem-solver, humanitarian, and independent.";
        document.getElementById('container').style.height = "310px";
        document.getElementById('container').style.background = "#f4f1ff";
    }
    else if(day >= 21 && month == "March" || day <= 19 && month == "April") {
        img.src = "./img/aries.gif"
        form.innerHTML = " ";
        title.innerText = "Characteristics";
        msg.innerText = "Ambitious, independent, and energetic.";
        document.getElementById('container').style.height = "310px";
        document.getElementById('container').style.background = "#feeeed";
    }
    else if(day >= 21 && month == "June" || day <= 22 && month ==  "July") {
        img.src = "./img/cancer.gif"
        form.innerHTML = " ";
        title.innerText = "Characteristics";
        msg.innerText = "Helpful, sensitive, and caring.";
        document.getElementById('container').style.height = "310px";
        document.getElementById('container').style.background = "#e6f9ff";
    }
    else if(day >= 22 && month == "December" || day <= 19 && month == "January") {
        img.src = "./img/capricorn.gif"
        form.innerHTML = " ";
        title.innerText = "Characteristics";
        msg.innerText = "Hard-working, focused, and driven.";
        document.getElementById('container').style.height = "310px";
        document.getElementById('container').style.background = "#e9f7f5";
    }
    else if(day >= 21 && month == "May" || day <= 20 && month == "June") {
        img.src = "./img/gemini.gif"
        form.innerHTML = " ";
        title.innerText = "Characteristics";
        msg.innerText = "Witty, chatty, and ever curious.";
        document.getElementById('container').style.height = "310px";
        document.getElementById('container').style.background = "#f4f1ff";
    }
    else if(day >= 23 && month == "July" || day <= 22 && month == "August") {
        img.src = "./img/leo.gif"
        form.innerHTML = " ";
        title.innerText = "Characteristics";
        msg.innerText = "Fun-loving, proud, and the life of the party.";
        document.getElementById('container').style.height = "310px";
        document.getElementById('container').style.background = "#feeeed";
    }
    else if(day >= 23 && month == "September" || day <= 22 && month == "October") {
        img.src = "./img/libra.gif"
        form.innerHTML = " ";
        title.innerText = "Characteristics";
        msg.innerText = "Trustworthy, fair, and charming.";
        document.getElementById('container').style.height = "310px";
        document.getElementById('container').style.background = "#f4f1ff";
    }
    else if(day >= 19 && month == "February" || day <= 20 && month == "March") {
        img.src = "./img/pisces.gif"
        form.innerHTML = " ";
        title.innerText = "Characteristics";
        msg.innerText = "Caring, thoughtful, a good friend to the end!";
        document.getElementById('container').style.height = "310px";
        document.getElementById('container').style.background = "#e6f9ff";
    }
    else if(day >= 22 && month == "November" || day <= 21 && month == "December") {
        img.src = "./img/sargittarius.gif"
        form.innerHTML = " ";
        title.innerText = "Characteristics";
        msg.innerText = "Adventurous, driven, and creative.";
        document.getElementById('container').style.height = "310px";
        document.getElementById('container').style.background = "#feeeed";
    }
    else if(day >= 23 && month == "October" || day <= 21 && month == "November") {
        img.src = "./img/scorpio.gif"
        form.innerHTML = " ";
        title.innerText = "Characteristics";
        msg.innerText = "Authentic, intense, and loyal.";
        document.getElementById('container').style.height = "310px";
        document.getElementById('container').style.background = "#e6f9ff";
    }
    else if(day >= 20 && month == "April" || day <= 20 && month == "May") {
        img.src = "./img/taurus.gif"
        form.innerHTML = " ";
        title.innerText = "Characteristics";
        msg.innerText = "Strong and dependable, yet stubborn.";
        document.getElementById('container').style.height = "310px";
        document.getElementById('container').style.background = "#e9f7f5";
    }
    else {
        img.src = "./img/virgo.gif"
        form.innerHTML = " ";
        title.innerText = "Characteristics";
        msg.innerText = "Organized, sophisticated, and kind.";
        document.getElementById('container').style.height = "310px";
        document.getElementById('container').style.background = "#e9f7f5";
    }

}