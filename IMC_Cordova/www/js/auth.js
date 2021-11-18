localStorage.setItem('name', null);
localStorage.setItem('email', null);
localStorage.setItem('phone', null);
localStorage.setItem('password', null);
localStorage.setItem('height', null);
localStorage.setItem('weight', null);

var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("login").addEventListener("click",app.auth);
    },

    auth: function(){
        event.preventDefault();

        let cemail = document.getElementById("email").value;
        let cpassword = document.getElementById("password").value;

        var db = firebase.firestore();
        var ag = db.collection("user").where("email", "==", cemail).where("password", "==", cpassword);

        ag.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                localStorage.setItem('name', doc.data().name);
                localStorage.setItem('email', doc.data().email);
                localStorage.setItem('phone', doc.data().phone);
                localStorage.setItem('password', doc.data().password);
                localStorage.setItem('height', doc.data().height);
                localStorage.setItem('weight', doc.data().weight);
            });
            
            document.getElementById("box-loader").classList.remove("d-none")

            setTimeout(function() {
                window.location.href = cordova.file.applicationDirectory + "www/imc.html";
            }, 2500)
        })
        .catch((error) => {
            console.log("E-mail não existe: " + error);
        });
    }

};

app.initialize();