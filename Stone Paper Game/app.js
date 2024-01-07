function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
let computer_choice = randomIntFromInterval(1, 3);
let your_choice = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let btn = document.querySelector("#btn");
let your_score = document.querySelector("#your_score");
let computer_score = document.querySelector("#computer_score");

rock.addEventListener("click",() => {
    rock.classList.add("border");
    setTimeout(function () {
        rock.classList.remove("border");
    },800);
    if(computer_choice == 1)
    {
        btn.innerText = "It's a Draw";
        btn.style.backgroundColor = "orange";
    }
    else if(computer_choice == 2)
    {
        btn.innerText = "Oops!! You Loose";
        btn.style.width = "200px";
        btn.style.backgroundColor = "red";
        computer_score.innerText = parseInt(computer_score.innerText) + 1;
    }
    else
    {
        btn.innerText = "Hurray!! You Won";
        btn.style.width = "200px";
        btn.style.backgroundColor = "greenyellow";
        your_score.innerText = parseInt(your_score.innerText) + 1;
    }
    computer_choice = randomIntFromInterval(1, 3);
})

paper.addEventListener("click",() => {
    paper.classList.add("border");
    setTimeout(function () {
        paper.classList.remove("border");
    },800);
    if(computer_choice == 1)
    {
        btn.innerText = "Hurray!! You Won";
        btn.style.width = "200px";
        btn.style.backgroundColor = "greenyellow";
        your_score.innerText = parseInt(your_score.innerText) + 1;
    }
    else if(computer_choice == 2)
    {
        btn.innerText = "It's a Draw";
        btn.style.backgroundColor = "orange";
    }
    else
    {
        btn.innerText = "Oops!! You Loose";
        btn.style.width = "200px";
        btn.style.backgroundColor = "red";
        computer_score.innerText = parseInt(computer_score.innerText) + 1;
    }
    computer_choice = randomIntFromInterval(1, 3);
})

scissors.addEventListener("click",() => {
    scissors.classList.add("border");
    setTimeout(function () {
        scissors.classList.remove("border");
    },800);
    if(computer_choice == 1)
    {
        btn.innerText = "Oops!! You Loose";
        btn.style.width = "200px";
        btn.style.backgroundColor = "red";
        computer_score.innerText = parseInt(computer_score.innerText) + 1;
    }
    else if(computer_choice == 2)
    {
        btn.innerText = "Hurray!! You Won";
        btn.style.width = "200px";
        btn.style.backgroundColor = "greenyellow";
        your_score.innerText = parseInt(your_score.innerText) + 1;
    }
    else
    {
        btn.innerText = "It's a Draw";
        btn.style.backgroundColor = "orange";
    }
    computer_choice = randomIntFromInterval(1, 3);
})

