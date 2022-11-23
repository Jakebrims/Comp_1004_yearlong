    //used to grab classes out of the HTML 
    const UserInput = document.querySelector('#Username')
    const PassInput = document.querySelector('#Pass')
    const Submitbtn = document.querySelector('#btnsubmit')
    const detailsUl = document.querySelector('.Details')
    const SiteInput = document.querySelector('#WebsiteName')

    const ModalWrapperStyle = document.querySelector(".ModalWrapper");

    function display(id){
        const modalConst = document.getElementById(id); //displays password part
        ModalWrapperStyle.style.display = "flex";
        modalConst.style.display= "flex";
        
    }

    const getDetails = () => {
    let details;
    if(localStorage.getItem('details') === null){
        details = [];
    }else {
        details = JSON.parse(localStorage.getItem('details'));
    }
    return details;
}

const loadDetails = e => {
    e.preventDefault();

    let li = document.createElement('li');
    //outputs on the screen for the log
    li.textContent = SiteInput.value + UserInput.value  + PassInput.value;
    //saves and adds the commas 
    saveDetails(SiteInput.value + ", " + UserInput.value + ", "  + PassInput.value)
    //adds to the list
    detailsUl.appendChild(li);
    SiteInput.value = ""; //URL
    UserInput.Value = ""; //Username
    PassInput.Value = ""; //Password
}

const saveDetails = inputData => {
    const details = getDetails()
    details.push(inputData)
    localStorage.setItem('details', JSON.stringify(details))
}

Submitbtn.addEventListener('click', loadDetails)

window.addEventListener('DOMContentLoaded', () => {
    const details = getDetails()
        //makes the details appear
    details.forEach( detail => {
        let li = document.createElement('li');
        li.textContent =  detail;
        detailsUl.appendChild(li)
        
        
    })
  })
  
  //Checker
  function pwdStrength(){
    var capital = document.getElementById("capital");
    var passLength = document.getElementById("Length");
    var passwords= document.getElementById("Pass").value;
    var number = document.getElementById("number"); 
    var symbol = document.getElementById("symbol");
    if (/[0-9]/g.test(passwords)){ //numbers
        number.classList.remove("Nosecure");
        number.classList.add("Secure");
    }
    else{
        number.classList.add("Nosecure");
        number.classList.remove("Secure");
    }

        if(/[A-Z]/g.test(passwords)) {  //capital 
        capital.classList.remove("Nosecure");
        capital.classList.add("Secure");
    } 
        else {
        capital.classList.remove("Secure");
        capital.classList.add("Nosecure");
    }
        if (/[@!/\()':;~#]/.test(passwords)){ //symbols
            symbol.classList.remove("Nosecure");
            symbol.classList.add("Secure");
        }
        else{
            symbol.classList.add("Nosecure");
            symbol.classList.remove("Secure");
        }
        if (passwords.length > 9){ //checks length of password, making sure it is 10 or more 
            passLength.classList.remove("Nosecure");
            passLength.classList.add("Secure");
        }
        else{
            passLength.classList.add("Nosecure");
            passLength.classList.remove("Secure");
        }
}