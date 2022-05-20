const switchLights = (e) => {

    const imgStop = document.querySelectorAll('.stoplight');
    const imgWalk = document.querySelectorAll('.walklight');



    //console.log(imgStop);
    const timeOut2 = () => {
        setTimeout(() => {
            imgStop[0].classList.replace('light_off', 'light_on');
            imgStop[1].classList.replace('light_on', 'light_off');

            imgWalk[0].classList.replace('light_on', 'light_off');
            imgWalk[1].classList.replace('light_off', 'light_on');
        }, 5000)
    }



    const timeOut1 = () => {

        setTimeout(() => {
            imgStop[0].classList.replace('light_on', 'light_off');
            imgStop[1].classList.replace('light_off', 'light_on');


            imgWalk[0].classList.replace('light_off', 'light_on');
            imgWalk[1].classList.replace('light_on', 'light_off');
            timeOut2();

        }, 1.0 * 3000);



    }


    timeOut1();


}


const switchButton = document.querySelector('.switch');

switchButton.addEventListener('click', switchLights);

const counter = document.querySelector('.lightCounter');