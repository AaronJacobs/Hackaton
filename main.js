let currentWebsite;

// defines section containing vides on youtube.com
// const youtubeContent = $('#content');

// defines section containing content on instagram
const instagramContent = $('.x78zum5.xdt5ytf.x1iyjqo2.xg6iff7')

// defines section containing content on facebook
const facebookContent = $('.x9f619.x1n2onr6.x1ja2u2z')

// defines section containing content on X

const appendText = '<div id="focusText">Focus on your dream!</div>';
// const cssSlider = `<div id="homepage-slider" class="st-slider">

//     <input type="radio" class="cs_anchor radio" name="slider" id="slide1"/>
//     <input type="radio" class="cs_anchor radio" name="slider" id="slide2"/>
//     <input type="radio" class="cs_anchor radio" name="slider" id="play1" checked=""/>

//     <div class="images">
//        <div class="images-inner">
//         <div class="image-slide">
//           <img class="image" src="https://upload.wikimedia.org/wikipedia/commons/3/36/Software_Developer_at_work_03.jpg" alt="Focus on your dream!" />
//         </div>
//         <div class="image-slide">
//           <img class="image" src="https://upload.wikimedia.org/wikipedia/commons/6/62/Makapu%CA%BBu_Beach.JPG" alt="Spend time here!" />
//         </div>
//       </div>
//     </div>

//     <div class="labels">
//         <div class="fake-radio">
//           <label for="slide1" class="radio-btn"></label>
//           <label for="slide2" class="radio-btn"></label>
//         </div>
//     </div>`

const appendImage = '<img id="displayImage" src="https://upload.wikimedia.org/wikipedia/commons/3/36/Software_Developer_at_work_03.jpg" alt="Focus on your dream!" />'

const asnakeLink = '<a href="https://www.googlesnake.org" id="googles-snake-game">Play Snake Game </a>'

// if URL is youtube, replace youtubeContent with newSection

window.addEventListener('load', () => {
  currentWebsite = window.location.href
  console.log(currentWebsite)
  // if URL is facebook, replace facebookContent with newSection
  if(currentWebsite.includes('www.instagram.com')){
    console.log(`it's Instagram`)
    instagramContent.replaceWith('<div id="newSection"></div>');
  }

  if(currentWebsite.includes('www.facebook.com')){
    console.log(`it's Facebook`)
    facebookContent.replaceWith('<div id="newSection"></div>');
  }

  $('#newSection').prepend(appendText);
  $('#focusText').after(appendImage);
  // $('#displayImage').after(asnakeLink)
  $('#displayImage').after('<a id="snakeButton" href="https://www.googlesnake.org" target="_blank">Play Snake Game</a>')

  // const snakeLink = document.getElementById('googles-snake-game');
  // const snakeGameUrl = 'https://www.googlesnake.org';

  // snakeLink.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   chrome.tabs.create({ url: snakeGameUrl });
});




// const snakeLink = document.getElementById('googles-snake-game');
//   const snakeGameUrl = 'https://www.googlesnake.org';

//   snakeLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     chrome.tabs.create({ url: snakeGameUrl });
// });