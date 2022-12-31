var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  for (let index = 0; index < anArray.length; index++) { //indice de cada fila
  for (let n = 0; n < anArray[index].lucky_numbers.length; n++) { //indice de cada columna
	
	sumOfAllLuckyNumbers += anArray[index].lucky_numbers[n]  
}
}

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here

function addFamilyMember(
    family,
    name,
    lastname,
    age,
    gender,
    lucky_numbers,
    significant_other
){
    var person3 = {
        name: name,
        lastname: lastname,
        age: age,
        gender: gender,
        lucky_numbers: lucky_numbers,
        significant_other: significant_other
    };
family.push(person3)

}

function changeLuckyNumber(pers,pos,num){

pers.lucky_numbers[pos]= num
}
changeLuckyNumber(person,3,33)

let jimmyNumbers = [1,2,3,4]

addFamilyMember(family.members,"Jimmy","Doe",13,"male",jimmyNumbers,null)

//console.log(family.members[2].lucky_numbers)

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 