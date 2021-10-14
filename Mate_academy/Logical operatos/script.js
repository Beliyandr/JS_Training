'use strict';

/* Logical (||) - или   && - и   */
/*
console.log(
    true || true,
    true || false,
    false || true,
    false || false,

);

function or(a, b) {
    return a || b;
}
console.log(
    or(true, false),
    or(true, true),
    or(false, true),
    or(false, false),
);
*/


/*  Задача_1 ____
Владельцам Grand Mate Hotel нравятся работы наших студентов. У них есть еще несколько заказов для нас.

Напиши функцию-валидатор бронирований canTheyBook, которая получает количество взрослых adultsCount и детей childrenCount и возвращает true, если выполнены все условия:

номера в отеле вмещают не более 8 человек
должен быть как минимум один взрослый
на одного взрослого может быть не более двух детей
Если какой-то аргумент не передан, считай, что он равен 0.

Примеры:

canTheyBook(0, 2) === false - 0 взрослых, 2 ребенка. Нарушение правил отеля.
canTheyBook(2, 4) === true - 2 взрослых, 4 ребенка. Бронирование разрешено.
canTheyBook(2) === true - 2 взрослых. Бронирование разрешено.
canTheyBook(9) === false - 9 взрослых. Превышено количество людей для одной комнаты.


function canTheyBook(adultsCount = 0, childrenCount = 0) {
  if (adultsCount + childrenCount > 8 || adultsCount < 1 || childrenCount / adultsCount > 2 ){
   return false
    }
    else {
      return true
    }
}


*/


/*Задача_ 2 

Дела отеля пошли лучше. В Mate Grand Hotel больше не повторяются случаи, когда банда из 20 детей забронировала 8-местный номер.

Владельцы снова обратились к нам. У них есть новая услуга: дополнительная кроватка для младенца до 2-х лет. Теперь номер вмещает до 8 взрослых плюс одного младенца.

Нужно обновить функцию canTheyBook так, чтобы она принимала третий аргумент babiesCount и немного обновить требования:

номер вмещает не более 8 человек, но 9-ым можно подселить младенца
должен быть как минимум один взрослый
на одного взрослого может быть не более 2-х детей и младенцев
Примеры:

canTheyBook(2, 3, 1) === true - Бронирование разрешено
canTheyBook(8, 0, 1) === true - Бронирование разрешено.
canTheyBook(4, 2, 3) === true - Бронирование разрешено.
canTheyBook(0, 1, 1) === false - Нельзя бронировать без взрослых
canTheyBook(9) === false - Слишком много людей
canTheyBook(8, 1) === false - Ребёнок не может быть 9-ым
canTheyBook(2, 2, 3) === false - Недостаточно взрослых

1.

function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  // write code here
  if (adultsCount > 8
  || childrenCount > 5 
  || (childrenCount + babiesCount)/adultsCount > 2
  || adultsCount + childrenCount > 8 
  || adultsCount < 1 
  || adultsCount + childrenCount + babiesCount > 9){
return false;
  } else
   return true;
}

2.function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    const hasAdult = adultsCount > 0;
    const hasEnoughAdults = (childrenCount + babiesCount) <= 2 * adultsCount;
    const totalCount = adultsCount + childrenCount + babiesCount ;
    const hasEnoughSpace = (totalCount <= 8) 
        || (totalCount === 9 && babiesCount > 0);

    return hasAdult && hasEnoughAdults && hasEnoughSpace ;

}



*/


/**   ЗАДАЧА_3 
 
Недавно в Grand Mate Hotel достроили новый корпус с 4-х местными номерами и владельцы снова обратились к нам за помощью.

Нужно создать функцию recommendRoom, которая будет подбирать наиболее подходящую комнату для указанного числа гостей adultsCount, childrenCount и babiesCount.

Теперь есть 2 вида комнат

small room до 4 человек
big room до 8 человек
Не забывай о правиле extra bed (подселить младенца). Оно действует и для 4-местных номеров.

О валидности данных можешь не беспокоиться, canTheyBook уже всё проверил. Просто верни правильную строку для заданных параметров.

Примеры:

recommendRoom(2, 1, 1) === 'small room'
recommendRoom(2, 2, 1) === 'small room + extra bed'
recommendRoom(3, 0, 2) === 'small room + extra bed'
recommendRoom(3, 2) === 'big room'
recommendRoom(8) === 'big room'
recommendRoom(7, 0, 2) === 'big room + extra bed'





function recommendRoom(adultsCount = 0, childrenCount= 0 , babiesCount= 0) {
  // write code here
  const totalCount = adultsCount + childrenCount + babiesCount ;
  const smallRoom = totalCount <= 4;
  const bigRoom = totalCount >= 5 
  && totalCount <=8 ;
  const extraSmallRoomBed = (totalCount === 5 && babiesCount > 0) ;
  const extraBigRoomBed = (totalCount === 9 && babiesCount > 0 );

  if (smallRoom ){
    return 'small room';
  }
  if (extraSmallRoomBed) {
    return 'small room + extra bed';
  }
  if (bigRoom){
    return 'big room';
  }
  if (extraBigRoomBed){
    return 'big room + extra bed'
  }
}

 */



