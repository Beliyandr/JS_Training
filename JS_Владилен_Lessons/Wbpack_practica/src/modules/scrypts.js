window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  function productSliderWoo() {
    /* изменение свойств слайдера которые не поддаются изменениям в css */
    let psfrInner = document.querySelectorAll('.psfw-inner-wrap'), //каждый элемент слайдера (Product Slider For WooCommerce) 
      bxViewport = document.querySelectorAll('.bx-wrapper > .bx-viewport'), // Обертка слайдера 
      psfwImage = document.querySelectorAll('.psfw-inner-wrap .psfw-image'); // Обертка картинки слайдера


    for (let i = 0; i < bxViewport.length; i++) {

      bxViewport[i].style.height = "340px";
      bxViewport[i].style.width = "101%";
      bxViewport[i].style.border = "0px";
      bxViewport[i].classList.add("my-bx-viewport"); // добавление класса, для изменения объекта для телефона
    };



    for (let i = 0; i < psfrInner.length; i++) {

      psfwImage[i].style.padding = '5px';
      psfrInner[i].style.padding = '7px';

    }

  }

  /***********************************/
  /*Добавим затемнение при наведении на левое меню */

  function backgroundHoverLeftSidebar() {
    let backgroundGrey = document.createElement('div'), //создаю просто блок с классом "gray-background";
      afterContent = document.querySelector('#content'), // определяю место куда хочу его добавить
      verticalMenu = document.querySelector('#wpmm-wrap-vertical'); // при наведении на какой элемент будут производиться изменения

    backgroundGrey.className = "gray-background";
    afterContent.prepend(backgroundGrey);

    if (verticalMenu) {
      verticalMenu.addEventListener("mouseover", function () {
        backgroundGrey.style.display = "block";
        this.addEventListener("mouseout", function () {
          backgroundGrey.style.display = "none";
        });
      });
    }
  }
  /**/
  /***************************************************/


  /* В списке товаров при клике на корзину, и появлении просмотреть кортзину, цена должна приподняться на 30px   */

  // function priceUpAfterClick() { 
  //   let priceProducts = document 




  // }

  /* Удаляет виджет когда ширина меньше 992px и фильтр со странице одного товара  */
  function deleteWidgetInSingleProduct() {

    let bodyClass = document.querySelector('.single-product'),
      bodyClass2 = document.querySelector('.page-template-default'),
      secondary = document.querySelector('.widget-area'),
      primary = document.querySelector('#primary'),
      filters = document.querySelectorAll('.berocket_single_filter_widget'),
      flterLeft = document.querySelector('.filter'),
      maxWidht992 = window.matchMedia("(max-width: 992px)").matches;

    if (bodyClass || bodyClass2) {
      for (let i = 0; i < filters.length; i++) {
        filters[i].style.display = "none";
//         flterLeft.style.left = "0";
      }
    }
    if (bodyClass && maxWidht992) {
      secondary.style.display = "none";
    }
  }

  /*удлаяем сортировку внизу  */
  function deleteSortDown() {
    let sort = document.querySelectorAll('.storefront-sorting');
 		for (let i = 0; i < sort.length; i++) {
      	if (i !== 0) {
			sort[i].style.display = "none!important";
       	 sort[i].style.opacity = "0!important";
       	 sort[i].remove();
      }
    }
  }

  /* создание фильтра сбоку слева */

  function leftFilter() {
    let filter = document.createElement('div'), //создаю просто блок с классом "filter";
      a = document.createElement('a'),
      img = document.createElement('img'),
      afterContent = document.querySelector('#content'); // определяю место куда хочу его добавить
    a.setAttribute('href', '#');
    img.className = 'filter__img';
    img.setAttribute('src', 'https://svitlo-online.com.ua/wp-content/uploads/2020/07/arrow-1.png');
    a.textContent = "Фильтр";
    filter.className = "filter";
    afterContent.prepend(filter);

    filter.prepend(img);
    filter.prepend(a);
	  
  }

  /************************************************* */

  /* при клике на боковой фильтр, который появляется при 992px, открывается сам фильтр, т.е. переносится перечень фильтров в блок #secondary, а при закрытии все становится на свое место  */

  function showFilterMObile() {
// 	      let filter = document.createElement('div'), //создаю просто блок с классом "filter";
//       a = document.createElement('a'),
//       img = document.createElement('img'),
//       afterContent = document.querySelector('#content'); // определяю место куда хочу его добавить
//     a.setAttribute('href', '#');
//     img.className = 'filter__img';
//     img.setAttribute('src', 'https://svitlo-online.com.ua/wp-content/uploads/2020/07/arrow-1.png');
//     a.textContent = "Фильтр";
//     filter.className = "filter";
//     afterContent.prepend(filter);

//     filter.prepend(img);
//     filter.prepend(a);
	 
	  
	  
    let secondary = document.querySelector('#secondary'), // блок с виджетами(фильтрами)
      productFilter = document.querySelector('.bapf_sfilter'), //выборка из фильтра которая показывается и будет в начале фильтра
      productFilterBody = document.querySelector('.bapf_sfilter>.bapf_body'),
      testFilter = document.querySelector('#secondary>.berocket_single_filter_widget'),
      filterLeft = document.querySelector('.filter'),
      header = document.querySelector('.woocommerce-products-header'),
      bapfSfilter =  document.querySelectorAll('.bapf_sfilter'),
      body = document.querySelector('.page-template-default'),
//       close = document.createElement('div'), // крестик закрытия
	  closeSuccess = document.createElement('div'); //кнопка "применить фильтры"

    function bapfSfilters(){    // Удаляем все фильтры которые появляются там где не нужно
      for(var i = 0; i<bapfSfilter.length; i++){
        bapfSfilter[i].remove();
      }
    }

//     function regulatorWidth(){   // При изменении ширины в 992px убираем или добаляем боковой фильтр и перечень выюранного
//       if (testFilter && window.innerWidth < 992) {
//         /* если ширина меньше 992px и виджет с фильтрами присутсвует,  покзать боковой фильтр */
// //         filterLeft.style.left = '0';
// //         secondary.prepend(productFilter);
		  
  
//       } else if(testFilter && window.innerWidth > 992) {
// //         filterLeft.style.left = "-100%";
		  
// //         close.style.opacity = '0';
// // 		closeSuccess.style.opacity = '0';
// // 		  if(header){
// //       	header.append(productFilter);
// // 			  }
//       }
//     }
	  
	  
    if(body){
      filterLeft.style.left = "-100%";

      bapfSfilters();
    }else{

    if (testFilter && !document.querySelector('.popup__close_success')) {
      /*если крестик не создан , то создавать иначе не нужно */
//       close.className = "popup__close";
//       close.textContent = "Х";
//       productFilterBody.prepend(close);
	  closeSuccess.className = "popup__close_success";
      closeSuccess.textContent = "Применить фильтры";
		secondary.prepend(closeSuccess);
    }

//     regulatorWidth();


    filterLeft.addEventListener('click', function () {
      /* при клике на левый блок фильтра, показывается основной фильтр на всю ширину экрана */
      secondary.style.left = "0";
//       close.style.opacity = '1';
		closeSuccess.style.opacity = '1';
    secondary.prepend(productFilter);
    
//     regulatorWidth();

    });
		
	closeSuccess.addEventListener('click', function () {
      /** при клике на крестик, закрывается фильтр и кусочек кода(выборка фильтров ) возвращается на свое место */
      secondary.style.left = "-100%";
      header.append(productFilter);
//       close.style.opacity = '0';
		closeSuccess.style.opacity = '0';
//       regulatorWidth();
    });	
		
//     close.addEventListener('click', function () {
//       /** при клике на крестик, закрывается фильтр и кусочек кода(выборка фильтров ) возвращается на свое место */
//       secondary.style.left = "-100%";
//       header.append(productFilter);
//       close.style.opacity = '0';
// 		closeSuccess.style.opacity = '0';
//       regulatorWidth();
//     });

//     window.addEventListener('resize', showFilterMObile() ); /* Проверка размера ширины экрана для функции */
	
	
  }
	
	  
	    if (testFilter && window.innerWidth < 992) {
        /* если ширина меньше 992px и виджет с фильтрами присутсвует,  покзать боковой фильтр */
        filterLeft.style.left = '0';
        secondary.prepend(productFilter); 
  
      } else{
		  closeSuccess.style.opacity = '0';
	  }
      
	  
	  
	  		window.addEventListener("resize", function() {
    if (testFilter && window.matchMedia("(max-width: 992px)").matches) {
           filterLeft.style.left = '0';
		 secondary.prepend(productFilter);
    } else if(testFilter && window.matchMedia("(min-width: 992px)").matches) {
        filterLeft.style.left = "-100%";
		closeSuccess.style.opacity = '0';
		  if(header){
      	header.append(productFilter);
			  }
    }
});
}
/****************************************************************************************************************************************/
	
	
	/************************** */
