// Code your solution here
function findMatching(drivers, person){
    let pass = drivers.filter(name => name == person || name == person.toLowerCase())
    return pass    
} 

function fuzzyMatch (driverArray,name){
    return driverArray.filter(element => element.slice(0,1) === name.slice(0,1))
}

function matchName(drivers, namai){
    const dudebros = drivers.filter(person => person.name === namai)
    return dudebros
}
