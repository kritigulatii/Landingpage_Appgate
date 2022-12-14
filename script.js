var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        let active = document.querySelectorAll(".accordion-div .accordion.active");
                        for (let j = 0; j < active.length; j++) {
                            active[j].classList.remove("active");
                            active[j].nextElementSibling.style.maxHeight = null;

                        }
                        this.classList.toggle("active");
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }
// function showInfo1(){

//     var invisibleText1=document.getElementById("invisible1");
//     var btnText = document.getElementById("btn1");
//     var mainDiv = document.getElementsByClassName("dropdown")[0];
//     if(invisibleText1.style.display!=="inline"){
//         invisibleText1.style.display="inline";

//         btnText.src = "Images/Group 8815.png";
        
//         mainDiv.style.backgroundColor="black";
//         mainDiv.style.color="white";
//         mainDiv.style.height="250px";

//     }
//     else {
//         invisibleText1.style.display="none";
        
//         btnText.src = "Images/Group 8813.png";

//         mainDiv.style.backgroundColor="white";
//         mainDiv.style.color="black";
//         mainDiv.style.height="82px";
//     }

// }

// function showInfo2(){

//     var invisibleText2=document.getElementById("invisible2");
//     var btnText = document.getElementById("btn2");
//     var mainDiv = document.getElementsByClassName("dropdown")[1];
//     if(invisibleText2.style.display!="inline"){
//         invisibleText2.style.display="inline";
//         mainDiv.style.backgroundColor="black";
//         mainDiv.style.color="white";
//         mainDiv.style.height="250px";

//         btnText.src = "Images/Group 8815.png";

//     }
//     else {
//         invisibleText2.style.display="none";
//         mainDiv.style.backgroundColor="white";
//         mainDiv.style.color="black";
//         mainDiv.style.height="82px";

//         btnText.src = "Images/Group 8813.png";
//     }

// }

// function showInfo3(){

//     var invisibleText=document.getElementById("invisible3");
//     var btnText = document.getElementById("btn3");
//     var mainDiv = document.getElementsByClassName("dropdown")[2];
//     if(invisibleText.style.display!="inline"){
//         invisibleText.style.display="inline";
//         mainDiv.style.backgroundColor="black";
//         mainDiv.style.color="white";
//         mainDiv.style.height="250px";

//         btnText.src = "Images/Group 8815.png";

//     }
//     else {
//         invisibleText.style.display="none";
//         mainDiv.style.backgroundColor="white";
//         mainDiv.style.color="black";
//         mainDiv.style.height="82px";

//         btnText.src = "Images/Group 8813.png";
//     }

// }

// function showInfo4(){

//     var invisibleText4=document.getElementById("invisible4");
//     var btnText = document.getElementById("btn4");
//     var mainDiv = document.getElementsByClassName("dropdown")[3];
//     if(invisibleText4.style.display!="inline"){
//         invisibleText4.style.display="inline";
//         mainDiv.style.backgroundColor="black";
//         mainDiv.style.color="white";
//         mainDiv.style.height="250px";

//         btnText.src = "Images/Group 8815.png";

//     }
//     else {
//         invisibleText4.style.display="none";
//         mainDiv.style.backgroundColor="white";
//         mainDiv.style.color="black";
//         mainDiv.style.height="82px";

//         btnText.src = "Images/Group 8813.png";
//     }

// }

// function showInfo5(){

//     var invisibleText5=document.getElementById("invisible5");
//     var btnText = document.getElementById("btn5");
//     var mainDiv = document.getElementsByClassName("dropdown")[4];
//     if(invisibleText5.style.display!="inline"){
//         invisibleText5.style.display="inline";
//         mainDiv.style.backgroundColor="black";
//         mainDiv.style.color="white";
//         mainDiv.style.height="250px";

//         btnText.src = "Images/Group 8815.png";

//     }
//     else {
//         invisibleText5.style.display="none";
//         mainDiv.style.backgroundColor="white";
//         mainDiv.style.color="black";
//         mainDiv.style.height="82px";

//         btnText.src = "Images/Group 8813.png";
//     }

// }

