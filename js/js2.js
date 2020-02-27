//button collapse-expand 

let coll = document.querySelector('.portfolio-article_btn');
coll.onclick = function () {
    display = document.querySelector('.collapseexpand').style.display;
    if (display == "block") {
        document.querySelector('.collapseexpand').style.display = "none";
    } else {
        document.querySelector('.collapseexpand').style.display = "block";
    }
}

//плавная загрузка страницы

setTimeout(function(){
	document.body.classList.add('body_visible');
}, 200);

//slide

var showBtnPrev = document.querySelector('.button-prev');
var showBtnNext = document.querySelector('.button-next');
var slideImg = document.querySelector('.slide_img');

var curretImagesIndex = 0;
showBtnPrev.addEventListener('click', onshowPrevClick);
showBtnNext.addEventListener('click', onshowNextClick);

var imagesUrl = [];
//imagesUrl.push('images\im5.jpg'); 
imagesUrl.push('images/sl6.png');
imagesUrl.push('images/sl6.png');
imagesUrl.push('images/sl9.png');
imagesUrl.push('images/sl10.png');

slideImg.src = imagesUrl[curretImagesIndex];            
showBtnPrev.disabled = true;

function onshowPrevClick() {
    curretImagesIndex--;
    slideImg.src = imagesUrl[curretImagesIndex];
    showBtnNext.disabled = false;

    if (curretImagesIndex === 0) {
        showBtnPrev.disabled = true;
    }
}
function onshowNextClick() {
    curretImagesIndex++;
    slideImg.src = imagesUrl[curretImagesIndex];
    showBtnPrev.disabled = false;

    if (curretImagesIndex === (imagesUrl.length - 1)) {
        showBtnNext.disabled = true;
    }

}

//якорь (в меню Контакты)

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId ).scrollIntoView({
        behavior:'smooth',
        block: 'start'
        })

    })
}


