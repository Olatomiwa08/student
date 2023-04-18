let profile = document.getElementById('profile');
let file = document.getElementById('file');

file.onchange = function(){
    profile.src =URL.createObjectURL(file.files[0]);
}

const student = {
    firstName : "",
    lastName : "",
    userName : "",
    regNum : "",
    avatar : "",
}
const image = document.createElement('img');
image.setAttribute('src','man.png')


function createStudent(){
    let firstName = prompt('Enter FirstName:');
    let lastName = prompt('Enter LastName: ');
    let userName = prompt('Enter UserName:');
    let regNum = Math.floor(Math.random() * 10000000000);
    
    student.firstName = firstName
    student.lastName = lastName
    student.userName = userName
    student.regNum = regNum;
    student.avatar = image;

    // let doc = document.getElementById('demo');
    document.getElementById('firstname').innerHTML += `<h3>${student.firstName}</h3>`;
    document.getElementById('lastname').innerHTML += `<h3>${student.lastName}</h3>`;
    document.getElementById('username').innerHTML += `<h3>${student.userName}</h3>`;
    document.getElementById('reg').innerHTML += `<h4>${student.regNum}</h4>`;
    doc.innerHTML += `<div>${student.avatar }<div>`;

    // document.body.append(image)
    

}

createStudent();



