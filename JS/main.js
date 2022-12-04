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




      let workEx = [
        {
          title: "Для фриланjkljlса",
          content: "Быстрый поиск работы",
          img: "images/ex_2.png"
        },
        {
            title: "Для архитекторов",
            content: "Быстрая обработка чертежей",
            img: "images/ex_1.png"
        },
        {
            title: "Для фриланса3",
            content: "Быстрый поиск работы3",
            img: "images/ex_1.png"        }
      ];

      let exCardL = document.querySelector('.ex_1');
      let exImg = exCardL.querySelector('.img_1');
      let exDescription = exCardL.querySelector('.extext_2');
      let exTitle = exCardL.querySelector('.extext');

      exTitle.textContent = workEx[0].title;
      exImg.src = workEx[0].img;
      exDescription.textContent = workEx[0].content;
 

      let exCardR = document.querySelector('.ex_2');
      let exImgR = exCardR.querySelector('.img_1');
      let exDescriptionR = exCardR.querySelector('.extext_2');
      let exTitleR = exCardR.querySelector('.extext');

      exTitleR.textContent = workEx[1].title;
      exImgR.src = workEx[1].img;
      exDescriptionR.textContent = workEx[1].content;
      