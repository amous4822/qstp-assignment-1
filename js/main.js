$(() => {
    
    console.log("working");

    $("#side-nav").on("click", event => {
        openNav();
    })

    $("#side-nav-close").on("click", event => {
        closeNav();
    })
    
    $("#itenary-add-button").on("click", event => {
        const listItem = $("#itenary"); 
        const itemDate = $("#itenary-date");
        const itemTime = $("#itenary-time");
        $("#itenary-list").append(`<li>${itemDate.val()+" : "+listItem.val()+" at "+itemTime.val()}<button>X</button></li>`);
        listItem.val(" ");
        itemDate.val(" ");
        itemTime.val(" ");
    })

    $("#itenary-list").on("click", "li button" ,(function (e) {
        $(this).parent().remove();
    }));

    $(".card-body").on("click", ".delete-card" ,(function (e) {
        console.log("parent clicked");
        $(this).parent().parent().parent().remove();
    }));

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    $("#image-preview").change(function(e) {

        for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
    
            var file = e.originalEvent.srcElement.files[i];
    
            var img = document.createElement("img");
            var reader = new FileReader();
            reader.onloadend = function() {
                img.id = "final-image"
                 img.src = reader.result;
                 img.width = 100;
                 
            }
            reader.readAsDataURL(file);
            const image = document.getElementById("final-image")
            if(image == null){
                $("#image-preview").after(img);
            } else {
                $("#final-image").replaceWith(img)
            }
        }
    });

    // $("image-preview").change(readURL(this));

    // function readURL(input) {
    //     console.log("inside");
    //     if (input.files && input.files[0]) {
            
    //         var reader = new FileReader();

    //         reader.onload = function (e) {
    //             $('#blah')
    //                 .attr('src', e.target.result)
    //                 .width(150)
    //                 .height(200);
                
    //         };
    //         // reader.onload = function (e) {
    //         //     $("image-preview").append(`<img src="${e.target.result}" width=50 height=100 alt="your image" />`)
    //         //     console.log(`<img src="${e.target.result}" width=50 height=100 alt="your image" />`)
    //         // };
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }



})