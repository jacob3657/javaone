
function funcForExercise3(event) {

  let element = event.target;

  // NOTE: the property name for the styles are the same as in
  // CSS, except that instead of a "-" between words, you
  // use camelCase, i.e. capitalizing the first letter in each word
  // so "background-color" in CSS is "backgroundColor" from JavaScript
  element.style.backgroundColor = "yellow";
  element.style.color="red";
  element.style.borderRadius="8px";
  element.style.fontweight="700";

  // following the same pattern, change the following styles
  // the color of the text to red
  // the border radius to 8px;
  // the font weight to 700;
}