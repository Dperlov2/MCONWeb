window.addEventListener("load", createLightbox);

function createLightbox(){
    //Lightbox Container
    let lightBox =document.getElementById("lightBox");

    //Parts of the lightbox
    let lbTitle = document.createElement("h1");
    let lbCounter = document.createElement("div");
    let lbPrev = document.createElement("div");
    let lbNext = document.createElement("div");
    let lbPlay = document.createElement("div");
    let lbImages = document.createElement("div");


    //Design the lightbox slide counter
    lightBox.appendChild(lbCounter);
    lbCounter.id = "lbCounter";
     let currentImg =1;
     lbCounter.textContent = currentImg + "/" + 1;

    //Design the lightbox previous slide button
    lightBox.appendChild(lbPrev);
    lbPrev.id = "lbPrev";
    lbPrev.textContent = "⬅️";
    lbPrev.onclick = showPrev;

    //Design the lightbox next slide button
    lightBox.appendChild(lbNext);
    lbNext.id = "lbNext";
    lbNext.textContent = "➡️";
    lbNext.onclick = showNext;

    //Design the ligthbox pause button
    lightBox.appendChild(lbPlay);
    lbPlay.id = "lbPlay";
    lbPlay.textContent = "▶️";
    let timeId; 
    lbPlay.onclick = function(){
        if(timeId){
            //Stop the slideshow
            window.clearInterval(timeId);
            timeId = undefined;
        } else {
            //Start the slideshow
            showNext();
            timeId = window.setInterval(showNext, 1500);
        }
           } 

    //Design the ligthbox images container
    lightBox.appendChild(lbImages);
    lbImages.id = "lbImages";

    let imageArray = ['pexels-birkaybolushikayesi-19283228.jpg', 'pexels-jonathan-borba-19014279.jpg', 'pexels-reinaldo-simoes-17990324.jpg', 'pexels-sherman-trotz-19112022.jpg', 'NiceWood.png', 'dupa.jpg', 'arc.jpg'];
    let totalImages = imageArray.length
    for (let i = 0; i<totalImages; i++){
        let img = document.createElement("img");
        img.src= imageArray[i];
        img.alt = 'elegant';
        lbImages.appendChild(img);
    }

    //Function to move forward through the image list
    function showNext(){
        lbImages.appendChild(lbImages.firstElementChild);
        (currentImg<imageArray.length)? currentImg++:currentImg=1;
        lbCounter.textContent = currentImg + " / " + imageArray.length
    }
    //function to move backward through the image list
    function showPrev(){
        lbImages.insertBefore(lbImages.lastElementChild, 
            lbImages.firstElementChild);
            (currentImg > 1)  ? currentImg-- : currentImg = imageArray.length;
            lbCounter.textContent = currentImg + " / " + imageArray.length;
    }
}