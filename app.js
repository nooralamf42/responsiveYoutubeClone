let i=0
let data = document.querySelectorAll("#rowItemData")
onscroll = ()=>{
    let newRow = document.createElement("div")
    newRow.className = "col-md-6 col-lg-4 col-xl-3";
    newRow.innerHTML = data[i].innerHTML
    i++;
    i>=8? i=0 : 
    document.getElementById("videoBox").appendChild(newRow)
}