//*******************************projectName**************************
function subjectName(){  
    let projectName = prompt("Please enter your project name");
    let subjectNameContainer = document.querySelector(".subject");

    (projectName !=null)?subjectNameContainer.innerText ="projectName":undefined;
    (!projectName)?subjectNameContainer.innerText = "projectName":
    subjectNameContainer.innerText = projectName;    
}
subjectName()

let subjectNameContainer = document.querySelector(".subject")
subjectNameContainer.addEventListener("click",subjectName
)

//********************************creatElement**************************
/**
 * @returns{HTMLElement}
 * @param {string} tagName 
 * @param {object} attributes 
 * @param {Array/string/HTMLElement} content 
 */
function createElement(tagName,attributes,content){
    var El = document.createElement(tagName);
    for (var key in attributes){
        El.setAttribute(key,attributes[key])
    }

    if(typeof content !=="undefined"){
        if(content instanceof HTMLElement){
            El.appendChild(content)
            }else if(Array.isArray(content)){
                    for(var key in content){
                        if(content[key] instanceof HTMLElement){
                            El.appendChild(content[key])
                        }
                }}    
        else{
            El.innerText=content;
        }
    }
    return El;
};
//******************************favorite-project***************************
var favoriteproject=document.querySelector(".favoriteChild");
favoriteproject.addEventListener("click",function(e){
    if(e.target.classList.contains("text-warning")){
        e.target.classList.remove("text-warning")
        e.target.classList.add("text-white")
    }else{
        e.target.classList.add("text-warning")
        e.target.classList.remove("text-white")
    }
})

favoriteproject.addEventListener("click",function(e){
    /*console.log(e.target.childNodes[0])*/
    if(e.target.childNodes[0]){
        if(e.target.childNodes[0].classList.contains("text-warning")){
            e.target.childNodes[0].classList.remove("text-warning")
            e.target.childNodes[0].classList.add("text-white")
    }else{
        e.target.childNodes[0].classList.add("text-warning")
        e.target.childNodes[0].classList.remove("text-white")
}}
})
//******************************email-validation***************************
function emailValidation(){

    let emailButton = document.querySelector(".button-invitation");
    let emailContainer = document.querySelector(".input-input");

    const mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailContainer.value.match(mailformat)){
        emailButton.classList.remove("button-send-invitation-block")
        emailButton.classList.add("button-send-invitation-allowed")
    }else{
        emailContainer.focus()
    }
}
//********************************show-menu***********************************

function openNav() {
    document.getElementById("mySidepanel").style.width = "300px"
    document.querySelector(".slidePanel-closeBTN").classList.remove("d-none")
    document.querySelector(".slidePanel-closeBTN").classList.add("d-block")
    let colorpicker = document.querySelector("#color-picker")
    colorpicker.addEventListener("change",function(e){
        document.body.style.backgroundColor = e.target.value;
    })
    
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0px"
    document.querySelector(".slidePanel-closeBTN").classList.remove("d-block")
    document.querySelector(".slidePanel-closeBTN").classList.add("d-none")
  }

//**********************************toggle-show-hide**************************
function toggleShowHide(ToShowElement,ToHideElement){ 
    ToShowElement.classList.remove("d-none")
    ToShowElement.classList.add("d-block")

    ToHideElement.classList.remove("d-block")
    ToHideElement.classList.add("d-none")
}

//************************************TIME************************************
(function clockRunner(){
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let p = "AM"
    if(hour>12){
        hour -=12;
        p = "PM"
    }
    let time=hour+":"+minute+":"+second+""+p;
    document.getElementById("clockDisplay").textContent=time;
    setTimeout(clockRunner , 1000)
})()

