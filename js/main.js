//select the form
let form = document.getElementById("form");
console.log(form);

// api url
let apiUrl = "https://api.github.com/users";


// select the input
var searchValue = document.getElementById("UserName");

console.log(searchValue);

// a function to get all the users from github api


let getUsers = async (e) => {
     e.preventDefault();

     let user = searchValue.value.split('').join('');


     try{
       const response = await fetch(`${apiUrl}/${user}`);

       let data = await response.json()
       let displayArea = document.getElementById('users');

       displayArea.innerHTML = `
       <img src '${data.avatar_url}' alt= '${data.login}'/>
       <h1>${data.login}</h1>
       <h2>${data.type}<h2>
       <a href="${data.html_url}" target="_blank" class="btn btn-primary">View Profile</a>


       `


       console.log(data);

      



        }catch(error){
        console.log(error)
    };

    console.log(user);
     }



    


// adding an eventlistener to the form in order to submit the information in the input

form.addEventListener('submit', getUsers);

