//**************************************list************************************

function createBarIconToolbar(){
    const barIconListActions = createElement("li",{class:"list-Actions dropdown-utility"},"List Actions")
    const barIconListAdd = createElement("li",{class:"dropdown-utility"},createElement("a",{href:"#"},"Add Card..."))
    const barIconListCopy = createElement("li",{class:"dropdown-utility"},createElement("a",{href:"#"},"Copy List..."))
    const barIconListMove = createElement("li",{class:"dropdown-utility"},createElement("a",{href:"#"},"Move List..."))
    const barIconListWatch = createElement("li",{class:"dropdown-utility"},createElement("a",{href:"#"},"Watch..."))

    const dropdownBarMenu = createElement("div",{class:"dropdown-content rounded"},createElement("ul",{},[barIconListActions,barIconListAdd,barIconListCopy,barIconListMove,barIconListWatch]))
  
  
    const barIconDropdownElement = createElement("div",{class:"dropdown dropdown-barIcon"},[createElement("i",{class:"fa fa-bars dropbtn"}),dropdownBarMenu])

    return barIconDropdownElement;
}

function createCardIconToolbar(){
    const cardIconlistTemplate = createElement("li",{class:"list-Actions dropdown-utility"},"Card Templates")
    const cardIconlistDesignedTemplate = createElement("li",{class:"dropdown-utility text-center"},"Create a template.")
    const cardIconlistCreatTemplate = createElement("a",{class:"bg-lightGreen rounded px-2 text-white mx-2 my-1", href:"#"},"Create New Template ")
    
    const dropdownCardMenu = createElement("div",{class:"dropdown-content dropdown-card rounded"},createElement("ul",{},[cardIconlistTemplate,cardIconlistDesignedTemplate,cardIconlistCreatTemplate]))
    const cardIconElementDropdown = createElement("div",{class:"dropdown dropdown-cardIcon"},[createElement("i",{class:"fa fa-credit-card dropbtn"}),dropdownCardMenu])

    return cardIconElementDropdown;
}

