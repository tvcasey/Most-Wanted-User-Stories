"use strict"
"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
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
      break;
      default:
      break;
  }
  let searchInfo = prompt("Would you like to search by 'id'? Enter 'yes' or 'no'");

     switch(searchInfo){
       case 'yes': 
         searchResults = searchById(people);
         break;
       default:
         searchResults = searchByinfo(people);
        // TODO: search by traits
         break;
     
  //    break;
  //    default:
  //  app(people); // restart app
  //    break;
  }
}  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  let searchResults;
   if(searchResults === 1) {
    //mainMenu(searchResults[0], people);
  }
     else{
     // alert("multiple results");
    //  let foundPeople = searchByGender(people);
    //  const testTest = Object.entries(foundPeople);

      //testTest.forEach(([key, value]) => {
        //alert([key]);
        //alert([value]);
      //});
     // false;
      }
    //}
      
        
        //foundPeople = searchByGender(people));

    //read out all results
    

  




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
/*let personInfo = {
  id: "personInfo.id",
  firstName: "personInfo.firstName",
  lastName: "personInfo.lastName",
  gender: "personInfo.gender",
  height: "personInfo.height",
  weight: "personInfo.weight",
  eyeColor: "personInfo.eyeColor",
  currentSpouse: "personInfo.currentSpouse"
};*/


function searchByinfo(people){

  let searchInfo = prompt("Do you know their 'id', 'gender', 'height', 'weight', 'eyeColor'? Type the option you want or 'restart' or 'quit'");
  let foundPeople;
// to search by info
  switch(searchInfo){
    case "id":
      foundPeople = searchById(people);
      //caseInfo(person.id);
    //  return mainMenu(person, people);
    // TODO: get person's info
    break;
    case "gender":
      foundPeople = searchByGender(people);
    //caseInfo(personInfo.gender);
    //caseInfo(person.gender);
    //mainMenu(person, people);
    // TODO: get person's family
    break;
    case "height":
      foundPeople = searchByHeight(people);
    // caseInfo(person.height);
    // return mainMenu(person, people);
    // TODO: get person's descendants
    break;
    case "weight":
      foundPeople = searchByWeight(people);
      caseInfo(person.weight);
    //return mainMenu(person, people);
    break;
    case "eyeColor":
      foundPeople = searchByEyeColor(people);
      caseInfo(person.eyeColor)
    // return mainMenu(person, people);
    break;
    case "restart":
      app(people); // restart
    break;
    case "quit":
    break;
    //return; // stop execution
    default:
    break;
    //return mainMenu(person, people); // ask again
  }
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
  // TODO: find the person using the name they entered
  // return foundPerson;  Had a return issue during editing.  Do we use return?

function searchByGender(people){

  let gender = promptFor("Please enter the person's gender.", chars);


    let foundPeople = people.filter(function(person){
    
    if(person.gender === gender){
      return true;
    }
    
    else{
    //  alert("multiple results");  
    }  
    //return false;
  });
  //  alert("Gender Result: " + people.toSource(gender));
  //return foundPeople;


  //if(foundPeople > null){
  
     
    const testTest = Object.entries(foundPeople);
    alert(testTest);   
    
    //testTest.forEach(([key, value]) => {
        // alert(testTest.toString([key]));
        // alert(testTest.toString([value]));
        //  alert(testTest, key, value);

        let i = 0;
      for( i = 0; i < foundPeople.length; i++)
    {

      }    
        alert(testTest.join("\n"));

    //    }); 
      }
  
  
  
  
  
  
  
  //});
  //return foundPeople;
//}  
    //if(parseInt(foundPeople) > 1){
      
    //  alert("multiple results");
        
    //  const testTest = Object.entries(foundPeople);
  
     // else if(foundPeople)
     //   testTest.forEach(([key, value]) => {
    //    alert(key);
    //      alert(value);
    //    }); 
    //  }
    //}
      
  
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
//  Object.entries(people);
//  Object.values(people);
//  Object.keys(people);
//  These functions print to the console.log the elements of an object left being keys
//  right being their values.  Entries display both in a console.log array.
//  I have the working temporary code on line 60.  It is here toggled out.
//const testTest = Object.entries(people);
//
//      testTest.forEach(([key, value]) => {
//        console.log(key); // left side
//        console.log(value); 
//      });
    

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
  
    return person.firstName + " " + person.lastName;
  
      }));   //.join("\n"));
    }
function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo = "id: " + person.Id + "\n";
  personInfo += "gender" + person.Gender + "\n";
  personInfo += "height" + person.Height + "\n";
  personInfo += "weight" + person.Weight + "\n";
  personInfo += "eyeColor" + person.eyeColor + "\n";
  personInfo = "currentSpouse" +person.currentSpouse + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
//function promptFor(question, valid){
//
//  do{
//    var response = prompt(question).trim();
//  } while(!response || !valid(response));
//  return response;
//  }

// helper function to pass into promptFor to validate yes/no answers
//function yesNo(input){
//  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";


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


