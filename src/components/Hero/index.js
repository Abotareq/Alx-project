document.addEventListener("DOMContentLoaded", function() {
    const images = ['s3-img.png', 's3-img1.png'];
    let current_index = 0;
    let interval;
    
    function updatePhoto(){
        document.getElementById("first-image").src = `./images/${images[current_index]}`;
    }
    function nextPhoto(){
        current_index = (current_index + 1) % images.length;
        updatePhoto();
    }
    function playSHow(){
        interval = setInterval(nextPhoto, 2000);
    }
    playSHow();
    let div = document.getElementById("mydiv");
    function hideContent(){
        div.style.display = 'none'
    }
    setInterval(hideContent, 3000)
    function showContent(){
        div.style.display = 'block';
    }
    setInterval(showContent, 3000);
    setInterval(hideContent, 5000)
});
    
    