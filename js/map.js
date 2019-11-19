(function() {
  function initMap() {
    let city = { lat: 49.266589, lng: 23.87414 };
    let cityMap = new google.maps.Map(document.querySelector('map'), {
      zoom: 15,
      center: city
    });
  }
})();
