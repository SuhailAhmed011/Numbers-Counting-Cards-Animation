let valuesDisplay = document.querySelectorAll(".num");
let interval = 4000;

valuesDisplay.forEach(values => {
    let start = 0;
    let end = parseInt(values.getAttribute("data-val"));
    let duration = Math.floor(interval / end)
    let counter = setInterval(function(){
        start += 1;
        values.textContent = start;
        if(start == end){
            clearInterval(counter)
        }
    },duration);
});