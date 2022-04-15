const returnFirstTwoDrivers=(array)=>{
    let newArray = array.slice(0,2);
    return newArray;
};
const returnLastTwoDrivers=(array)=>{
    let newArray = array.slice(-2);
    return newArray;
};
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(x){
    return function inner(y){
        return x*y;
    };
};
console.log(createFareMultiplier(2));
const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(2));
const fareTripler = createFareMultiplier(3);
console.log(fareTripler(3));

function selectDifferentDrivers(array,driverFunction){
    return driverFunction(array);
}