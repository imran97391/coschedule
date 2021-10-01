let date = new Date();
console.log(date);

let cell = document.getElementById("data-cell");
let icon_click = document.getElementById("click-plus");
console.log(cell);
icon_click.addEventListener("click", function () {
    let div = document.createElement("div");
    div.setAttribute("class", "blog-area");

    let title = document.createElement("div");
    title.setAttribute("class", "blog-title");
    title.innerHTML = "Blog Post";

    let text = document.createElement("textarea");
    text.setAttribute("class", "text-area");

    div.append(title, text);
    
    cell.append(div);
    console.log(div, cell);
})
