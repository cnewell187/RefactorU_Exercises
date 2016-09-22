function launchRocket(){
    var rocket = document.createElement('img');
    rocket.src = "http://thumb7.shutterstock.com/photos/thumb_large/773638/166888049.jpg";
    
    rocket.classList.add("rocketship")
    
    rocket.style.height = "50px";
    rocket.style.width = "50px";
    
    var launchPad = document.getElementById("launchPad"); 
    document.body.insertBefore(rocket, launchPad);
    
    var id = setInterval(shoot, 10);
    function shoot(){
        
    }
}