const openPage = (pageName, elmnt, bgcolor, color) => {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  if (pageName === 'map') {
    googleMaps();
  }
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '#F29F05';
    tablinks[i].style.color = '#fff';
  }
  document.getElementById(pageName).style.display = 'block';
  elmnt.style.backgroundColor = '#F27405';
  elmnt.style.color = '#fff';
}

// Get the element with id='defaultOpen' and click on it
document.getElementById('defaultOpen').click();

const googleMaps = () => {
  console.log("print map")
  const stores = [{
    lat: -23.5742546,
    lng: -46.677624
  }, {
    lat: -23.553994,
    lng: -46.6600004
  },{
    lat: -23.6020718,
    lng: -46.6742054
  },{
    lat: -23.5498462,
    lng: -46.7088672
  }];
  var myLatlng = new google.maps.LatLng(-23.5742546, -46.677624);

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: myLatlng,
  });
  let markers = stores.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      map: map,
      label: "GF"
    });
  });


  markers.push(map);
  console.log(markers)

};