const input = document.querySelector(".todo-input");
const submitButton = document.querySelector(".submit-button");
const allItems = document.querySelector(".all-items");
const updateInput = document.querySelector(".update-input");
const updateItemButton = document.querySelector(".update-item");

submitButton.addEventListener("click", addItem);
allItems.addEventListener("click",deleteAndUpdate);



function addItem(e) {
    e.preventDefault();
    const value = input.value;
    if (value) {
        const newItem = document.createElement("div");
        newItem.innerHTML = `<div class="item">
        <li>${input.value}</li>
        <div class="item-buttons">
        <img class="delete" src="./images/trash-solid.png" alt="delete">
        <img class="update" src="./images/pen.png" alt="update">
        </div>
    </div>`;
    allItems.appendChild(newItem)
        input.value = "";
        saveTolocalStorage();
    } else { 
        alert("Input field can't be empty")

     }
}


function deleteAndUpdate(e){
 if(e.target.classList.contains("delete")){
    e.target.parentElement.parentElement.remove();
    saveTolocalStorage();
 }
 else if(e.target.classList.contains("update")){

    document.querySelector(".todo").style.display = "none"
    document.querySelector(".update-modal").classList.add("active");
   updateInput.value =e.target.parentElement.parentElement.firstElementChild.innerHTML;

   updateItemButton.addEventListener("click",()=>{
    if(updateInput.value){
        e.target.parentElement.parentElement.firstElementChild.innerHTML = updateInput.value;
        saveTolocalStorage()
        document.querySelector(".todo").style.display = "block"
     document.querySelector(".update-modal").classList.remove("active");
    }else{
        alert("Input field can't be empty")
    }

   })

 }
}


function saveTolocalStorage(){
    localStorage.setItem("data",allItems.innerHTML);
    
}
function showItems(){
    if(localStorage.length > 0){

        allItems.innerHTML = localStorage.getItem("data");
    }
}

showItems();


