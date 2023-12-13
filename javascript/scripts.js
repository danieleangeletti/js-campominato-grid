const my_button = document.getElementById("play-button");

my_button.addEventListener('click', function() {

    for (i = 1; i < 101; i++) {

        const main = document.getElementById('grid');
        main.classList.add("bg-success");
        main.classList.add("bg-opacity-50");
        const cell = document.createElement("div");
        cell.classList.add("square");
        cell.classList.add("border");
        cell.classList.add("border-black");
        cell.classList.add("text-center");
        cell.innerHTML = i;
        main.append(cell);

        cell.addEventListener('click', function(){
            this.classList.toggle("bg-primary");
            console.log(cell.innerHTML);
        })

    }

})


