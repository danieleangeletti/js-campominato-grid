const my_button = document.getElementById("play-button");

my_button.addEventListener('click', function() {

    for (i = 1; i < 101; i++) {

        const main = document.getElementById('grid');
        const cell = document.createElement("div");
        cell.classList.add("square");
        cell.innerHTML = i;
        main.append(cell);
        
    }

})
