// Get a reference to the <path> element
const svgText = document.querySelector('#background-text-one');

// Get length of <path>
const svgTextLength = svgText.getTotalLength();
// console.log(svgTextLength);

// Creates very long dash to initially hide the shape
svgText.style.strokeDasharray = `${svgTextLength} ${svgTextLength}`;

// Offset dashes so <path> appears hidden completely
svgText.style.strokeDashoffset = svgTextLength;

svgText.getBoundingClientRect();

// When the page scrolls...
window.addEventListener('scroll', (event) => {
  const scrollPercentage2 = (document.documentElement.scrollTop + document.body.scrollTop) / 
  (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  const drawLength2 = (svgTextLength * scrollPercentage2) / 2;

  svgText.style.strokeDashoffset = svgTextLength - drawLength2;

  // At end of scrolling make shape complete as
  // the end of the path won't match properly due to dashing, so move dash array
  if (scrollPercentage2 >= 0.99) {
    svgText.style.strokeDasharray = 'none';
  } else {
    svgText.style.strokeDasharray = `${svgTextLength} ${svgTextLength}`;
  }
});

