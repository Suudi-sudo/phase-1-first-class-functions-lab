// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Mo']));

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};
 
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 
const createFareMultiplier = function(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
};
 
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
 
// Function to select different drivers based on provided function
function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers); // Calls the provided function with the drivers array
}



