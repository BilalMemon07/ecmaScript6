
///// Diffrence between let , cont , var    (Topic name)  

// // var name = "basit";
// // function foo(){
// //   name = "bilal";
// // }
// // foo()

// // console.log(name)

// // if(true){
// //    let  name = "bilal";
// // }
// // console.log(name)

// // 
// for(var i = 0; i<5; i++){
//     let pak = "basit"
// }
// console.log(pak)   


// function last(){

//     let lastname;
// }
// lastname= "salsal";
// last()
// console.log(lastname)

// let  firstName = 'Bilal'
// //let  firstName = 'mcimck'

// console.log(firstName )

// document.write('2'+ 'x' + 1 + '=' + 2*1      )

// let firstName = 'Muhammad'
// let lastName = 'Bilal'

// console.log(`My Name is ${firstName} ${lastName}`)














// spread oprators        (Topic name)

// var  student1 = ['bilal','Maroof']
// var  student2 = ['Ali','Basit']

// var marge = student1.concat(student2)
// console.log(marge)

//  var  student1 = ['bilal','Maroof']
//  var  student2 = [...student1, 'Ali','Basit']
// console.log(student2)


// Object DeStructuring         (Topic name)

// var Student = {
//     Name : "Bilal",
//     School :"Saylani",
//     Roll : 123
// }
//  let {Name,School,Roll}=Student

// console.log( Name)
// console.log( School)
// console.log( Roll)

// let obj ={
//     name : "bilal",
//     email : "Bilalmemon421@gmial.com"
// }

// let  name = obj.name
// console.log(name)


// Ternary Oprator          (Topic name)


// Basic java for practice  
//  var age = 20;

// if(age > 30){
//     console.log("30 se bara hai")
// }else{
//     console.log("30 se chota hai")
// }


// es6 if replace  ?"Ques mark"
// es6 else replace  : "Double doted"

// Ternary Oprator k andar ek or ternary oprator laga skty hain("else if" banjayga)

// var age = 20;

// var check =
// age > 30 ? "30 se bara hai" : "30 se chota hai"

// console.log(check)


// var bool = false;
// var name = bool && "bilal";
// console.log(name)

//    //    Async or sync     (Topic name)


// var name1;
// setTimeout(function()  {

//     name1 ="bilal Memon"

// }, 1000);


// console.log(name1)


//// promise Method(get data method)     (Topic name)

// var promise = new Promise(function(resolve,reject){
//   if(true){
//       setTimeout(()=>{

//           resolve("Its is Solve")
//       },5000)
//   }else{
//       reject("unsolved")
//   }
// })
// console.log(promise)

// promise.then(function(data){
// console.log("Data===>", data)
// })
// .catch(function(error){
//     console.log("error===>",error)
//     })







// var promise = new Promise(function(resolve,reject){

//     firebase.databse().ref("users").on("child_added",function(dara){
//         if(data.val()){
//            resolve(data.val()) 
//         }else{
//             reject("someThing went Wrong")
//         }
//     })
// })


// promise.then(function(data){
//     console.log(data)
// })

// .catch(function(err){
//     console.log(err)
// })

////   Arry  DeStructuring     (Topic name)

// let arr = ["pak", "ind", "sri"]
// let = [n1,n2,n3] = arr;
// console.log(n1)
// console.log(name2)
// console.log(name3)


/////   Functions Expressions     (Topic name)

// let foo = function(){
//     console.log("Hello world")
// }

// foo()

//// Arrow/fade arrow  Functions     (Topic name)
// =>.(this is arrow in ES6)

// function foo(){       (Normal function)

// }                          

// let foo = (name1,name2) => {
// console.log(`hello ${name1} and ${name2}`)
// }

// foo("bilal","maroof")

// ()=> "Ashraf Bhai"
// console.log("bilal memon")

//// arry functions       (Topic name)

// let arr = [{name:"bilal",age:20},{name:"basit",age:30}]

// let filter = arr.filter(a => a.age > 10 )


// console.log(filter)


//// Search        (Topic name)

// let name = "bilal"

// let search= "l"
// if (name.endsWith(search)){
//     console.log(name)
// }
// startsWith()  & endsWith()


////   Arry Maps       (Topic name) 

// let arr = [{name : "basit"}, {name1: "ghous"}]

// let multi = zee.map(a => a.name = "umair")
// console.log(multi)




//// ecamScript6 Classes     (Topic name)

//// constructur function   (normal java script)

// function Student(name, email){
//     this.name= name;
//     this.email=email; 
// }

// let student1 = new Student ("bilal","bilal@gmail.com")
// console.log(student1)

// class Student {
//     constructor(name, email){
//             this.name= name;
//             this.email= email   
//     }
// }
// //// merge two classes
// class School extends Student {
// constructor(name,email,school){
// super(name,email)
// this.school= school;
// }
// }

// let student1 = new School ( "bilal", "bila@gamil.com","saylani")
// console.log(student1)



//// API ....... example



// function getdata() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(function (result) {
//          example(result)

//         })
//         .catch(function (error) {
//             console.log("error-->", error)
//         })
// }

// getdata()


// function example(data){
//     console.log("data", data)
// }

//// signup with firebase auth


// let signup = () => {
//     let email = document.getElementById("email")
//     let password = document.getElementById("password")

//     firebase.auth().createUserWithEmailAndPassword(email.value, password.value)

//     .then((result) => {
//       console.log(result)
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorMessage)
//     });
// }
// //// login with firebase auth
// let login = ()=>{
//     let email = document.getElementById("login_email")
//     let password = document.getElementById("login_password")

//     firebase.auth().signInWithEmailAndPassword(email.value, password.value)
//     .then((result) => {

//       console.log ("user login successfuly")
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorMessage)
//     });
// }


const fb_login = () => {
  var provider = new firebase.auth.FacebookAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      window.location="home.html"
      // The signed-in user info.
      var user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var accessToken = credential.accessToken;
      console.log("user==>", user.displayName, user.email)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(error.message)
      // ...
    });

}

firebase.auth().signOut().then(() => {
  // Sign-out successful.
  window.location="login.html"
}).catch((error) => {
  // An error happened.
});