"use strict"
"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
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
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  
  if(searchResults.length === 1) {
      mainMenu(searchResults[0], people);
  }
  else{
    prompt("No Results or Multiple Results");
    //read out all results
    alertPeople(searchResults);
  }
}     

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      caseInfo(person);
      return mainMenu(person, people);
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
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

// function searchByinfo(people){
// let searchInfo = prompt("Do you know their 'id', 'gender', 'height', 'weight', 'eyeColor', 'currentSpouse','family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
// // to search by info
//   switch(searchInfo){
//     case "id":
//       caseInfo(personInfo.id);
//       return mainMenu(person, people);
//     // TODO: get person's info
//     break;
//     case "gender":
//     // TODO: get person's family
//     break;
//     case "height":
//     // TODO: get person's descendants
//     break;
//     case "weight":
//     app(people); // restart
//     break;
//     case "quit":
//     return; // stop execution
//     default:
//     return mainMenu(person, people); // ask again
//   }
// }
function searchByParents(people){
  let parents = prompt("Identify this persons's 'parents'?");
  let foundPerson = people.filter(function(person){
    if(person.parents >= parseInt(parents)){
      return true;
    }
    else{
      return mainMenu(person, people);
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

function searchBySpouse(people){
  let currentSpouse = promptFor("Who is the person's 'currentSpouse'?", chars);
  let foundPerson = people.filter(function(person){
    if(person.currentSpouse === parseInt(currentSpouse)){
      return true;
    }
    else{
      return mainMenu(person, people);
    }
  })
  // TODO: find the person using the spouse they entered
  return foundPerson;
}

// WONT KEEP!! HOLDING SPOT FOR SEARCH TIM IS CREATING!! INFO SEARCH!!
function searchByInfo(people){
  let id = promptFor("What is the person's 'id'?", chars);
  let foundPerson = people.filter(function(person){
    if(person.id === parseInt(id)){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// use id to search
function searchById(people){
  let id = promptFor("What is the person's 'id'?", chars);
  let foundPerson = people.filter(function(person){
    if(person.id === parseInt(id)){
      return true;
    }
    else{
      return mainMenu(person, people);
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}
function alertPeople(searchedpeople){
  searchedpeople.map(person =>{
    caseInfo(person);
  });
}

function caseInfo(personInfo){
    alert("info:"
    + "\n id: " + personInfo.id
    + "\n firstName: " + personInfo.firstName
    + "\n lastName: " + personInfo.lastName
    + "\n gender: " + personInfo.gender
    + "\n height: " + personInfo.height
    + "\n weight: " + personInfo.weight
    + "\n eyeColor: " + personInfo.eyeColor
    + "\n currentSpouse: " + personInfo.currentSpouse
    + "\n parents: " + personInfo.parents
    + "\n occupation: " + personInfo.occupation
    + "\n dob: " + personInfo.dob);
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return mainMenu(person, people);
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo = "id: " + person.Id + "\n";
  personInfo = "gender: " + person.Gender + "\n";
  personInfo += "height: " + person.Height + "\n";
  personInfo += "weight: " + person.Weight + "\n";
  personInfo += "eyeColor: " + person.eyeColor + "\n";
  personInfo = "currentSpouse: " +person.currentSpouse + "\n";
  personInfo += "parents: " + person.Parents + "\n";
  personInfo += "occupation: " + person.Occupation + "\n";
  personInfo += "dob: " + person.Dob + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
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
// }