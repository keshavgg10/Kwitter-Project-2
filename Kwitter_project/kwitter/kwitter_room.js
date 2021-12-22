
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCIl5xuKwGktVznG7DKoKK_a84DET_ewjE",
      authDomain: "kwitter-project-e7802.firebaseapp.com",
      databaseURL: "https://kwitter-project-e7802-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-e7802",
      storageBucket: "kwitter-project-e7802.appspot.com",
      messagingSenderId: "454393578176",
      appId: "1:454393578176:web:8d6ba22e6c2a6189502325"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
