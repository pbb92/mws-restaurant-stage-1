 
 if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('js/sw.js').then(function() {
      console.log('Service worker registration complete.');
    }, function(err) {
      console.log('Service worker registration failure: ', err);
    });
  } else {
    console.log('CLIENT: service worker is not supported.');
  }