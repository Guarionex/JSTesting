
export const add = (x, y, z) => {
    if(z) {
        return x + y + z;
    }
    else {
        return x + y;
    }
};

export const subtract = (x, y) => x - y;

export const convertToText = (someNumber) => {

    switch(someNumber) {
        case 4:
            return "four";
        case 6:
            return "six";
    }

    // if(someNumber == 4) {
    //     return "four";
    // }
    // else if(someNumber == 6) {
    //     return "six";
    // }
};

export const addObject = (setOfNumbers) => {
   return setOfNumbers.x + setOfNumbers.y + setOfNumbers.z;
};

export const getLastArrayElement = (setOfNumbers) => {
    const value = setOfNumbers[3];
    return value;
};
