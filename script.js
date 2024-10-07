const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")

function addTask(){
    if(inputBox.value===''){
        alert("You must write something !")
    }

    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}


listContainer.addEventListener("click",function(e){//click event funk yaz
    if(e.target.tagName==="LI"){ //eger liye tıklarsak 
        e.target.classList.toggle("checked") //tıklananın clas listesine toggle ile ckecked clasını ver
        saveData();
    }
    else if (e.target.tagName==="SPAN"){//eger spana tıklarsa 
        e.target.parentElement.remove();// elementi dizinden kaldır
        saveData();
    }

},false);



function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();