'use strict';

(function () {
  var openModalButton = document.querySelector('.js-modal-open');
  var popup = document.querySelector('.modal');
  var closePopupButton = popup.querySelector('.js-close-popup-button');
  var blackout = document.querySelector('.blackout');
  var ESC_KEYCODE = 27;

  var closeMenu = function () {
    window.menu.pageHeader.classList.add('page-header--menu-closed');
  };

  var addBlackout = function () {
    blackout.classList.remove('blackout--none');
  };

  var hideBlackout = function () {
    blackout.classList.add('blackout--none');
  };

  var closePopupWithEsc = function () {
    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        evt.preventDefault();
        closePopup();
      }
    });
  };

  var closePopup = function () {
    popup.classList.add('modal--hidden');
    document.removeEventListener('keydown', closePopupWithEsc);
    hideBlackout();
  };

  openModalButton.addEventListener('click', function () {
    if (
      !window.menu.pageHeader.classList.contains('page-header--menu-closed')
    ) {
      closeMenu();
    }

    popup.classList.remove('modal--hidden');
    document.addEventListener('keydown', closePopupWithEsc);
    addBlackout();
  });

  closePopupButton.addEventListener('click', function () {
    closePopup();
  });

  closePopupWithEsc();

  blackout.addEventListener('click', function () {
    closePopup();
  });
})();
