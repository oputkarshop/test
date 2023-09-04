import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB1We9rodUQSD0okPVYLTweO0FbZDpuJqk",
    authDomain: "construction-ease.firebaseapp.com",
    projectId: "construction-ease",
    storageBucket: "construction-ease.appspot.com",
    messagingSenderId: "573754796388",
    appId: "1:573754796388:web:e03a858c3f5908387fb271",
    measurementId: "G-N9LQXT5Q36"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);




// const contactButton = document.getElementsByClassName("contactbtn");
// const contactButtonclose = document.getElementById("contactbtnc");
// const cbox = document.getElementById("cbox");

// // function hideContactBox() {
// //   cbox.classList.add("cbox");
// // }

// // Add click event listener to the contact button
// contactButton.addEventListener("click", function (event) {
//   event.preventDefault(); // Prevent default link behavior

//   // Toggle the "cbox" class to show/hide the contact box
//   cbox.classList.toggle("cbox");
// });

// contactButtonclose.addEventListener("click", function (event) {
//   event.preventDefault(); // Prevent default link behavior

//   // Toggle the "cbox" class to show/hide the contact box
//   cbox.classList.toggle("cbox");
// });


// const otherButtons = document.querySelectorAll(".cbtn"); // Replace with your button class
// otherButtons.forEach(button => {
//   button.addEventListener("click", ()=>{
//     cbox.classList.toggle("cbox");

//   });
// });







