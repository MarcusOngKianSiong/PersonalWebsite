let categories = ['01 Introduction','02 Performance','03 Technology components','04 Contact'];
let section_indicator = document.querySelector('.section_indicator');

let intro = document.querySelector('#intro');

document.addEventListener('scroll',()=>{
    let distance = intro.getBoundingClientRect()
    console.log(distance.top)
    if (distance.top<=-2725){
        section_indicator.textContent = categories[3];
        return;
    }
    if (distance.top>=-2417 && distance.top<-1252){
        section_indicator.textContent = categories[2];
        return;
    }

    if (distance.top<=-387 && distance.top>=-1000){
        section_indicator.textContent = categories[1];
        return;
    }

    if (distance.top<=1 && distance.top>=-169){
        section_indicator.textContent = categories[0];
        return;
    }

    return;

});

