var app = {
        
  // Application Constructor
  initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function() {
      document.getElementById("btnInserir").addEventListener("click",app.inserir);
  },

  inserir: function(){
      event.preventDefault();
      
      let cname = document.getElementById("name").value;
      let cemail = document.getElementById("email").value;
      let cpassword = document.getElementById("password").value;
      let cphone = document.getElementById("phone").value;
      
      var db = firebase.firestore();

      db.collection("user").add({
          name: cname,
          email: cemail,
          password: cpassword,
          phone: cphone,
          height: "",
          weight: ""
      })
      .then((docRef) =>{
          window.location.href = cordova.file.applicationDirectory + "www/index.html";
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
  }
  
};

app.initialize();