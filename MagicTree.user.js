// ==UserScript==
// @name        MagicTree
// @namespace   thescs.naumen.sd.displayhiddenblocks
// @description Shows hidden areas in Service Desk
// @include     https://sd.volia.com:8443/fx/voliagwt/*
// @version     1
// @grant       none
// ==/UserScript==

function maindo() {
  //=====отображаем скрытые поля и преобразует ид в ссылку в разделе Документов=======
  var hiddenBlock = document.getElementsByClassName('CubicTableCell CubicNormalCell col0');
  var bodyBlock;
  for (i = 0; i < hiddenBlock.length; i++) {
      //////////******* Понималка для новых ИД документов ***********////////////////
      if((hiddenBlock[i].innerHTML.indexOf('dbfile') + 1) && (hiddenBlock[i].innerHTML.indexOf('href') + 1) <=0 ) {
        hiddenBlock[i].style = '';
        bodyBlock = hiddenBlock[i].innerHTML;
        hiddenBlock[i].innerHTML = '<a href="/fx/cubicdownload?fileid='+bodyBlock+'&fileName=" target="_blank">'+bodyBlock+'</a>'; break;
    }
      //////////******* Конец понималки для новых ИД документов *****////////////////
	 /* Устаревшие идентификаторы */
    if(hiddenBlock[i].innerHTML.length<=10){    //проверяем, ТОЧНО ли это таблица с документами??
      hiddenBlock[i].style = '';
    if((hiddenBlock[i].innerHTML.indexOf('href') + 1) <=0 ) {    //уходим от цикла с удвоением и вообще дикой хернёй
      bodyBlock = hiddenBlock[i].innerHTML;
      hiddenBlock[i].innerHTML = '<a href="/fx/cubicdownload?fileid='+bodyBlock+'&fileName=" target="_blank">'+bodyBlock+'</a>';
    }
    }
	 /* Конец блока распознавалки устаревших идентификаторов */
  }
  //=====КОНЕЦ======
  //=====Открываем обращения====
  var hiddenBlock2 = document.getElementsByTagName('table');
  for (i = 0; i < hiddenBlock2.length; i++){   //проверяем, правильный ЛИ блок бы открываем и сбрасываем ему стиль??
    if((hiddenBlock2[i].innerHTML.indexOf('по улице')+1) >= 2) hiddenBlock2[i].style = '';
  }
  //=====КОНЕЦ=====
   //=====Открываем спойлер Мониторинг Аварий====
  var hiddenBlock6 = document.getElementsByTagName('div');
  for (i = 0; i < hiddenBlock6.length; i++){   //проверяем, правильный ЛИ блок бы открываем и сбрасываем ему стиль??
    if((hiddenBlock6[i].innerHTML.indexOf('Мониторинг аварий')+1) >= 2) if(hiddenBlock6[i].style = 'display: none') hiddenBlock6[i].style = '';
  }
  //=====КОНЕЦ=====
  //=====Открываем пароль к ЛК=====
  var hiddenBlock3 = document.getElementsByClassName('CubicTableHolder');
  for (i = 0; i < hiddenBlock3.length; i++){   //проверяем, правильный ЛИ блок бы открываем и сбрасываем ему стиль??
    if((hiddenBlock3[i].innerHTML.indexOf('Пароль к порталу абонента</td>')+1) >= 2) hiddenBlock3[i].style = '';
  }
  //=====КОНЕЦ=====
  //=====Открываем остальную чепуху - СМС абоненту, кнопки=====
  var hiddenBlock4 = document.getElementsByClassName('gwt-Anchor');
  for (i = 0; i < hiddenBlock4.length; i++){   //проверяем, правильный ЛИ блок бы открываем и сбрасываем ему стиль??
    if((hiddenBlock4[i].title.indexOf('Отправить SMS с логином и паролем')+1) >= 0) hiddenBlock4[i].style = '';
  }
  var hiddenBlock5 = document.getElementsByClassName('gwt-Button');
  for (i = 0; i < hiddenBlock5.length; i++){   //проверяем, правильный ЛИ блок бы открываем и сбрасываем ему стиль??
    if(hiddenBlock5[i].innerHTML == "Создать квартиру") hiddenBlock5[i].style = 'width: 180px;';
    if(hiddenBlock5[i].innerHTML == "Отобразить топологию") hiddenBlock5[i].style = 'width: 180px;';
  }
  //=====КОНЕЦ=====
}
setInterval(maindo, 4000);
