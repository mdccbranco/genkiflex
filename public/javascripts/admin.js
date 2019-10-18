// let headerBtns = document.querySelectorAll('.admin-container__header--btns');

// headerBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     headerBtns.forEach(btn2 => {
//       btn2.classList.remove('header-btn__active');
//     });
//     btn.classList.add('header-btn__active');
//   });
// })

const openPage = (pageName, elmnt, bgcolor, color) => {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '';
    tablinks[i].style.color = 'red';
  }
  document.getElementById(pageName).style.display = 'block';
  elmnt.style.backgroundColor = bgcolor;
  elmnt.style.color = color;
}

// Get the element with id='defaultOpen' and click on it
document.getElementById('defaultOpen').click();


// document.addEventListener('DOMContentLoaded', () => {

//   console.log('IronGenerator JS imported successfully!');

// }, false);

// window.onload = () => {
//   getPlaces();
// };


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