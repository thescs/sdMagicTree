// ==UserScript==
// @name        MagicTree
// @namespace   thescs.naumen.sd.displayhiddenblocks
// @description Shows hidden areas in Service Desk
// @include     https://sd.volia.com:8443/fx/voliagwt/*
// @version     1
// @grant       none
// ==/UserScript==

function maindo() {
  //=====���������� ������� ���� � ����������� �� � ������ � ������� ����������=======
  var hiddenBlock = document.getElementsByClassName('CubicTableCell CubicNormalCell col0');
  var bodyBlock;
  for (i = 0; i < hiddenBlock.length; i++) {
      //////////******* ��������� ��� ����� �� ���������� ***********////////////////
      if((hiddenBlock[i].innerHTML.indexOf('dbfile') + 1) && (hiddenBlock[i].innerHTML.indexOf('href') + 1) <=0 ) {
        hiddenBlock[i].style = '';
        bodyBlock = hiddenBlock[i].innerHTML;
        hiddenBlock[i].innerHTML = '<a href="/fx/cubicdownload?fileid='+bodyBlock+'&fileName=" target="_blank">'+bodyBlock+'</a>'; break;
    }
      //////////******* ����� ��������� ��� ����� �� ���������� *****////////////////
	 /* ���������� �������������� */
    if(hiddenBlock[i].innerHTML.length<=10){    //���������, ����� �� ��� ������� � �����������??
      hiddenBlock[i].style = '';
    if((hiddenBlock[i].innerHTML.indexOf('href') + 1) <=0 ) {    //������ �� ����� � ��������� � ������ ����� �����
      bodyBlock = hiddenBlock[i].innerHTML;
      hiddenBlock[i].innerHTML = '<a href="/fx/cubicdownload?fileid='+bodyBlock+'&fileName=" target="_blank">'+bodyBlock+'</a>';
    }
    }
	 /* ����� ����� ������������� ���������� ��������������� */
  }
  //=====�����======
  //=====��������� ���������====
  var hiddenBlock2 = document.getElementsByTagName('table');
  for (i = 0; i < hiddenBlock2.length; i++){   //���������, ���������� �� ���� �� ��������� � ���������� ��� �����??
    if((hiddenBlock2[i].innerHTML.indexOf('�� �����')+1) >= 2) hiddenBlock2[i].style = '';
  }
  //=====�����=====
   //=====��������� ������� ���������� ������====
  var hiddenBlock6 = document.getElementsByTagName('div');
  for (i = 0; i < hiddenBlock6.length; i++){   //���������, ���������� �� ���� �� ��������� � ���������� ��� �����??
    if((hiddenBlock6[i].innerHTML.indexOf('���������� ������')+1) >= 2) if(hiddenBlock6[i].style = 'display: none') hiddenBlock6[i].style = '';
  }
  //=====�����=====
  //=====��������� ������ � ��=====
  var hiddenBlock3 = document.getElementsByClassName('CubicTableHolder');
  for (i = 0; i < hiddenBlock3.length; i++){   //���������, ���������� �� ���� �� ��������� � ���������� ��� �����??
    if((hiddenBlock3[i].innerHTML.indexOf('������ � ����� ����������</td>')+1) >= 2) hiddenBlock3[i].style = '';
  }
  //=====�����=====
  //=====��������� ��������� ������ - ��� ��������, ������=====
  var hiddenBlock4 = document.getElementsByClassName('gwt-Anchor');
  for (i = 0; i < hiddenBlock4.length; i++){   //���������, ���������� �� ���� �� ��������� � ���������� ��� �����??
    if((hiddenBlock4[i].title.indexOf('��������� SMS � ������� � �������')+1) >= 0) hiddenBlock4[i].style = '';
  }
  var hiddenBlock5 = document.getElementsByClassName('gwt-Button');
  for (i = 0; i < hiddenBlock5.length; i++){   //���������, ���������� �� ���� �� ��������� � ���������� ��� �����??
    if(hiddenBlock5[i].innerHTML == "������� ��������") hiddenBlock5[i].style = 'width: 180px;';
    if(hiddenBlock5[i].innerHTML == "���������� ���������") hiddenBlock5[i].style = 'width: 180px;';
  }
  //=====�����=====
}
setInterval(maindo, 4000);
