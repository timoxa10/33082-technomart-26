'use strict';

var buttonWriteUs = document.querySelector('.button-write-us');
var writeUsform = document.querySelector('.write-us');
var modalClose = document.querySelector('.modal-close');
var imageMap = document.querySelector('.company-map');
var modalMap = document.querySelector('.modal-map');
var buttonBuy = document.querySelectorAll('.buy');
var modalBuy = document.querySelector('.modal-product');

// form wtite to us
buttonWriteUs.addEventListener('click', function(evt){
  evt.preventDefault();
  writeUsform.classList.remove('hidden');
});

modalClose.addEventListener('click', function(){
  writeUsform.classList.add('hidden');
});

// map
imageMap.addEventListener('click', function(){
  modalMap.classList.remove('hidden');
});

modalClose.addEventListener('click', function(){
  modalMap.classList.add('hidden');
});

// buy
buttonBuy.addEventListener('click', function(evt){
  evt.preventDefault();
  modalBuy.classList.remove('hidden');
});
