const difficulty = document.getElementById("choice-of-difficulty");

const my_button = document.getElementById("play-button");

my_button.addEventListener("click", function(){

    easy_medium_hard = parseInt(difficulty.value);

    if (easy_medium_hard == 1) {

        for (i = 1; i < 101; i++) {

            const main = document.getElementById('grid');
            main.classList.add("pt-4");
            main.classList.add("pb-4");
            const cell = document.createElement("div");
            cell.classList.add("square");
            cell.classList.add("border");
            cell.classList.add("border-black");
            cell.classList.add("text-center");
            cell.innerHTML = i;
            main.append(cell);

            cell.addEventListener("click", function(){
                this.classList.toggle("bg-primary");
                console.log(cell.innerHTML);
            })
        }
    }

    else if (easy_medium_hard == 2) {
        
        for (i = 1; i < 82; i++) {

            const main = document.getElementById('grid');
            main.classList.add("pt-4");
            main.classList.add("pb-4");
            const cell = document.createElement("div");
            cell.classList.add("square-2");
            cell.classList.add("border");
            cell.classList.add("border-black");
            cell.classList.add("text-center");
            cell.innerHTML = i;
            main.append(cell);

            cell.addEventListener("click", function(){
                this.classList.toggle("bg-primary");
                console.log(cell.innerHTML);
            })
        }
    }

    else if (easy_medium_hard == 3) {

        for (i = 1; i < 50; i++) {

            const main = document.getElementById('grid');
            main.classList.add("pt-4");
            main.classList.add("pb-4");
            const cell = document.createElement("div");
            cell.classList.add("square-3");
            cell.classList.add("border");
            cell.classList.add("border-black");
            cell.classList.add("text-center");
            cell.innerHTML = i;
            main.append(cell);

            cell.addEventListener("click", function(){
                this.classList.toggle("bg-primary");
                console.log(cell.innerHTML);
            })
        }
    }
})