function creatListNode(title){
    const titleElement = createElement("div",{class:"list-title-p"},createElement("p",{},title))
    const titleContainer = createElement("div",{class:"list-title my-1 mx-1 fw-bold"},[titleElement,createBarIconToolbar()])
    
    const plusIcon = createElement("i",{class:"fas fa-plus px-1"})
    const BTNAddCard = createElement("button",{class:"new-card rounded  text-secondary d-block"},"Add a card....")
    BTNAddCard.prepend(plusIcon);
    BTNAddCard.appendChild(createCardIconToolbar())   
    let InputAddCard = createElement("input",{class:"new-card rounded my-1 mx-1 text-secondary d-none",placeholder:"Enter a card name...", type:"text"})

    const cardInfoContainer = createElement("div",{class:"d-flex flex-column"},[BTNAddCard,InputAddCard])
    const cardContainer = createElement("ul",{class:"overflow-auto"})
    const ListContainer = createElement("div",{class:"list d-flex flex-column rounded mx-3"},[titleContainer,cardContainer,cardInfoContainer])

    BTNAddCard.addEventListener("click",function(){
        toggleShowHide(InputAddCard,BTNAddCard)
        InputAddCard.focus()        
    })

    InputAddCard.addEventListener("keyup",function(e){
        if(e.keyCode ===13){
            if(InputAddCard.value.length>0){
                cardContainer.appendChild(creatCardNode(InputAddCard.value))
                toggleShowHide(BTNAddCard,InputAddCard)
                InputAddCard.value=""
        }else{
                  toggleShowHide(BTNAddCard,InputAddCard)
                  InputAddCard.value=""
                } 
        }
    })

    return ListContainer;
}
//***************************************card*************************************
function creatCardNode(text){
    const penIcon = createElement("i",{class:"fas fa-pen text-secondary card-li-i"});
    const paragh = createElement("p",{class:"d-block"},text);
    const cardList = createElement("li",{class:"my-1 mx-1 bg-white rounded card-li d-block"},[paragh,penIcon]);

    penIcon.addEventListener("click",function(e){

        

        let overall = document.querySelector("#myNav");
        let input = document.querySelector(".revise-input");
        input.classList.add("card-li-test")
        input.value = e.target.previousSibling.innerText;

        let overallyInputContainer = document.querySelector(".overlay-input-container");
        overallyInputContainer.style.position = "absolute";
        overallyInputContainer.style.left = e.target.parentNode.offsetLeft-e.target.parentElement.parentElement.parentElement.parentElement.scrollLeft
        overallyInputContainer.style.top = e.target.parentNode.offsetTop-e.target.parentNode.parentNode.scrollTop-40
        
        let ulOverally = document.querySelector(".ul-overally")
        ulOverally.style.position = "absolute"
       // ulOverally.style.left = e.target.parentNode.offsetLeft+270-e.target.parentElement.parentElement.parentElement.parentElement.scrollLeft

        /*console.log("e",e.target.parentNode.offsetLeft)
        console.log("e+offset",e.target.parentNode.offsetLeft+e.target.parentNode.parentElement.parentElement.scrollLeft)
        console.log("window",window.outerWidth)
        console.log(e.target.parentElement)
        console.log(e.target.parentElement.parentElement.parentElement)
        console.log(e.target.parentElement.parentElement.parentElement.offsetLeft)
        console.log("test",e.target.parentElement.parentElement.parentElement.parentElement.scrollLeft)*/
        
        //if(e.target.parentNode.offsetLeft)

        if((e.target.parentNode.offsetLeft+270+180-e.target.parentElement.parentElement.parentElement.parentElement.scrollLeft
            )>window.outerWidth){
            ulOverally.style.left = e.target.parentNode.offsetLeft-175-e.target.parentElement.parentElement.parentElement.parentElement.scrollLeft}else{
            ulOverally.style.left = e.target.parentNode.offsetLeft+270-e.target.parentElement.parentElement.parentElement.parentElement.scrollLeft
        }

        if((e.target.parentNode.offsetTop-e.target.parentNode.parentNode.scrollTop-24+280)>window.outerHeight){
            ulOverally.style.top = e.target.parentNode.offsetTop-e.target.parentNode.parentNode.scrollTop-24-180}else{
            ulOverally.style.top = e.target.parentNode.offsetTop-e.target.parentNode.parentNode.scrollTop-40
        }
    
        let contain = e.target.parentNode

        contain.appendChild(overall)
        overall.classList.remove("d-none")
        overall.classList.add("d-block")
        input.focus();

        window.onkeydown = function(e) {
            if (e.keyCode == 27) {
                overall.classList.remove("d-block")
                overall.classList.add("d-none")
        }
    }

        input.addEventListener("keyup",function(e){
            if(e.keyCode ===13){
                if(input.value.length>0){
                    e.target.parentNode.parentNode.previousSibling.previousSibling.innerText=input.value
                    overall.classList.remove("d-block")
                    overall.classList.add("d-none") 
            }
        }
        })

        let save = document.querySelector(".edit-card-BTN");
        save.addEventListener("click",function myFunction(e){
        if(input.value.length>0){
        //console.log(e.target.parentNode.parentNode.previousSibling.previousSibling)
        e.target.parentNode.parentNode.previousSibling.previousSibling.innerText = input.value
        overall.classList.remove("d-block")
        overall.classList.add("d-none") 
        }
    })
    
    let closeBTN = document.querySelector(".close");
    closeBTN.addEventListener("click",function(e){
        let overall = document.querySelector("#myNav");
        overall.classList.remove("d-block")
        overall.classList.add("d-none")
        })

    })
    return cardList;
}
//******************************  **add a list cta(call to action)******************
function createAddListCTANode(){
    const addListButton = createElement("button",{class:"add-list-btn rounded  mx-1 d-block"},"Add a list....");
    addListButton.prepend(createElement("i",{class:"fas fa-plus px-1"}))
    const addListInput = createElement("input",{class:"add-list-input rounded my-1 mx-1 d-none",placeholder:"Enter a list name...",type:"text"})
    const AddListContainer = createElement("div",{class:"add-list d-flex flex-column float-left"},[addListButton,addListInput])
    
    addListButton.addEventListener("click",function(){
        toggleShowHide(addListInput,addListButton)
        addListInput.focus()
    })

    addListInput.addEventListener("keyup",function(e){
        if(e.keyCode ===13){
            if(addListInput.value.length>0){
                let newList = creatListNode(addListInput.value); 
                let ListContainerInsertionNode = document.querySelector(".add-list");
                ListContainerInsertionNode.before(newList);
                toggleShowHide(addListButton,addListInput)
                addListInput.value=""
            }else{
                  toggleShowHide(addListButton,addListInput)
                  addListInput.value="" 
            } 
        }

    })    
    return AddListContainer;
}

