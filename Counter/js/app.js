// Tu código aquí. Solución de Didac

let increaseButton = document.querySelector('.nextBtn');
let decreaseButton = document.querySelector('.prevBtn');

let count = 0;
let counter = document.querySelector('#counter');

increaseButton.addEventListener('click', function() {
    count++;
    updateCounter(count);

})

decreaseButton.addEventListener('click', function() {
    count--;
    updateCounter(count);


  
})

function updateCounter (count) {
    counter.innerHTML = count;
    
    if(count < 0) {
        counter.style.color = "red"
    }
    else if(count > 0) {
        counter.style.color = "green"
    }
    else counter.style.color = "black"

}
