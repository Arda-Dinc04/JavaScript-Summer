/* Arda Dinc 
   8/1/2022
   Carousel Animation
The program is a slider for the images at the bottom, you use the right and left buttons to slide between the images
If you click on one of the images on the bottom the top enlarged image will be switched out with the one you clicked

*/ 

$(document).ready(function() {
   
    var slider = $("#image_list");                  
    var leftProperty, newleftProperty;
       
    // event handler for right button                   
    $("#right_button").click(function() { 
       leftProperty = parseInt(slider.css("left"));
       if (leftProperty - 300 <= -900) {    //  new value for left property
          newLeftProperty = 0; }
       else {
          newLeftProperty = leftProperty - 300; }
       
       slider.animate( {left: newLeftProperty}, 1000); // animate function changes left
    });  
    
    // event handler for left button       
    $("#left_button").click(function() {
       leftProperty = parseInt(slider.css("left"));
       if (leftProperty < 0) {//  new value for right property
          newLeftProperty = leftProperty + 300;
       }
       else {
          newLeftProperty = 0;
       }
       slider.animate( {left: newLeftProperty}, 1000);    // animate function changes left         
    });  
                   
                   
     //Display an the large image 
     $("image_list a").click(function(evt){
                                                              
                             
          evt.preventDefault();
     });

     $("#image_list a").click(function(evt){
        var img = $(this).find("img");
        var img_src = img.attr("src");
        
        $("#image").animate({ opacity: 0, marginLeft: "-=205" }, 1000,

        function() {
        $("#image").attr("src",img_src);
        $("#image").animate({opacity:1, marginLeft: "+=205"}, 1000, function(){});
        }
        
        );
        evt.preventDefault();
        });
 }); 

 