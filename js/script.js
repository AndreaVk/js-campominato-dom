document.getElementById('play').addEventListener('click', function(){
    play();
});

function play(){
    document.querySelector('.container-square').innerHTML='';
    const levelSelected = parseInt(document.getElementById('level').value);
    console.log(levelSelected);

    const bombsNumber= 16; 
    let cellsNumber, cellsForSide;

    switch(levelSelected){
        case 1:
            cellsNumber = 100;
            break;
            case 2: 
                cellsNumber = 81;
                break;
            case 3: 
                cellsNumber = 49;
        }

        const bombs = generateBoms();
        console.log(bombs);

    function generateBoms() {
        const arrayBombs = [];

        while(arrayBombs.length < bombsNumber){
            const numeroRandom = getRndInteger(1,cellsNumber);
            if(!arrayBombs.includes(numeroRandom)) {
                arrayBombs.push(numeroRandom);
            }
        }

        return arrayBombs;

    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    cellForSide = Math.sqrt(cellsNumber);
    

    generatePlayground();

    function generatePlayground() {


        const box = document.querySelector('.container-square');

        for(let i = 1; i<= cellsNumber; i++){
            const grid = createItem(i);

            grid.addEventListener('click', function() {
                this.classList.add('selected');
            });

            box.appendChild(grid);
        }
                
    }

    function createItem(num) {
        const cell = document.createElement('div');
        cell.classList.add('square');
        const size = `calc(100% / ${cellForSide})`;
        cell.style.width = size;
        cell.style.height = size;

        cell.innerHTML = num;

        return cell;

    }

    while( i< bombs.length){
        i++;
        arrayBombs[bombs[i]].classList.add("sconfitta");
        console.log(arrayBombs);
    }

    function selectBomba(bombs) {
        const boxArray = document.getElementsByClassName("campo");

        for (let i = 0; i < boxArray.length; i++) {
        boxArray[i].addEventListener("click", function () {

        if (this.classList.contains("bomba")) {

            this.classList.add("sconfitta");
                alert("Hai perso! Nabbetto 11111111111!!!!!");
        generateBoms(bombs);

        console.log(" Mosse =" + mosseAcc);
        sentinella = true;

        } else {

        if (sentinella) {
            console.log("Hai preso la bomba");
        }else{
            mosseAcc++;
            this.classList.add("selected");
        }
        }
        });
        }
        const bombe = Bombe();
        if (bombe.length > 0) {
            insertBomba(bombe);
            selectBomba(bombe);
        }
    }

}