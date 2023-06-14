// Change the title text
const title = document.getElementById('title');
title.textContent = 'My JavaScript Project';

// Change the description text
const description = document.getElementById('description');
description.textContent = 'This is a small JavaScript project example.';

// Add a click event listener to the first image
const image1 = document.getElementById('image1');
image1.addEventListener('click', () => {
    alert('You clicked on Image 1!');
});

// Add a mouseover event listener to the second image
const image2 = document.getElementById('image2');
image2.addEventListener('mouseover', () => {
    image2.style.border = '2px solid red';
});

// Add a mouseout event listener to the second image
image2.addEventListener('mouseout', () => {
    image2.style.border = 'none';
});


const image3 = document.getElementById('image3');
image2.addEventListener('mouseover', () => {
    image2.style.border = '2px solid red';
});



// Hide the third image after 3 seconds
// const image3 = document.getElementById('image3');
// setTimeout(() => {
//     image3.style.display = 'none';
// }, 3000);
