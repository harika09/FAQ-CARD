document.getElementById("invite").addEventListener("click", function(){
    var hideText = document.querySelector(".invite__text");
    var invite__text = document.querySelector(".invite__title");
    var rotate = document.querySelector(".rotate");
    if(hideText.style.display == "none"){
        hideText.style.display = "block";
        invite__text.style.fontWeight = "900";
        rotate.style.transform = 'rotate(180deg)';
    }
    else{
        hideText.style.display= "none";
        invite__text.style.fontWeight = "400";
        rotate.style.transform = 'rotate(0deg)';
    }

});

document.getElementById("maximum").addEventListener("click", function(){
    var hideText = document.querySelector(".maximum__text");
    var invite__text = document.querySelector(".maximum__title");
    var rotate = document.querySelector(".maximum");
    if(hideText.style.display == "none"){
        hideText.style.display = "block";
        invite__text.style.fontWeight = "900";
        rotate.style.transform = 'rotate(180deg)';

    }
    else{
        hideText.style.display= "none";
        invite__text.style.fontWeight = "400";
        rotate.style.transform = 'rotate(0deg)';
    }

});

document.getElementById("reset").addEventListener("click", function(){
    var hideText = document.querySelector(".reset__text");
    var invite__text = document.querySelector(".reset__title");
    var rotate = document.querySelector(".reset");
    if(hideText.style.display == "none"){
        hideText.style.display = "block";
        invite__text.style.fontWeight = "900";
        rotate.style.transform = 'rotate(180deg)';
        

    }
    else{
        hideText.style.display= "none";
        invite__text.style.fontWeight = "400";
        rotate.style.transform = 'rotate(0deg)';
    }

});

document.getElementById("sub").addEventListener("click", function(){
    var hideText = document.querySelector(".sub__text");
    var invite__text = document.querySelector(".sub__title");
    var rotate = document.querySelector(".sub");
    if(hideText.style.display == "none"){
        hideText.style.display = "block";
        invite__text.style.fontWeight = "900";

    }
    else{
        hideText.style.display= "none";
        invite__text.style.fontWeight = "400";
        rotate.style.transform = 'rotate(0deg)';
    }

});

document.getElementById("support").addEventListener("click", function(){
    var hideText = document.querySelector(".support__text");
    var invite__text = document.querySelector(".support__title");
    var rotate = document.querySelector(".support");
    if(hideText.style.display == "none"){
        hideText.style.display = "block";
        invite__text.style.fontWeight = "900";
        rotate.style.transform = 'rotate(180deg)';

    }
    else{
        hideText.style.display= "none";
        invite__text.style.fontWeight = "400";
        rotate.style.transform = 'rotate(0deg)';
    }

});

