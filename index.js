// Vars
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
const deleteBtn = document.getElementById("delete-btn");

// Local Storage and Rendering

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render (leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) { 
        listItems += `
                    <li>
                    <a target='_blank' href='${leads[i]}'>
                        ${leads[i]}
                    </a>
                    </li>
                    `;
        }
        ulEl.innerHTML = listItems;
}

// Input and Buttons

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads) );
    render(myLeads);
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})
