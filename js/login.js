$( () => {
    console.log("jquery initialised");

    const form= $("#login-form");
    const email= $("#exampleInputEmail1");
//    const pass= $("#exampleInputPassword1");
    const welcome= $("#exampleModalLongTitle");
    

    form.on("submit", event => {
        const user = email.val().split('@')[0];
        event.preventDefault();
        
        welcome.text(`Welcome ${user} !!!`);
        console.log(email.val());  
    })

    $("#close-modal").on("click", event => {
        window.location.href = "main.html";
    })

    
});
