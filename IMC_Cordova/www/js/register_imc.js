var app = {

  // Application Constructor
  initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function() {
      document.getElementById("gravar").addEventListener("click",app.editar);
  },

  editar: function(){
    event.preventDefault();
    let cheight = document.getElementById("height").value;
    let cweight = document.getElementById("weight").value;
    let cemail =  localStorage.getItem("email");
    let cpassword =  localStorage.getItem("password");

    var db = firebase.firestore();
    var ag = db.collection("user").where("email", "==", cemail).where("password", "==", cpassword);

    ag.get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var dados = db.collection("user").doc(doc.id);
            console.log(dados);
            return dados.update({
              height: cheight,
              weight: cweight
            })
            .then(() => {
              localStorage.setItem('height', cheight);
              localStorage.setItem('weight', cweight);

              document.getElementById("box-loader").classList.remove("d-none")

              setTimeout(function() {
                  window.location.href = cordova.file.applicationDirectory + "www/imc.html";
              }, 2500)
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

  }

};

app.initialize();