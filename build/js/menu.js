'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');
  var menuButton = pageHeader.querySelector('.js-open-menu');

  menuButton.addEventListener('click', function () {
    pageHeader.classList.toggle('page-header--menu-closed');
  });

  window.menu = {
    pageHeader: pageHeader
  };
})();
