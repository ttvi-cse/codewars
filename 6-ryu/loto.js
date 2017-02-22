function numberGenerator() {
    // TODO - Generate wrong numbers
    var superzahl = Math.floor(Math.random()*9);
    var arr = [], num = 0;
    for (var i = 0; i < 6; i++) {
        do {
            // TODO - Generate wrong numbers, loop not execute
            num = Math.floor(Math.random()*49)
        }
        while (contains(arr,num));
        arr.push(num);
    }
    arr.push(superzahl);
    return arr.sort((a,b)=> a > b);
}

function checkForWinningCategory(checkCombination, winningCombination) {
    // TODO -  refacetor two switch, return -1 incase not two number match
    if (checkCombination[6] == winningCombination[6]) {
        var count = 0;
        for (var i = 0; i < checkCombination.length - 1; i++) {
            if (checkCombination[i] == winningCombination[i]) {
                count++;
            }
        }
        switch (count) {
            case 6:
                return 1;
            case 5:
                return 3;
            case 4:
                return 5;
                break;
            case 3:
                return 7;
            case 2:
                return 9
        }
    } else {
        var count = 0;
        for (var i = 0; i < checkCombination.length - 1; i++) {
            if (checkCombination[i] == winningCombination[i]) {
                count++;
            }
        }
        switch (count) {
            case 6:
                return 2;
            case 5:
                return 4;
            case 4:
                return 6;
                break;
            case 3:
                return 8;
        }
    }
}

function contains(arr, num) {
    var i = 0;
    while (arr[i] != num && i < arr.length) {
        i++;
    }
    return i < arr.length;
}