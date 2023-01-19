const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    const toggleButtons = document.querySelectorAll('#toggleButton');

    for(let toggleButton of toggleButtons){
        toggleButton.addEventListener('click', event=>{
            event.preventDefault();

            toggleButton.previousElementSibling.classList.toggle("hide")
            if(toggleButton.previousElementSibling.classList.contains('hide')){
                toggleButton.text = 'Show more';
            }else{
                toggleButton.text = 'Show less';
            }

        })
    }

   
});