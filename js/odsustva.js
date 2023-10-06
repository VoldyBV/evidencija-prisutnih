window.addEventListener("DOMContentLoaded", () => {
    var waiting_block = document.querySelector(".waiting-block");
    waiting_block.style.display = "flex";

    fetch(`${scriptURL}?header=puno_ime`)
    .then((response) => response.json())
    .then(({data}) => {
        populateDatalist(data);
        waiting_block.style.display = "none";
    })
    .catch((error) => {console.error(error)})
});

const populateDatalist = (arr) => {
    let result = "";
    //izbacujem prvi jer mi je on "Puno Ime" što mi ne treba
    arr.shift();
    for(const item of arr) {
        result += `<option value="${item}">`
    }
    if(document.querySelector("#imena-clanova")){
        document.querySelector("#imena-clanova").innerHTML = result;
    }
}