// Get a reference to the <path> element
const path = document.querySelector('#background-path');
// const path2 = document.querySelector('#background-path-2');

// Get length of <path>
const pathLength = path.getTotalLength();
// const pathLength2 = path2.getTotalLength();

// Creates very long dash to initially hide the shape
path.style.strokeDasharray = `${pathLength} ${pathLength}`;
// path2.style.strokeDasharray = `${pathLength2} ${pathLength2}`;

// Offset dashes so <path> appears hidden completely
path.style.strokeDashoffset = pathLength;
// path2.style.strokeDashoffset = pathLength2;

path.getBoundingClientRect();
// path2.getBoundingClientRect();

// When the page scrolls...
window.addEventListener('scroll', (event) => {
  const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / 
  (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  //const scrollPercentage2 = (document.documentElement.scrollTop + document.body.scrollTop) / 
  //(document.documentElement.scrollHeight - document.documentElement.clientHeight);
  
  const drawLength = pathLength * scrollPercentage;
  // const drawLength2 = pathLength2 * scrollPercentage;

  path.style.strokeDashoffset = pathLength - drawLength;
  // path2.style.strokeDashoffset = pathLength2 - drawLength2;

  // At end of scrolling make shape complete as
  // the end of the path won't match properly due to dashing, so move dash array
  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = 'none';
  } else {
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
  }
});

