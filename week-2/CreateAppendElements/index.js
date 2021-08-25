let h1 = document.createElement("h1");
h1.textContent = "Welcome to my JS site";
document.body.appendChild(h1);

let para = document.createElement("p");
para.textContent = "All of this was created with Javascript";
document.body.appendChild(para);

let orderedList = document.createElement("ol")
document.body.appendChild(orderedList);

let item1 = document.createElement("li");
    item1.textContent = "Item One";
//document.body.appendChild(item1);

let item2 = document.createElement("li");
    item2.textContent = "Item Two";
//document.body.appendChild(item2);

let item3 = document.createElement("li");
    item3.textContent = "Item Three";
//document.body.appendChild(item3);

orderedList.appendChild(item1);
orderedList.appendChild(item2);
orderedList.appendChild(item3);