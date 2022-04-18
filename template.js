let categories = ['01 Introduction','02 Performance','03 Technology components','04 Contact'];
let section_indicator = document.querySelector('.section_indicator');

let intro = document.querySelector('#intro');

// SECTION INDICATOR
document.addEventListener('scroll',()=>{
    let distance = intro.getBoundingClientRect()        // Check current distance of top view from the intro section
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


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

// Measurements -> A visual increase in the number
let measurements = document.querySelectorAll('.measurement');
let amount = [60,20,50];                                                        // Set the performance percentage
function gradual_display_number_increase(element,limit,counter,GradualSpeed,display=0){
    let interval = setInterval(()=>{
        // Change speed gradually
        if (counter!=500){
            counter+=GradualSpeed;
        }
        
        
        // display
        element.textContent = `${display}%`;
        display+=1;

        clearInterval(interval);

        if(display==limit){
            return "Limit reached"
        }

        gradual_display_number_increase(element,limit,counter,GradualSpeed,display)
    },counter);
}
document.addEventListener('scroll',()=>{
    let distance = intro.getBoundingClientRect();
    if (distance.top <= -750 && measurements[0].textContent == '0%'){
        gradual_display_number_increase(measurements[0],amount[0],10,1);
        gradual_display_number_increase(measurements[1],amount[1],10,1);
        gradual_display_number_increase(measurements[2],amount[2],10,1);
    }
})
