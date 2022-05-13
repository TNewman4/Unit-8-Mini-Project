let comedy =["https://upload.wikimedia.org/wikipedia/en/c/c0/Despicable_Me_%282010_animated_feature_film%29.jpg","https://resizing.flixster.com/drrcA4lAlzLE3OQyutC7sVHOBVY=/206x305/v2/https://flxt.tmsimg.com/assets/p192248_p_v8_am.jpg" ];

let action =["https://target.scene7.com/is/image/Target/GUEST_668ea886-337d-4840-b4d8-ff81f62a8540?wid=488&hei=488&fmt=pjpeg","https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1526580986/deadpool2-poster-flash-xxl_ixmzsw.jpg"];

let drama = ["https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/05/IMG_3693-482x715.jpeg","https://lumiere-a.akamaihd.net/v1/images/p_theoddlifeoftimothygreen_19880_cc46bb62.jpeg"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
    //Task Two 
    if (genreInput === "action") {
    for(let actionV of action) {
    $(".shows").append("<img src=" + actionV + ">");    
    }
    }
        if (genreInput === "drama") {
    for(let dramaV of drama) {
    $(".shows").append("<img src=" + dramaV + ">");    
    }
    }
            if (genreInput === "comedy") {
    for(let comedyV of comedy) {
    $(".shows").append("<img src=" + comedyV + ">");    
    }
    }
       
    
});

$(".suggestion-button").click(function() {
    let suggestion = $(".give-suggestions").val();
    action.push(suggestion);
    for (let actionVarible of action) {
        console.log(actionVarible);
    }
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
    $(".shows").append("<img src=" + suggestion + ">");
});