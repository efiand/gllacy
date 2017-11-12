// Поддержка режима навигации по TAB
var tabMode;
var tabFirst = 1;
document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 9 && !tabMode) {
    tabMode = 1;
  }
});
document.addEventListener('mousedown', function(evt) {
  tabMode = 0;
  subMenu.classList.remove('js-drop-down');
});


// Прогрессивное улучшение доступности слайдера на главной
var sliderInput = document.querySelector('#input-1');
if (sliderInput) {
  var sliderLabel = document.querySelector('.slides-label-1');

  sliderInput.addEventListener('focus', function(evt) {
    if (tabMode && tabFirst) {
      sliderLabel.classList.add('js-tab-first');
      tabFirst = 0;
    }
  });
  sliderInput.addEventListener('blur', function(evt) {
    sliderLabel.classList.remove('js-tab-first');
  });
}


// Прогрессивное улучшение доступности выпадающего меню
var subMenu = document.querySelector('.site-nav-submenu');
var subLinks = subMenu.getElementsByTagName('a');
var subMenuOut = subLinks.length;
for (var i = 0; i < subMenuOut; i++) {
  subLinks[i].addEventListener('focus', function() {
    subMenu.classList.add('js-drop-down');
  });
}

var catalogLink = document.querySelector('#catalog > a');
if (sliderInput) {
  catalogLink.setAttribute('href', 'catalog.html');
}
else {
  catalogLink.removeAttribute('href');
}
catalogLink.addEventListener('focus', function() {
  subMenu.classList.toggle('js-drop-down');
});

document.querySelector('#pay-link').addEventListener('focus', function() {
  subMenu.classList.remove('js-drop-down');
});


// Прогрессивное улучшение форм
var mailPattern = /.+@.+\..+/i;

var searchLink = document.querySelector('#search .user-nav-btn');
searchLink.addEventListener('mouseover', function(evt) {
  if (searchLink.hasAttribute('href')) {
    searchLink.removeAttribute('href');
  }
});
searchLink.addEventListener('mouseout', function(evt) {
  searchLink.setAttribute('href', '#search');
});

var searchForm = document.querySelector('#search form');
var searchField = document.querySelector('#search-field');
searchForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  searchField.value = searchField.value.trim();
  if (searchField.value) {
    searchForm.submit();
  }
});

var loginLink = document.querySelector('#login .user-nav-btn');
loginLink.addEventListener('mouseover', function(evt) {
  if (loginLink.hasAttribute('href')) {
    loginLink.removeAttribute('href');
  }
  if (!loginMail.value) {
    loginMail.value = localStorage.getItem('mail');
  }
  if (!loginPass.value) {
    loginPass.value = localStorage.getItem('pass');
  }
  if (!loginMail.value) {
    loginMail.focus();
  }
  else {
    loginPass.focus();
  }
});
loginLink.addEventListener('mouseout', function(evt) {
  loginLink.setAttribute('href', '#login');
});

var loginMail = document.querySelector('#login-mail');
loginMail.addEventListener('blur', function(evt) {
  loginMail.value = loginMail.value.trim();
  if (loginForm.classList.contains('js-revalid')) {
    loginForm.classList.remove('js-revalid');
  }
});

var loginPass = document.querySelector('#login-pass');
loginPass.addEventListener('blur', function(evt) {
  loginPass.value = loginPass.value.trim();
});

var loginForm = document.querySelector('#login form');
loginForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (!loginMail.value || !mailPattern.test(loginMail.value)) {
    loginForm.classList.add('js-revalid');
    loginMail.value = '';
    loginMail.focus();
  }
  else {
    localStorage.setItem('mail', loginMail.value);
    localStorage.setItem('pass', loginPass.value);
    loginForm.submit();
    if (loginForm.classList.contains('js-revalid')) {
      loginForm.classList.remove('js-revalid');
    }
  }
});
loginForm.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27 && loginForm.classList.contains('js-revalid')) {
    loginForm.classList.remove('js-revalid');
  }
});

var basketLink = document.querySelector('#basket .user-nav-btn');
var basketFull;
if (basketLink.hasAttribute('href')) {
  basketFull = true;
}
if (basketFull) {
  basketLink.addEventListener('mouseover', function(evt) {
    basketLink.removeAttribute('href');
  });
  basketLink.addEventListener('mouseout', function(evt) {
    basketLink.setAttribute('href', '#basket');
  });
}

