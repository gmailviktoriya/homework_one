
let data = {
    "Главная": {
    },
    "Обо мне": {
    },
    "Портфолио": {
    },
    "Блог": {
    },
    "Контакты": {
    },
};

function createTree(container, obj) {
    container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
    // если нет дочерних элементов, то вызов возвращает undefined
    // и элемент <ul> не будет создан
    if (!Object.keys(obj).length) return;

    let ul = document.createElement('ul');
    ul.classList.add('header-article__list');
    for (let key in obj) {
        let li = document.createElement('li');
        li.classList.add('header-article__item');
        li.innerHTML = key;

        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
            li.append(childrenUl);
        }

        ul.append(li);
    }

    return ul;
}

let container = document.querySelector('.header-articles');
createTree(container, data);
container.classList.add('header-articles_grey');


let h1 = document.createElement('h1');
h1.className = "header-article_title";
h1.innerHTML = "Сайт визитка";
//document.body.append(h1);
container.after(h1); 

let articleAdd = document.createElement('article');
articleAdd.classList.add('about-article');
let article = document.querySelector('.section-about');
article.prepend(articleAdd);

let h2 = document.createElement('h2');
h2.className = "about-article_title";
let articleName = document.querySelector('.about-article');
h2.innerHTML = "О себе";
articleName.prepend(h2);

let p = document.createElement('p');
p.innerHTML = "Меня зовут Толокольникова Виктория Федоровна. Родилась я 26 мая, в городе Северодонецке. Закончила СШ №10. Получила высшее экономическое образование в Институте им. Даля. После изучала Дизайн компьютерной графики  в копьютерной академии ШАГ г.Луганск. Семейное положение: замужем. У меня двое сыновей: Арсений (11лет) и Савелий (1,3 годиков). Наша семья любит путешествовать, открывать для себя что-то новое.";
articleName.prepend(p);

let articleAdd1 = document.createElement('article');
articleAdd1.classList.add('about-article1');
articleAdd1.classList.add('about-article');
let article1 = document.querySelector('.section-about');
article1.prepend(articleAdd1);

let h21 = document.createElement('h2');
h21.className = "about-article_title";
let articleName1 = document.querySelector('.about-article1');
h21.innerHTML = "Резюме";
articleName1.prepend(h21);

let p1 = document.createElement('p');
p1.innerHTML = "Опыт трудовой деятельности С января 2007 – октябрь 2008, дизайнер , ЧП «Партнер». г. Северодонецк. Сфера деятельности: полиграфия. Должностные обязанности набор бланков, изготовление визиток, брошюр, верстка газеты, рекламные  буклеты. С апреля 2012 года  – верстка сайтов FreeLancer. C  декабря 2012 года по май 2012 года- HTML-верстальщик в веб-студии.С мая 2012 года по 2018 год - 3D Modeler в компании Bestway.";
articleName1.prepend(p1);

// var image = new Image(250, 320);
// image.onload = function() {
    

// };
// image.src = 'assete/image/im1a.jpg';


function getImages(n){
    for( var image, array = [], i = 1; i <= n; i++ ){
      image = new Image(250, 320);
      //image.src = '/images/im1a.jpg';
      image.src = "/images/" + i + ".jpg";
      array.push( image );
    
     // document.body.append(array[0, 1, 2, 3]);
    };
    return array;
  };
  let imgConteiner = document.querySelector('.section-portfolio');
  //imgConteiner.append(image);
 // document.body.append(image);
console.log('image')
