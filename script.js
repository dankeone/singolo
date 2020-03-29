/*Header*/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

/*Slider*/
(function() {

    var doc = document,
        index = 1;

    var Slider = function() {
        this.box = doc.querySelector('.carousel-container');
        this.slidesBox = doc.querySelector('.carousel-slides');
        this.slides = doc.querySelectorAll('.slide');
        this.btns = doc.querySelectorAll('.btn');
        this.size = this.box.clientWidth;

        this.position();
        this.carousel();

    };

    Slider.prototype.position = function() {
        var size = this.size;
        this.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
    };

    Slider.prototype.carousel = function() {
        var i, max = this.btns.length,
            that = this;

        for (i = 0; i < max; i += 1) {
            that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
        }
    }

    Slider.prev = function(box) {
        box.slidesBox.style.transition = "transform .3s ease-in-out";
        var size = box.size;
        index <= 0 ? false : index--;
        box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        box.jump();
    };

    Slider.next = function(box) {
        box.slidesBox.style.transition = "transform .3s ease-in-out";
        var max = box.slides.length;
        var size = box.size;
        index >= max - 1 ? false : index++;
        box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        box.jump();
    };

    Slider.prototype.jump = function() {
        var that = this;
        var size = this.size;
        this.slidesBox.addEventListener('transitionend', function() {
            that.slides[index].id === "firstClone" ? index = 1 : index;
            that.slides[index].id === "lastClone" ? index = that.slides.length - 2 : index;
            that.slidesBox.style.transition = "none";
            that.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        });
    }


    new Slider();

})();
/*Portfolio*/
const images = document.querySelectorAll('#imgs img');
const all = document.getElementById('all');
const wd = document.getElementById('wd');
const graph = document.getElementById('graph');
const art = document.getElementById('art');
const portfolio_nav = document.getElementById("portf");

 const changePositions = aidi => {
    var positioningArr = [];
    switch (aidi) {
    case 'all':
        positioningArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        break;

    case 'wd':
        positioningArr = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        break;

    case 'graph':
        positioningArr = [2, 4, 6 ,8 ,10, 12, 1, 3, 5, 7, 9, 11];
        break;

    case 'art':
        positioningArr = [11, 9, 7, 3, 1, 2, 4, 6, 8, 12, 10];
        break;

    }
    images.forEach((img, i) => {
        img.setAttribute('style', `order: ${positioningArr[i]}`);
    });
}

[art, graph, wd, all].forEach((el) => {
    el.addEventListener('click', (e) => {
        changePositions(e.target.getAttribute('id'));
    });


});

portfolio_nav.addEventListener('click', (event) => {
    portfolio_nav.querySelectorAll('nav>a').forEach(el => el.classList.remove('active_nav'));
    event.target.classList.add('active_nav');
});

const img_border = document.querySelectorAll('#imgs img');

img_border.forEach((img) => {
    img.addEventListener('click', (event) => {
        if (event.target.classList == "img_border")
            img_border.forEach((el) => {
                el.classList.remove('img_border');
            });
        else {
            img_border.forEach((el) => {
                el.classList.remove('img_border');
            });
            event.target.classList.add('img_border');
        }
    });
});
