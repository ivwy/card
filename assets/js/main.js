let list = document.querySelectorAll('.media li');
let bg = document.querySelector('.post');
list.forEach(elements => {
    elements.addEventListener('mouseenter', function(event){
        let color = event.target.getAttribute('data-color');
        bg.style.background = color;
    })
    elements.addEventListener('mouseleave', function(event){
        bg.style.transition = '.25s'
        bg.style.background = '#fff'
    })
})

function likeButton() {
    let heart = document.querySelector('.heart');
    let likes = document.querySelector('.likes');

    if(heart.src.match("h.png")) {
        heart.src = "./assets/images/h1.png";
        likes.innerHTML = "3,469 likes";
    } else {
        heart.src = "./assets/images/h.png";
        likes.innerHTML = "3,468 likes";
    }
}