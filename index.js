// Code your solution in this file!

// takes in a pickup location for a passenger, 
// and returns the number of blocks from Scuber headquarters on 42nd Street.
function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup - 42);
};

// translates the number of blocks from headquarters to the distance in feet. 
//Each block in Manhattan is 264 feet long.
function distanceFromHqInFeet(blocks) {
    return Math.abs(distanceFromHqInBlocks(blocks) * 264);
};

// takes in both the start and destination blocks, 
// and returns the number of feet travelled
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
};


//The first four hundred feet are free
//For a distance between 400 and 2000 feet, the price is 2 cents per foot
//2000 feet and under 2500 feet = a flat fare of $25
//Scuber does not allow any rides over 2500 feet
//

function calculatesFarePrice(start, destination) {
   const distance = distanceTravelledInFeet(start, destination);
   if (distance > 2500) {
    return 'cannot travel that far';
   } else if (distance > 2000 && distance < 2500) {
    return 25;
   } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02;
   } else if (distance < 400) {
    return 0;
   }
}
