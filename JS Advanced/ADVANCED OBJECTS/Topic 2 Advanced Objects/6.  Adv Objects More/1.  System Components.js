// 1. System Components
/*
You will be given a register of systems with components and subcomponents. You need to build an ordered
database of all the elements that have been given to you.
The elements are registered in a very simple way. When you have processed all of the input data, you must print
them in a specific order. For every System, you must print its components in a specified order, and for every
Component, you must print its Subcomponents in a specified order.

The Systems you’ve stored must be ordered by:
the number of components, in descending order, as first criteria,
and by alphabetical order as second criteria. 
The Components must be ordered by the number of Subcomponents,in descending order.

Input
The input comes as an array of strings. Each element holds data about a system, a component in that system, and a
subcomponent in that component. 
If the given system already exists, you should just add the new component to it.
If even the component exists, you should just add the new subcomponent to it. 
The subcomponents will always be unique. The input format is:

“{systemName} | {componentName} | {subcomponentName}”
All of the elements are strings, and can contain any ASCII character. 
The string comparison for the alphabetical order is case-insensitive.
Output
As output, you need to print all of the elements and order them exactly in the way specified above. The format is:
“{systemName}
 |||{componentName}
 |||{component2Name}
 ||||||{subcomponentName}
 ||||||{subcomponent2Name}
 {system2Name}
 ...”
*/
function main(inputArr) {
    systemComponents(inputArr);
}
// ['KLLS | Main Site | Home Page',
// 'KLLS | Main Site | Login Page',
// 'KLLS | Main Site | Register Page',
// 'KLLS | Populi Site | Login Page',
// 'KLLS | Populi Site | Submission Page',
// 'Lambda | CoreA | A23',
// 'KLLS | Digital Site | Login Page',
// 'Lambda | CoreB | B24',
// 'Lambda | CoreA | A24',
// 'Lambda | CoreA | A25',
// 'Lambda | CoreC | C4',
// 'Indice | Session | Default Storage',
// 'Indice | Session | Default Security']
function main(inputArr) {
    systemComponents(inputArr);
}

function systemComponents(inputArr) {
    let systemsMap = new Map();
    for (let line of inputArr) {
        let tokens = line.split(/\s*\|\s*/);
        let system = tokens[0];
        let component = tokens[1];
        let subcomponent = tokens[2];
        if (!systemsMap.has(system)) {
            systemsMap.set(system, new Map());//subMap created for another layer of key value pairs (component:subcomponent)
        }
        if (!systemsMap.get(system).has(component)) {
            systemsMap.get(system).set(component, []);//value of component is an array of subcomponents
        }
        systemsMap.get(system).get(component).push(subcomponent);//fills the Map with key value pairs
    }
    let systemsSortedArr = Array.from(systemsMap.keys()).sort((s1, s2) => sortSystems(s1, s2));
    for (let system of systemsSortedArr) {
        console.log(system);//console.logs the system
        
        let componentsSortedArr = Array.from(systemsMap.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));
        for (let component of componentsSortedArr) {
            console.log(`|||${component}`);//console.logs the components
            systemsMap.get(system).get(component).forEach(sc => console.log(`||||||${sc}`));//console.log the subcomponents
        }
    }

    function sortSystems(s1, s2) {
        if (systemsMap.get(s1).size != systemsMap.get(s2).size) {
            return systemsMap.get(s2).size - systemsMap.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function sortComponents(system, c1, c2) {
        return systemsMap.get(system).get(c2).length - systemsMap.get(system).get(c1).length;
    }
}
main(
['KLLS | Main Site | Home Page',
'KLLS | Main Site | Login Page',
'KLLS | Main Site | Register Page',
'KLLS | Populi Site | Login Page',
'KLLS | Populi Site | Submission Page',
'Lambda | CoreA | A23',
'KLLS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
);
/*

KLLS
|||Main Site
||||||Home Page
||||||Login Page
||||||Register Page
|||Populi Site
||||||Login Page
||||||Submission Page
|||Digital Site
||||||Login Page
Lambda
|||CoreA
||||||A23
||||||A24
||||||A25
|||CoreB
||||||B24
|||CoreC
||||||C4
Indice
|||Session
||||||Default Storage
||||||Default Security
*/
// Hints
/*
Creating a sorting function with two criteria might seem a bit daunting at first, but it can be simplified to the
following:
o If elements a and b are different based on the first criteria, then that result is the result of the
sorting function, checking the second criteria is not required.
o If elements a and b are equal based on the first criteria, then the result of comparing a and b on the
second criteria are the result of the sorting.
*/
