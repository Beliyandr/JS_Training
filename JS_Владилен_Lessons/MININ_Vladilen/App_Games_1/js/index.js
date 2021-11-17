let $start = document.querySelector('#start'),
    $game = document.querySelector('#game'),
    $time = document.getElementById('time'),
    $result = document.getElementById('result'),
    $timeHeader = document.getElementById('time-header'),
    $resultHeader = document.getElementById('result-header'),
    $gameTime = document.querySelector('#game-time'),


    colors = ['red', 'blue', 'green','yellow', 'pink'];

    score = 0,   //счетчик (для посчета количсества кликов)
    isGameStarted = false;

$start.addEventListener('click', startGame); // при клике на кнопку старт срабатывает функция startGame

$game.addEventListener('click', handleBoxClick);    

$gameTime.addEventListener('input', setGameTime);


function show($el) {
    $el.classList.remove('hide');
}

function hide($el) {
    $el.classList.add('hide');
}


function startGame() {                    // Убирает кнопку 'старт', делает задний фон белым, включает счетчик, и начинает создавать квадратики
    
    score = 0;
    setGameTime();

    $gameTime.setAttribute('disabled', true);


    isGameStarted = true;
    hide($start);
    $game.style.backgroundColor = '#fff';
    score++;


    let interval = setInterval(function(){

        let time = parseFloat($time.textContent);

        if (time <= 0){
            clearInterval(interval);
            endGame();
        } else{
            $time.textContent = (time - 0.1).toFixed(1);
        }
console.log('interval', $time.textContent)

    }, 100);


renderBox();

}

function setGameScore(){
        $result.textContent = score.toString();
}

function setGameTime(){

    show($timeHeader);
    hide($resultHeader);
    let time = +$gameTime.value;
    $time.textContent = time.toFixed(1); 
}

function endGame(){

    isGameStarted = false;
    setGameScore();
    $gameTime.removeAttribute('disabled');
    show($start);
    $game.innerHTML = '' ;
    $game.style.backgroundColor = '#ccc';
    hide($timeHeader);
    show($resultHeader);
}



function handleBoxClick(event) {       //проверяем если мы кликнули не на квадратик, у которого есть дата-атрибут(box),
                                        // то ничего не происходит, иначе создается квадратик заного
    if(!isGameStarted){
        return;
    }



    if (event.target.dataset.box){
        score++;
        renderBox();
    }


}

function renderBox() {       // создается (рандомно) блок со стилями(т.е. сам квадратик), 

    $game.innerHTML = '' ; // очищаем от повторений квадраты

    let boxSize = getRandom(30,100);
    let box = document.createElement('div');
    let gameSize = $game.getBoundingClientRect();
    let maxTop = gameSize.height - boxSize ;
    let maxLeft = gameSize.width - boxSize;
    let randomColorIndex = getRandom(0, colors.length);



    box.style.height = box.style.width = boxSize + 'px';
    box.style.position = 'absolute' ;
    box.style.backgroundColor = colors[randomColorIndex] ;
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.cursor = 'pointer' ;
    box.setAttribute('data-box', 'true'); 

    $game.insertAdjacentElement('afterbegin', box);


}

function getRandom(min, max){
    return Math.floor(Math.random() * (max-min) + min) ;
}