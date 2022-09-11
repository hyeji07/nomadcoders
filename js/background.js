const images = ["0.jpg", "1.jpg", "2.jpg"];
const todaysImgNum = images[Math.floor(Math.random() * images.length)];
const bodyBg = document.querySelector("body");
bodyBg.style.backgroundImage=`url(img/${todaysImgNum})`;
