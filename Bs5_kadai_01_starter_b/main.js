console.log("main.js!!");

/* ダークテーマ用クラス */
$(document).ready(function() {
    $('#btnB').on('click', function() {
      $('#darkHeaderArea').addClass('dark-mode');
    });
  
    $('#btnA').on('click', function() {
      $('#darkHeaderArea').removeClass('dark-mode');
    });
  });