// Adding the logic to get data
function search() {
    //logic to fetch the data
    const url ="https://jsonplaceholder.typicode.com/users";

    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((users)=>{
        // console.table(users);
        getData(users);
    })
    .catch((err)=>{
        console.log(err);
    });
}


//logic to display data
function getData(users){
// Take a hold over div contains userid

let userDiv = document.querySelector("#users");
userDiv.innerHTML ="";

//create table element and append data to div

let table=document.createElement("table");
users.forEach((user)=>{
    //create a row

    let row = table.insertRow();
    //create a cell and append data to row
    let name = row.insertCell();
    name.innerHTML =user.name;

    let city = row.insertCell();
    city.innerHTML =user.address.city;

    let email = row.insertCell();
    email.innerHTML = user.email;

    let phone = row.insertCell();
    phone.innerHTML=user.phone;
})

//to append user table data to targeted div userDiv
userDiv.appendChild(table);

}