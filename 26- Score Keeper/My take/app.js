const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');
const resetit = document.querySelector('#reset');
const playtod = document.querySelector('#playto');

let p1scored = 0 ;
let p2scored = 0 ;
let winningscore = 5 ;
let gameover = false; 

p1button.addEventListener('click',function(){
    if(!gameover){
        p1scored += 1;
        if(p1scored == winningscore){
            gameover = true;
            p1score.classList.add('winner');
            p2score.classList.add('loser'); 
        }
        p1score.textContent = p1scored;
    }
})

p2button.addEventListener('click',function(){
    if(!gameover){
        p2scored += 1;
        if(p2scored == winningscore){
            gameover = true;
            p2score.classList.add('winner');
            p1score.classList.add('loser');            
        }
        p2score.textContent = p2scored;
    }
})

playtod.addEventListener('change',function(){
    winningscore = parseInt(this.value);
    reset();
})

resetit.addEventListener('click',reset);

function reset(){
    p1scored = 0 ;
    p2scored = 0 ;
    gameover = false;
    p1score.textContent = 0 ;
    p2score.textContent = 0 ;
    p1score.classList.remove('winner', 'loser');
    p2score.classList.remove('winner' , 'loser');
}