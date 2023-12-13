// const my_button = document.getElementById("play-button");

// my_button.addEventListener('click', function() {

//     for (i = 1; i < 101; i++) {

//         const main = document.getElementById('grid');
//         const cell = document.createElement("div");
//         cell.classList.add("square");
//         cell.classList.add("border");
//         cell.classList.add("border-black");
//         cell.classList.add("text-center");
//         cell.innerHTML = i;
//         main.append(cell);

//         cell.addEventListener('click', function(){
//             this.classList.toggle("bg-primary");
//             console.log(cell.innerHTML);
//         })

//     }

// })

// my_button.addEventListener("click", function() {
//     const main = document.getElementById("grid");
//     user_choice = document.createElement("select");
//     user_choice.classList.add("form-select");
//     user_choice.innerHTML = `
//         <option selected>Select the difficulty level</option>
//         <option value="1">Easy</option>
//         <option value="2">Medium</option>
//         <option value="3">Hard</option>
//     `
//     main.append(user_choice);
// })

const difficulty = document.getElementById("choice-of-difficulty");

const my_button = document.getElementById("play-button");

my_button.addEventListener("click", function(){
    console.log(difficulty.value);
})




