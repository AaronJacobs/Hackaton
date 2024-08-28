var content = $('#content');
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


content.replaceWith('<div id="newSection"></div>');
$('#newSection').prepend(appendText);
$('#focusText').after(appendImage);