// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let twoDrivers = returnFirstTwoDrivers(drivers)

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2, 5)
}
let lastDrivers = returnLastTwoDrivers(drivers)

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier
    }
}
 const fareDoubler = createFareMultiplier(2)
 const fareTripler =createFareMultiplier(3)

 function selectDifferentDrivers(drivers, driverSelector){
    return driverSelector(drivers)
 }