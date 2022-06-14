

// Custom mobile scroll event 

'use strict'

let header1 = document.querySelector(".header");

let countMovesIterations = 0;

let anglesIterations = 0;

let frequencyCoefficient1 = 3; // 18 was polling frequency of the touchmove event (used as a filter)

let frequencyCoefficient2 = 9; 

let duplicatesCoefficient = 1; // number of duplicates in the touchYArray (used to detect vertical scrolling)

let filtrationCoefficient1 = 10;

let filtrationCoefficient2 = 70;

// Провести рефакторинг

// разобраться с пушем на гитхаб

// возможно запихать это всё в кастомный ивент

// решить проблем, связанную с тем, что при определённом угле событие скролла срабартывает, а скролл не идёт ещё на таком угле

let touchYArray = [];

let touchXArray = [];

let anglesArray = [];

let directionOfScrollArray = [];

let movesArrayY = [];

let angle;

document.addEventListener("touchmove", e => {

    touchYArray.push(e.changedTouches[0].clientY);

    touchXArray.push(e.changedTouches[0].clientX);

    if ((countMovesIterations % frequencyCoefficient1) == 0) { // the condition that sets a polling frequency of the touchmove event

        let triangleHypotenuse, triangleCathet; // variables for recognizing the scroll at the angle

        if (touchXArray[frequencyCoefficient1 - 1] > touchXArray[0]) { // determing the cathet and hypotenuse of the triangle formed by user finger
            triangleHypotenuse = touchXArray[frequencyCoefficient1 - 1] - touchXArray[0];
        } else {
            triangleHypotenuse = touchXArray[0] - touchXArray[frequencyCoefficient1 - 1];
        }

        if (touchYArray[frequencyCoefficient1 - 1] > touchYArray[0]) { 
            triangleCathet = touchYArray[frequencyCoefficient1 - 1] - touchYArray[0];
        } else {
            triangleCathet = touchYArray[0] - touchYArray[frequencyCoefficient1 - 1];
        }

        angle = Math.asin((triangleCathet / triangleHypotenuse)) * 57.2958; // finding the angle is formed by user finger

        anglesIterations = anglesIterations + 1; // used to correctly detect scrolling

        // console.log(angle);

        // let toFindVerticalScroll = (touchYArray) => { // finding a number of duplicates in the touchYArray (used to detect vertical scrolling)
        //     return touchYArray.filter((item, index) => {
        //         touchYArray.indexOf(item) !== index;
        //     });
        // }

        const toFindVerticalScroll = touchYArray => touchYArray.filter((item, index) => touchYArray.indexOf(item) !== index) // finding a number of duplicates in the touchYArray (used to detect vertical scrolling)

        let verticalScrollArray = toFindVerticalScroll(touchYArray);

        // console.log(verticalScrollArray);

        let duplicateCountY = verticalScrollArray.length;

        if ((duplicateCountY < duplicatesCoefficient) && ((((angle >= 51) && (angle < 90))) || (isNaN(angle))) && (anglesIterations > 1))  { // the condition that detects vertical scrolling (for this it uses the number of duplicates in touchYArray and the angle that formed by user's finger)

            let directionOfScroll;

            if (touchYArray[frequencyCoefficient1 - 1] > touchYArray[0]) { // determing the scrolling direction
                directionOfScroll = "scroll up";
                directionOfScrollArray.push(directionOfScroll);
            } else {
                directionOfScroll = "scroll down";
                directionOfScrollArray.push(directionOfScroll);
            }

        }



    

        movesArrayY.push(duplicateCountY);

        // zeroing variables

        // console.log(touchYArray);

        touchYArray = [];

        touchXArray = [];

        verticalScrollArray = [];

        duplicateCountY = [];

        anglesArray = [];

}

anglesArray.push(angle);

if ((countMovesIterations % frequencyCoefficient2) == 0) {
    // let filteredDirectionOfScroll = directionOfScrollArray[((frequencyCoefficient2 / frequencyCoefficient1) - 1)];

    console.log(`not-filtered`);

    console.log(directionOfScrollArray);

    // let toFindScrollDirection = (directionOfScrollArray) => { // finding a number of duplicates in the touchYArray (used to detect vertical scrolling)
    //     return directionOfScrollArray.filter((item, index) => {
    //         directionOfScrollArray.indexOf(item) !== index;
    //     });
    // }

    const toFindScrollDirection = directionOfScrollArray => directionOfScrollArray.filter((item, index) => directionOfScrollArray.indexOf(item) !== index);


    let test = toFindScrollDirection(directionOfScrollArray);


    if (test.length == 0) {
        test = directionOfScrollArray[directionOfScrollArray.length - 1];
    } else if (test.length == 2) {
        test = directionOfScrollArray[0];
    } else if (test.length == 1) {
        test = test[0];
    }

    console.log(`filtered`);

    console.log(test);


                const customMobileScrollEvent = new CustomEvent("custom:mobileScroll", { // creating a custom event to detect mobile scrolling
        bubless: true,
        cancelable: false,
        composed: true,
        detail: {
            test,
        },
    });

                document.dispatchEvent(customMobileScrollEvent);


    // let filteredDirectionOfScrollArray = toFindScrollDirection(directionOfScrollArray);
    // console.log(test);
    directionOfScrollArray = [];



}




// increase the countMovesIterations variable

countMovesIterations = countMovesIterations + 1;

});



document.addEventListener("custom:mobileScroll", e => {
    // console.log(e.detail.test);

    let scrollDirection = e.detail.test;

    if (scrollDirection == "scroll down") {
        header.classList.remove("_enable");
        header.classList.add("_disable");
    } else {
        header.classList.remove("_disable");
        header.classList.add("_enable");
    }

    // console.log("scroll");
});
