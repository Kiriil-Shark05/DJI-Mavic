
'use strict'

let lastScroll = 0;

let currentScroll;

let movesArray = [];

let countMovesIterations = 0;

let coefficient1 = 15; // частота опроса мув иветнта

let coefficient2 = 1; // число, которое отвечает за распознование верикального и горизонтального скролла

// Провести рефакторинг

// разобраться с пушем на гитхаб

// возможно запихать эьто всё в кастомный ивент

let touchYArray = [];

let movesId = 0;

document.addEventListener("touchstart", e => {

});

document.addEventListener("touchmove", e => {

    touchYArray.push(e.changedTouches[0].clientY)

    if ((countMovesIterations % coefficient1) == 0) {

        let toFindVerticalScroll = touchYArray => touchYArray.filter((item, index) => touchYArray.indexOf(item) !== index) // переписать в более удобную форму

    // touchYArray.filter((item, index) => {
    //     return touchYArray.indexOff(item);
    // });

        let verticalScrollArray = toFindVerticalScroll(touchYArray);

        let duplicateCount = verticalScrollArray.length;

        if (duplicateCount < coefficient2) {
            console.log("vertical scroll");
        }

        movesArray.push(duplicateCount);

        touchYArray = [];

        verticalScrollArray = [];

        duplicateCount = [];

        // console.log(movesArray);
}


    // console.log(touchYArray);



    // console.log("Move");

    // currentScroll = e.changedTouches[0].clientY;

    // if ((currentScroll - lastScroll) > 5) {
    //     console.log("scroll up");
    // } else if (((currentScroll - lastScroll) < 5)) {
    //     console.log("scroll down");
    // }

    // lastScroll = currentScroll;

   
    countMovesIterations = countMovesIterations + 1;


});

document.addEventListener("touchend", e => {

    // function touchYArray() {
    //     touchYArray.filter((item, index) => {
    //         return touchYArray.indexOff(item);
    //     });
    // };

});