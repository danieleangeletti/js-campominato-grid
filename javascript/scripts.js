const my_button = document.getElementById("play-button");

my_button.addEventListener('click', function() {
    for (i = 1; i < 101; i++) {
        const cell = document.createElement("div");
        const main = document.querySelector("main div");
        main.append(cell);
        cell.innerHTML = i;
    }
})
