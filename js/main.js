const scriptURL = 'https://script.google.com/macros/s/AKfycbytlB1YOk7euMQa8QxcYP-nrfmqX31yu5eHpWmoVNsZ94WaR2-bF0_tbx5EE-m08-MGBQ/exec'


function Submit_Form_To_Sheet(form, e){
    //creating waiting block. Informs user that action has taken place
    var waiting_block = document.querySelector(".waiting-block");
    waiting_block.style.display = "flex";

    //prevent default action of the form
    e.preventDefault();

    //preparing data and adding sheet name to it
    var raw_data = new FormData(form);
    var sheet_name = form.getAttribute("data-sheet-name");

    raw_data.append("ime_tabele", sheet_name);
    
    //sending data to sheet
    fetch(scriptURL, { method: 'POST', body: raw_data})
    .then(response => {
        document.querySelector(".success").style.display = "flex"
        setTimeout(() => {
            document.querySelector(".success").style.display = "none";
        }, 1000);
        waiting_block.style.display = "none";
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
}
function Go_Back () {
    history.go(-1);
}