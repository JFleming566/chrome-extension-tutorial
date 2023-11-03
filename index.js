// Vars
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")


// Input and Button

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
})

function renderLeads () {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
      // "https://" added to href so that the link will work while the file is saved on local 
        listItems = `
                    <li>
                    <a target='_blank' href='https://${myLeads[i]}'>
                        ${myLeads[i]}
                    </a>
                    </li>
                    `;
        }
        ulEl.innerHTML += listItems;
}





// ulEl.innerHTML = listItems;
// const li = document.createElement("li");
// li.innerText = myLeads[i];
// ulEl.append(li);