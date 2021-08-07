const countMachine = {
    counter: 0,
    
    plusBtn: document.getElementById('plus'),
    minusBtn: document.getElementById('minus'),
    inputEl: document.querySelector('input'),
    points: document.getElementById('points'),
    
    play: function(){
        this.start();
        this.plusBtn.addEventListener('click', () => this.isIncrementing());
        this.minusBtn.addEventListener('click', () => this.isDecrementing())
        
    },
    start: function(){
        this.counter;
        this.inputEl.value = 1;
    },
    //increments points
    isIncrementing: function (){
        this.counter = this.counter + +(this.inputEl.value);
        this.points.innerHTML = this.counter
    },

    //decrements points 
    isDecrementing: function(){
        this.counter = this.counter - +(this.inputEl.value);
        this.points.innerHTML = this.counter
        this.negativeInput()
    },
    
    negativeInput: function(){
        if(this.counter < 0){
            this.points.classList.add('negativeValue')
        } 
    }

}
countMachine.play()