// let title = document.querySelectorAll('span.wpmm-mega-menu-href-title');
// 	for (let i=0; i<title.lenth; i++){
// 		title[i].style.fontSize = "13";
// 	}
	
	/* *****************/
	
/****************************************************************/

	
	
	
/****************************************************************/
	
	
	
  deleteWidgetInSingleProduct();

  backgroundHoverLeftSidebar();

	leftFilter();
	
//   window.addEventListener('resize', showFilterMObile(), true);
showFilterMObile();

  deleteSortDown();
    
  productSliderWoo();

});



//* Липкоий Хэдер!!!!   * */

jQuery(document).ready(function($) {
  var
 
    $window = $(window), // Основное окно
 
    $target = $(".header_bg"), // Блок, который нужно фиксировать при прокрутке
 
    $h = $target.offset().top; // Определяем координаты верха нужного блока (например, с навигацией или виджетом, который надо фиксировать)
 
  $window.on('scroll', function() {
 
    // Как далеко вниз прокрутили страницу
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 
    // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
    if (scrollTop > 700 ) {
 
      $target.addClass("header_bg__fixed").slideDown(400);
 
    // Иначе возвращаем всё назад
    } else {     
 
      $target.removeClass("header_bg__fixed").slideUp(250);

    }
  });
 
});



/*
 * Если не хотите включать залипание для мобильных браузеров, вам пригодится такой код:
*/
