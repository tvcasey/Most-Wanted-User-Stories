// Most-Wanted-User-Stories.
// Tim Casey
// Ramon Bolds


"use strict"

function promptFor(question, valid){

  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

  function yesNo(input){
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
  

  }
  function app(people){
    let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
    let searchResults;
    switch(searchType){
      case 'yes':
        searchResults = searchByName(people);
        break;
      case 'no':
       let searchUserId = prompt("Would you like to search by 'id'? Enter 'yes' or 'no'");
       switch (searchUserId) {
         case 'yes': 
           searchResults = searchById(people);
           break;
           case 'no':
           let searchUserInfo = prompt("Would you like to search by 'info'? Enter 'yes' or 'no'");
           switch (searchUserInfo){ 
           case 'yes':
           searchResults = searchByinfo(people);
          // TODO: search by traits
           break;
           case 'no':
             let searchUserSpouse = prompt("Would you like to search by 'spouse'? Enter 'yes or 'no'");
            switch(searchUserSpouse){
              case 'yes':
                searchResults = searchBySpouse(people);
                break;
                case 'no':
                  let searchUserParents = prompt("Would you like to search by 'parents'? Enter 'yes' or 'no'");
                  switch(searchUserParents){
                    case 'yes':
                      searchResults = searchByParents(people);
                      break;
                  }
            }
            }    
            }
        break;
        default:
      app(people); // restart app
        break;
    }
  let searchInfo = prompt("Would you like to search by 'id'? Enter 'yes' or 'no'");

     switch(searchInfo){
       case 'yes': 
         searchResults = searchById(people);
         break;
       default:
         searchResults = searchByInfo(people);
         break;
  }
}  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  let searchResults;
   if(searchResults === 1) {
    //mainMenu(searchResults[0], people);
  }
     else{
      }
      
      

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'", chars);

  switch(displayOption){
    case "info":
      caseInfo(person);
      mainMenu(person, people);
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":

    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
   // return; // stop execution
    default:
    mainMenu(person, people); // ask again
  }
}
let personInfo = {
  id: "personInfo.id",
  firstName: "personInfo.firstName",
  lastName: "personInfo.lastName",
  gender: "personInfo.gender",
  height: "personInfo.height",
  weight: "personInfo.weight",
  eyeColor: "personInfo.eyeColor",
  currentSpouse: "personInfo.currentSpouse"
};


function searchByInfo(people, oldPeople){

  let searchInfo = prompt("Do you know their 'id', 'gender', 'height', 'weight', 'eyeColor'? Type the option you want or 'restart' or 'quit'");
  let foundPeople;

  switch(searchInfo){
    case "id":
      foundPeople = searchById(people);
    break;
    case "gender":
      foundPeople = searchByGender(people);
    break;
    case "height":
      foundPeople = searchByHeight(people);
    break;
    case "weight":
      foundPeople = searchByWeight(people);
    break;
    case "eyeColor":
      foundPeople = searchByEyeColor(people);
    break;
    case "restart":
      if (oldPeople === null) {
        
        app(people);
      }
      else{
        app(oldPeople);
      }
    break;
    case "quit":
      return people;
    break;
    default:
    break;
  
  }
  return searchByInfo(foundPeople, oldPeople);
}

function searchById(people){



let id = promptFor("What is the person's 'id'?", chars);
  

let foundPeople = people.filter(function(person){
    if(person.id === parseInt(id)){
      return true;
    }
    else{
      return false;
    }
  });

  return foundPeople;
  
}


function searchByGender(people){

  let gender = promptFor("Please enter the person's gender.", chars);


    let foundPeople = people.filter(function(person){
    
    if(person.gender === gender){
      return true;
    }
    else{
      return false;
    }  
    return foundPeople;
});
}

  
function searchByHeight(people){
  
  let height = promptFor("Please enter the person's height.", chars);
  
  let foundPeople = people.filter(function(person){
        
    if(person.height === height){
  
          return true;
        }
  
        
        else{

        }
  
          return false;
      });
      return foundPeople;
    }
  
      

function searchByWeight(people){

  let weight = promptFor("Please enter the person's weight in pounds.", chars);
      
  let foundPeople = people.filter(function(person){
    if(person.weight === weight){
    
    return true;
    }
    
    else{
    
    return false;
    }
    
  });
  foundPeople = false;
}
    
      
      
function searchByEyeColor(people){

  let eyeColor = promptFor("Please enter the person's height in (feet, inches)?", chars);
      
  let foundPeole = people.filter(function(person){
    if(person.eyeColor === eyeColor){
      
    return true;
    }
      
    else{
      
    return false;
    }
    });
    foundPeople = false;

  }  
//const testTest = Object.entries(people);
//
//      testTest.forEach(([key, value]) => {
//        console.log(key); // left side
//        console.log(value); 
    

function caseInfo(personInfo){

    alert("info:"
    + "\n id: " + personInfo.id
    + "\n firstName: " + personInfo.firstName
    + "\n lastName: " + personInfo.lastName
    + "\n gender: " + personInfo.gender
    + "\n height: " + personInfo.height
    + "\n weight: " + personInfo.weight
    + "\n eyeColor: " + personInfo.eyeColor
    + "\n currentSpouse: " + personInfo.currentSpouse);
}


function searchByName(people){

  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){


    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  
  });
  // TODO: find the person using the name they entered
  return foundPerson;
}


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    displayPerson(person);
  }));
}



function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo = "id: " + person.Id + "\n";
  personInfo += "gender" + person.gender + "\n";
  personInfo += "height" + person.height + "\n";
  personInfo += "weight" + person.weight + "\n";
  personInfo += "eyeColor" + person.eyeColor + "\n";
  personInfo = "currentSpouse" +person.currentSpouse + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}




// helper function to pass in as default promptFor validation
function chars(input){

  return true; // default validation only
}


// /*  Most Wanted User Stories 100 points
// Goal: You have been contracted to build a prototype for a person search for a
// top-secret government project. You have been given access to an array of
// objects representing individuals. The prototype should just use window.prompt
// and window.alert for the User Interface (UI). All results should be printed
// through the window.alert and window.prompt. Although this isn’t typical in
// production, you may use only two files for this project, an HTML file and a
// JS file for the application.


// Technologies: JavaScript
// User stories:

// (5 points): As a developer, I want to make consistent commits with good, descriptive messages.*/


// /*
// (5 points): As a developer, I want to run validation on any user input,
// 			ensuring that a user is re- prompted when they provide invalid input.*/



// /*
// (10 points): As a user, I want to be able to search for someone based on a single
// 			 criterion. (You should be able to find and return a list of people
// 			 who match the search)*/


// /*
// (20 points): As a user, I want to be able to search for someone based on
// 			 2-5 criteria. (I.e if you search for Gender: male and Eye
// 			 Color: blue, you should get back a list of people who match the search)*/



// /*
// (15 points): As a user, I want to be able to look up someone’s information
// 			 after I find them with the program (display values for the
// 			 various traits of the found person).*/



// /*
// (25 points): As a user, I want to be able look up someone’s descendants after I
// 			 find them with the program (display the names of the descendants),
// 			 using recursion.*/



// /*
// (20 points): As a user, I want to be able look up someone’s immediate family
// 			 members after I find them with the program (display the names of
// 			 the family members and their relation to the found person. Parents,
//        spouse, and siblings)*/





//https://www.samanthaming.com/tidbits/76-converting-object-to-array/  Important to figure out array from objects.


