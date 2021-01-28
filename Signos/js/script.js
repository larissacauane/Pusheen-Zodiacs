function changeSizeAndColor(id, color) {
    let change = document.getElementById(id)
    change.style.height = "310px";
    change.style.backgroundColor = color;
}

function changeText(characteristics, qualities) {
    let title = document.getElementById('msg-title');
    let msg = document.getElementById('msg');
    title.innerText = characteristics;
    msg.innerText = qualities;
}

function changeImg(imgSrc) {
    let img = document.getElementById('img')
    img.src = imgSrc;
}

function hideForm() {
    let form = document.getElementById('form');
    form.style.display = "none";
}

function sign(){
    let day = parseInt(document.getElementById('day').value);
    let mon = document.getElementById('month').value;
    let month = mon.toUpperCase();
    
    if(day >= 20 && month == "JANUARY" || day <= 18 && month == "FEBRUARY") {
        hideForm();
        changeText("Characteristics","Problem-solver, humanitarian, and independent.");
        changeSizeAndColor("container", "#f4f1ff");
        changeImg("./img/aquarius.gif");
    }
    else if(day >= 21 && month == "MARCH" || day <= 19 && month == "APRIL") {
        hideForm();
        changeText("Characteristics", "Ambitious, independent, and energetic.");
        changeSizeAndColor("container", "#feeeed");
        changeImg("./img/aries.gif"); 
    }
    else if(day >= 21 && month == "JUNE" || day <= 22 && month ==  "JULY") {
        hideForm();
        changeText("Characteristics", "Helpful, sensitive, and caring.");
        changeSizeAndColor('container', "#e6f9ff");
        changeImg("./img/cancer.gif");
    }
    else if(day >= 22 && month == "DECEMBER" || day <= 19 && month == "JANUARY") {
        hideForm();
        changeText("Characteristics", "Hard-working, focused, and driven.");
        changeSizeAndColor('container', "#e9f7f5");
        changeImg("./img/capricorn.gif");
    }
    else if(day >= 21 && month == "MAY" || day <= 20 && month == "JUNE") {
        hideForm();
        changeText("Characteristics", "Witty, chatty, and ever curious.");
        changeSizeAndColor('container', "#f4f1ff");
        changeImg("./img/gemini.gif");
    }
    else if(day >= 23 && month == "JULY" || day <= 22 && month == "AUGUST") {
        hideForm();
        changeText("Characteristics", "Fun-loving, proud, and the life of the party.");
        changeSizeAndColor('container', "#feeeed");
        changeImg("./img/leo.gif");
    }
    else if(day >= 23 && month == "SEPTEMBER" || day <= 22 && month == "OCTOBER") {
        hideForm();
        changeText("Characteristics", "Trustworthy, fair, and charming.");
        changeSizeAndColor('container', "#f4f1ff");
        changeImg("./img/libra.gif");
    }
    else if(day >= 19 && month == "FEBRUARY" || day <= 20 && month == "MARCH") {
        hideForm();
        changeText("Characteristics", "Caring, thoughtful, a good friend to the end!");
        changeSizeAndColor('container', "#e6f9ff");
        changeImg("./img/pisces.gif");
    }
    else if(day >= 22 && month == "NOVEMBER" || day <= 21 && month == "DECEMBER") {
        hideForm();
        changeText("Characteristics", "Adventurous, driven, and creative.");
        changeSizeAndColor('container', "#feeeed");
        changeImg("./img/sargittarius.gif");
    }
    else if(day >= 23 && month == "OCTOBER" || day <= 21 && month == "NOVEMBER") {
        hideForm();
        changeText("Characteristics", "Authentic, intense, and loyal.");
        changeSizeAndColor('container', "#e6f9ff");
        changeImg("./img/scorpio.gif");
    }
    else if(day >= 20 && month == "APRIL" || day <= 20 && month == "MAY") {
        hideForm();
        changeText("Characteristics", "Strong and dependable, yet stubborn.");
        changeSizeAndColor('container', "#e9f7f5");
        changeImg("./img/taurus.gif");
    }
    else if (day >= 23 && month == "AUGUST" || day <= 22 && month == "SEPTEMBER") {
        hideForm();
        changeText("Characteristics", "Organized, sophisticated, and kind.");
        changeSizeAndColor('container', "#e9f7f5");
        changeImg("./img/virgo.gif");
    }
    else{
        hideForm();
        changeText("Invalid date or month", "Please try again");
        changeSizeAndColor('container', "#feeeed");
    }

}

