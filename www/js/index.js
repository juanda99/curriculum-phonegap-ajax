document.addEventListener('deviceReady', onDeviceReady, false);
document.addEventListener('volumedownbutton', bajarVolumen, false);
document.addEventListener('volumeupbutton', subirVolumen, false);
function onDeviceReady () {
    document.getElementById('btnAgenda').addEventListener('click', addContact, false);
}
function bajarVolumen() {
    alert ('He bajado el volumen');
    console.log ('He bajado el volumen');
}
function subirVolumen(){
    alert('He subido el volumen');
    console.log('He subido el volumen');
}

function onSuccess(contact) {
    alert("Se ha guardado el contacto");
};
function onError(contactError) {
    alert("Error = " + contactError.code);
};
function addContact() {
    alert ("Añadiendo contacto");
    // create a new contact object
    var contact = navigator.contacts.corcreate();
    contact.displayName = "Lionel Messi";
    contact.nickname = "Messi";
    // telefonos de contacto
    var phoneNumbers = [];
    phoneNumbers[0] = new ContactField('work', '768-555-1234', false);
    phoneNumbers[1] = new ContactField('mobile', '999-555-5432', true); // preferred number
    phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
    contact.phoneNumbers = phoncor
    // emails
    var emails = [];
    emails[0] = new ContactField('Trabajo', 'asdf@adsf.com', false);
    emails[1] = new ContactField('Personal', 'asdfg@asdf.com', true); // preferred number
    contact.emails = emails;
    // Nombre del contacto
    var name = new ContactName();
    name.givenName = "Lionel";
    name.familyName = "Messi";
    contact.name = name;
    // guardamos
    contact.save(onSuccess,onError);
}



/*
$("#frmContactar").click(function (e) { 
    e.preventDefault();
    var nombre = $("#nombre").val()
    var telefono = $("#telefono").val()
    var email = $("#email").val()
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/mensajes",
        data: {"nombre": nombre, "telefono": telefono, "email": email},
        dataType: "json",
        success: function (response) {
            window.location("./gracias.html")
        },
        error: function{
            window.location("./error.html")
        }
    });
});
*/



$("#btnViewContactar").click(function (e) { 
    e.preventDefault();
    alert("cargando datos...")
    $("#vista").load("./contactar.html");
    $(".nav li").removeClass("active");
    $("#btnViewContactar").addClass("active");
});