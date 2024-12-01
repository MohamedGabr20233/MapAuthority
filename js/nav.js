//? calling elements

const boxNavPhone = document.getElementById('nav_phone-box');
const btnNavPhone = document.getElementById('nav_phone-btn');
const linksNavPhone = document.querySelectorAll('.nav_phone-links')

btnNavPhone.addEventListener('click', () => {
    boxNavPhone.classList.toggle('nav_height_animation');
    

    linksNavPhone.forEach((element) => {
      
        element.classList.toggle('nav_transform_animation');
       
    });
      console.log(linksNavPhone);
});
