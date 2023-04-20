const search = document.getElementById('search')
const li = document.getElementsByTagName('li')

search.addEventListener("keyup", searchFilter)

function searchFilter() {
    const searchVal = search.value;
    
    for(let i = 0; i < li.length; i++){
        if (li[i].innerHTML.toLowerCase().includes(searchVal)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

