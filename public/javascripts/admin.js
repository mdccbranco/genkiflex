const openPage = (pageName, elmnt, bgcolor, color) => {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '#F29F05';
  }
  document.getElementById(pageName).style.display = 'block';
  elmnt.style.backgroundColor = '#F27405';
}

// Get the element with id='defaultOpen' and click on it
document.getElementById('defaultOpen').click();

function placeOnTheMap(place) {
  const markers = [];
  let center = {
    lat: 41.386230,
    lng: 2.174980
  };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: center
  });

  // let center = {
  //   lat: 41.386230,
  //   lng: 2.174980
  // };
}

const getPlaces = () => {
  axios.get("/api")
    .then(response => {
      placeOnTheMap(response.data);
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
}

let ctx = document.querySelector('#canvas');

// let myGraph = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: [1,2,3,4,5,6,7];
//     datasets: [{
//       // label: 
//     }]
//   }
// });