let popupBg = document.querySelector('.popup__bg'); 
let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.open-popup'); 
let closePopupButton = document.querySelector('.close-popup'); 
let closeButton = document.querySelector('.close-button'); 

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup.classList.add('active'); 
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
});

closeButton.addEventListener('click',() => {
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
});
   
closeButton.addEventListener( 'click', function (event) {
      alert( 'Вы подписались' );
    } );