var subscribeForm = document.querySelector('.news-subscribe form');

if (subscribeForm) {
  var subscribeMail = document.querySelector('#mail-subscribe');
  subscribeMail.value = localStorage.getItem('mail');
  subscribeMail.addEventListener('blur', function(evt) {
    subscribeMail.value = subscribeMail.value.trim();
    if (subscribeForm.classList.contains('js-revalid')) {
      subscribeForm.classList.remove('js-revalid');
    }
  });

  subscribeForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    if (!subscribeMail.value || !mailPattern.test(subscribeMail.value)) {
      subscribeForm.classList.add('js-revalid');
      subscribeMail.value = '';
      subscribeMail.focus();
    }
    else {
      subscribeForm.submit();
      if (subscribeForm.classList.contains('js-revalid')) {
        subscribeForm.classList.remove('js-revalid');
      }
    }
  });
}


// Интерактивная карта
var mapContainer = document.querySelector('#map');

if (mapContainer) {
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map('map', {
      center: [59.93935341, 30.32937631],
      zoom: 16,
      controls: []
    });
    myMap.geoObjects.add(new ymaps.Placemark([59.938631, 30.323055], {
      hintContent: document.querySelector('.contacts-info-address').innerHTML.split(':')[0],
      balloonContent: document.querySelector('.contacts-info').innerHTML.split('<a class="btn')[0]
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/map-marker.svg',
      iconShadow: true,
      iconShadowImageHref: 'img/bg/map-marker-shadow.png',
      iconImageSize: [80, 140],
      iconShadowImageSize: [182, 110],
      iconImageOffset: [-40, -143],
      iconShadowImageOffset: [-5, -111]
    }));
    myMap.controls.add('zoomControl', {
      size: 'small',
      position: {
        bottom: 50,
        left: 10
      }
    });
    myMap.behaviors.disable('scrollZoom');
  }
}


// Модальная форма
var feedbackContainer = document.querySelector('#feedback');
var feedbackForm = document.querySelector('#feedback form');
var feedbackName = document.querySelector('#feedback-name');
var feedbackMail = document.querySelector('#feedback-mail');
var feedbackText = document.querySelector('#feedback-text');

if (mapContainer) {
  var feedbackLink = document.querySelector('#map .btn');
  feedbackLink.addEventListener('mouseover', function(evt) {
    feedbackLink.removeAttribute('href');
  });
  feedbackLink.addEventListener('mouseout', function(evt) {
    feedbackLink.setAttribute('href', '#feedback');
  });
  feedbackLink.addEventListener('click', function(evt) {
    feedbackContainer.classList.add('js-modal');
    feedbackName.value = localStorage.getItem('name');
    feedbackMail.value = localStorage.getItem('mail');
    feedbackText.value = localStorage.getItem('text');
    if (!feedbackName.value) {
      feedbackName.focus();
    }
    else if (!feedbackMail.value) {
      feedbackMail.focus();
    }
    else {
      feedbackText.focus();
    }
  });
}

feedbackName.addEventListener('blur', function(evt) {
  feedbackName.value = feedbackName.value.trim();
});

feedbackMail.addEventListener('blur', function(evt) {
  feedbackMail.value = feedbackMail.value.trim();
  if (feedbackForm.classList.contains('js-revalid')) {
    feedbackForm.classList.remove('js-revalid');
  }
});

feedbackText.addEventListener('blur', function(evt) {
  feedbackText.value = feedbackText.value.trim();
});

feedbackForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (!feedbackMail.value || !mailPattern.test(feedbackMail.value)) {
    feedbackForm.classList.add('js-revalid');
    feedbackMail.value = '';
    feedbackMail.focus();
  }
  else {
    localStorage.setItem('name', feedbackName.value);
    localStorage.setItem('text', feedbackText.value);
    feedbackForm.submit();
    if (feedbackForm.classList.contains('js-revalid')) {
      feedbackForm.classList.remove('js-revalid');
    }
    feedbackContainer.classList.remove('js-modal');
  }
});
feedbackForm.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (feedbackForm.classList.contains('js-revalid')) {
      feedbackForm.classList.remove('js-revalid');
    }
    feedbackContainer.classList.remove('js-modal');
  }
});

var feedbackClose = document.querySelector('.modal-close');
feedbackClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (feedbackForm.classList.contains('js-revalid')) {
    feedbackForm.classList.remove('js-revalid');
  }
  feedbackContainer.classList.remove('js-modal');
});
