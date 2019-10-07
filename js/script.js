'use strict';
var modalWrapper = document.querySelector('.modal-wrapper');
var buttonWriteUs = document.querySelector('.button-write-us');
var writeUsform = document.querySelector('.write-us');
var modalClose = document.querySelectorAll('.modal-close');
var imageMap = document.querySelector('.company-map');
var modalMap = document.querySelector('.modal-map');
var buttonBuy = document.querySelectorAll('.buy');
var modalBuy = document.querySelector('.modal-product');
var arrowsList = document.querySelector('.advantage-arrows');
var arrowRight = document.querySelector('.arrow-right');
var arrowLeft = document.querySelector('.arrow-left');
var radioSliderDefault = document.getElementById('advantage-1');
var radioSliderNext = document.getElementById('advantage-2');
var actionsList = document.querySelector('.actions');

for (var i = 0; i < buttonBuy.length; i++) {
  buttonBuy[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    modalBuy.classList.remove('hidden');
    modalWrapper.classList.remove('hidden');
  });
  window.onclick = function(evt) {
    if (evt.target.classList.contains('modal-wrapper')) {
      modalBuy.classList.add('hidden');
      modalWrapper.classList.add('hidden');
    }
  }
}
if (window.location.href.indexOf('catalog') > -1) {
  for (var i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      modalBuy.classList.add('hidden');
      modalWrapper.classList.add('hidden');
    });
  }
} else {
  for (var i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      writeUsform.classList.add('hidden');
      modalMap.classList.add('hidden');
      modalBuy.classList.add('hidden');
      modalWrapper.classList.add('hidden');
    });
  }
  window.onclick = function(evt) {
    if (evt.target.classList.contains('modal-wrapper')) {
      modalWrapper.classList.add('hidden');
      writeUsform.classList.add('hidden');
      modalMap.classList.add('hidden');
      modalBuy.classList.add('hidden');
    }
  }
  buttonWriteUs.addEventListener('click', function(evt){
    evt.preventDefault();
    writeUsform.classList.remove('hidden');
    modalWrapper.classList.remove('hidden');
  });
  imageMap.addEventListener('click', function(evt){
    evt.preventDefault();
    modalMap.classList.remove('hidden');
    modalWrapper.classList.remove('hidden');
  });
  arrowsList.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('arrow-left')) {
      arrowLeft.addEventListener ('click', function(evt) {
        radioSliderDefault.checked = false;
        radioSliderNext.checked = true;
      });
      arrowRight.addEventListener ('click', function(evt) {
        radioSliderDefault.checked = true;
        radioSliderNext.checked = false;
      });
    } else {
      arrowRight.addEventListener ('click', function(evt) {
        radioSliderDefault.checked = false;
        radioSliderNext.checked = true;
      });
      arrowLeft.addEventListener ('click', function(evt) {
        radioSliderDefault.checked = true;
        radioSliderNext.checked = false;
      });
    }
  });
}
