let addNameBtn = document.querySelector("#addBtn");
addNameBtn.addEventListener("click", addName);



function addName() {
    // get value from input
    let firstName = document.querySelector("#firstName").value;

    // get parent node
    let nameList = document.querySelector("#nameList");

    // creat child nodes
    let nameItem = document.createElement("div");
    let nameInput = document.createElement("input");
    nameInput.type ="text";
    nameInput.setAttribute("disabled", ""); 
    nameInput.value = firstName;
    nameInput.defaultValue = firstName;

    let editBtn = document.createElement("button");
    editBtn.textContent ="edit";
    editBtn.classList = "editBtn"; 
    editBtn.addEventListener("click", editvalue);
    let delBtn = document.createElement("button");
        delBtn.type ="submit";
        delBtn.innerHTML = "<span class='material-symbols-outlined'>delete</span>" ;
        delBtn.addEventListener("click", delvalue);

    // append child nodes
    nameList.appendChild(nameItem);
    nameItem.appendChild(nameInput);
    nameItem.appendChild(editBtn);
    nameItem.appendChild(delBtn);

    if(nameList.childElementCount >= 5) {
        addNameBtn.setAttribute("disabled", "");

        alert("You can add more than five task");
    }

    else if (nameList.childElementCount < 5) {
        addNameBtn.removeAttribute("disabled", "");

    }

    function delvalue () {
            this.parentNode.remove();
    }

    function editvalue () {
        // remove disabled attribute
        nameInput.removeAttribute("disabled", "");
        editBtn.setAttribute("disabled", "");


        // create save editBtn
        let saveBtn = document.createElement("button");
        saveBtn.textContent ="save";
        saveBtn.classList = "saveBtn"; 
        saveBtn.innerHTML = "<span class='material-symbols-outlined'>done_outline</span>" ;
        saveBtn.addEventListener("click", savevalue);
        // append save btn
        nameItem.appendChild(saveBtn);
        
        function savevalue() {
            let text = "ARE YOU SURE YOU WANT TO SAVE " + nameInput.value + " as name? ";

            if (confirm(text) == true) {
                // enable
                editBtn.removeAttribute("disabled", "");
            
            // get new value
            let newValue = nameInput.value;
            nameInput.defaultValue = newValue;
            console.log(newValue);

            // disabled input type
            nameInput.setAttribute("disabled", "");

            // hide save button
            // saveBtn.setAttribute("display", "");
            nameItem.removeChild(saveBtn);

            text = "Saved successfully";
        } else {
            text = "Cancelled";
            editBtn.removeAttribute("disabled", "");

            nameInput.setAttribute("disabled", "");

            nameItem.removeAttribute(saveBtn);

            nameInput.value = nameInput.defaultValue;
        }
        alert(text);
        }
    } 
    
} 