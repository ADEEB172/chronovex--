// const buttons = document.querySelectorAll('.btn');
// const images = document.querySelectorAll('.image-box');

// filterImages('bestsellers');

// buttons.forEach(button => {
//     button.addEventListener("click" , ()=>{
//         Buttons.forEach(btn =>
//             btn.classList.remove('active'))
//     })
// })

// const buttons = document.querySelectorAll('.btn');
// const images = document.querySelectorAll('.image-box');

// // Default filter (show Premium by default)
// filterImages('bestsellers');

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Remove active class from all
//     buttons.forEach(btn => btn.classList.remove('active'));
//     button.classList.add('active');

//     const filter = button.getAttribute('data-filter');
//     filterImages(filter);
//   });
// });

// function filterImages(filter) {
//   images.forEach(img => {
//     if (img.classList.contains(filter)) {
//       img.style.display = 'block';
//     } else {
//       img.style.display = 'none';
//     }
//   });
// }
const buttons = document.querySelectorAll(".btn");
const images = document.querySelectorAll(".image-box");

// Show "bestsellers" images by default
filterImages("bestsellers");

// Handle button clicks
buttons.forEach((btn) => {
  btn.onclick = () => {
    // Update active button
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter images based on data-filter
    filterImages(btn.dataset.filter);
  };
});

// Function to show/hide images
function filterImages(category) {
  images.forEach((img) => {
    img.style.display = img.classList.contains(category) ? "block" : "none";
  });
}

const btn = document.querySelectorAll(".button");
const collection = document.querySelectorAll(".collection");

filterCollection("scubaqua");

btn.forEach((button) => {
  button.onclick = () => {
    btn.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");

    filterCollection(button.dataset.filter);
  };
});

function filterCollection(category) {
  collection.forEach((img) => {
    img.style.display = img.classList.contains(category) ? "block" : "none";
  });
}

const videos = document.querySelectorAll(".three-card video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => video.pause());
  video.addEventListener("mouseleave", () => video.play());
});

const topBtn = document.getElementById("arrow-top");
// show/hide on scroll

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
});
// smooth scroll to top

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
