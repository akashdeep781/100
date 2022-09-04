
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBN_AJQms7-eqdE95V1SS-VBOiblLCgHtQ",
      authDomain: "lets-chat-365eb.firebaseapp.com",
      projectId: "lets-chat-365eb",
      storageBucket: "lets-chat-365eb.appspot.com",
      messagingSenderId: "1040925349161",
      appId: "1:1040925349161:web:655f158c9041aaad0a1338"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
