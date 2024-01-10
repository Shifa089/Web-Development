const base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdown = document.querySelectorAll (".dropdown select");
const button = document.querySelector("form button");
//const error = document.querySelector(".amount p");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector("form .msg");

for(let select of dropdown)
{
    for(code in countryList)
    {
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if(select.name == "from" && code==="USD")
        {
            newOption.selected = "selected"
        } else if(select.name == "to" && code==="INR")
        {
            newOption.selected = "selected"
        } 
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}


const updateFlag = (element) => {
    // console.log(element);
    let currCode = element.value;
    // console.log(currCode);
    //let img = document.querySelector("."+element.name+" img");
    //console.log(img);
    let img = element.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryList[element.value]}/flat/64.png`
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal< 0)
    {
        // error.innerText = "Wrong Value Entered!!";
        // setTimeout(()=> {
        //     error.innerText = "Enter amount";
        // },3000)
        amountVal = 1;
        amount.value = 1;
    }
    const url = `${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(url);
    //console.log(response);
    let data = await response.json();
    //console.log(data);
    let converter = data[toCurr.value.toLowerCase()];
    final_amount = amountVal * converter;
    msg.innerText = `${amountVal} ${fromCurr.value} = ${final_amount} ${toCurr.value}`;
}

button.addEventListener("click",(evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});