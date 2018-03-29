// Get a reference to the <path> element
// const path = document.querySelector('#background-path');
const svgText = document.querySelector('#background-text-one');

// Get length of <path>
// const pathLength = path.getTotalLength();
const svgTextLength = svgText.getTotalLength();
// console.log(svgTextLength);

// Creates very long dash to initially hide the shape
// path.style.strokeDasharray = `${pathLength} ${pathLength}`;
svgText.style.strokeDasharray = `${svgTextLength} ${svgTextLength}`;

// Offset dashes so <path> appears hidden completely
// path.style.strokeDashoffset = pathLength;
svgText.style.strokeDashoffset = svgTextLength;

// path.getBoundingClientRect();
svgText.getBoundingClientRect();

// When the page scrolls...
window.addEventListener('scroll', (event) => {
  // const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / 
  // (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  const scrollPercentage2 = (document.documentElement.scrollTop + document.body.scrollTop) / 
  (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  // console.log('Scroll %', scrollPercentage2);
  // const drawLength = pathLength * scrollPercentage;
  const drawLength2 = (svgTextLength * scrollPercentage2) / 2;
  // console.log('DrawLength',drawLength2);

  // path.style.strokeDashoffset = pathLength - drawLength;
  svgText.style.strokeDashoffset = svgTextLength - drawLength2;

  // At end of scrolling make shape complete as
  // the end of the path won't match properly due to dashing, so move dash array
  // if (scrollPercentage >= 0.99) {
    // path.style.strokeDasharray = 'none';
  // } else {
    // path.style.strokeDasharray = `${pathLength} ${pathLength}`;
  // }
  if (scrollPercentage2 >= 0.99) {
    svgText.style.strokeDasharray = 'none';
  } else {
    svgText.style.strokeDasharray = `${svgTextLength} ${svgTextLength}`;
  }
});

