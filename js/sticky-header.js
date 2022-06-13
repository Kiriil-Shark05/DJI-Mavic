

// Custom mobile scroll event 

'use strict'

let movesArrayY = [];

let countMovesIterations = 0;

let anglesIterations = 0;

let frequencyCoefficient = 5; // 18 was polling frequency of the touchmove event (used as a filter)

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

let angle;

document.addEventListener("touchmove", e => {

    touchYArray.push(e.changedTouches[0].clientY);

    touchXArray.push(e.changedTouches[0].clientX);

    if ((countMovesIterations % frequencyCoefficient) == 0) { // the condition that sets a polling frequency of the touchmove event

        let triangleHypotenuse, triangleCathet; // variables for recognizing the scroll at the angle

        if (touchXArray[frequencyCoefficient - 1] > touchXArray[0]) { // determing the cathet and hypotenuse of the triangle formed by user finger
            triangleHypotenuse = touchXArray[frequencyCoefficient - 1] - touchXArray[0];
        } else {
            triangleHypotenuse = touchXArray[0] - touchXArray[frequencyCoefficient - 1];
        }

        if (touchYArray[frequencyCoefficient - 1] > touchYArray[0]) { 
            triangleCathet = touchYArray[frequencyCoefficient - 1] - touchYArray[0];
        } else {
            triangleCathet = touchYArray[0] - touchYArray[frequencyCoefficient - 1];
        }

        angle = Math.asin((triangleCathet / triangleHypotenuse)) * 57.2958; // finding the angle is formed by user finger

        anglesIterations = anglesIterations + 1; // used to correctly detect scrolling

        // console.log(angle);

        let toFindVerticalScroll = (touchYArray) => { // finding a number of duplicates in the touchYArray (used to detect vertical scrolling)
            return touchYArray.filter((item, index) => {
                touchYArray.indexOf(item) !== index;
            });
        }

        let verticalScrollArray = toFindVerticalScroll(touchYArray);

        let duplicateCountY = verticalScrollArray.length;

        if ((duplicateCountY < duplicatesCoefficient) && ((((angle >= 51) && (angle < 90))) || (isNaN(angle))) && (anglesIterations > 1))  { // the condition that detects vertical scrolling (for this it uses the number of duplicates in touchYArray and the angle that formed by user's finger)

            let directionOfScroll;

            if (touchYArray[frequencyCoefficient - 1] > touchYArray[0]) { // determing the scrolling direction
                directionOfScroll = "scroll up";
            } else {
                directionOfScroll = "scroll down";
            }

            const customMobileScrollEvent = new CustomEvent("custom:mobileScroll", { // creating a custom event to detect mobile scrolling
                bubless: true,
                cancelable: false,
                composed: true,
                detail: {
                    directionOfScroll,
                },
            });

            document.dispatchEvent(customMobileScrollEvent);

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



// increase the countMovesIterations variable

countMovesIterations = countMovesIterations + 1;

});



document.addEventListener("custom:mobileScroll", e => {
    console.log(e.detail.directionOfScroll);

    // console.log("scroll");
});
