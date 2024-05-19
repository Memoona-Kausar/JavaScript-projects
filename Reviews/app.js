const reviews = [
    {
      id: 1,
      name: "Sara Jonas",
      job: "Web Developer",
      img: "images.jpg",
      text:
      "Versatile web developer adept at crafting responsive and dynamic digital experiences with a keen eye for design and functionality.",
    },
    {
      id: 2,
      name: "Olivia",
      job: "Web Designer",
      img: "images (1).jpg",
      text:
        "Driven and experienced web designer with a passion for creating compelling and visually appealing websites",
    },
    {
      id: 3,
      name: "anna johnson",
      job: "ux designer",
      img: "images (2).jpg",
      text:
        "Innovative UX designer skilled in creating intuitive interfaces that elevate user experiences through empathy-driven design and seamless interactions.",
    },
  ];
  
  // Select items
  const img = document.querySelector(".person-info img");
  const author = document.querySelector(".author");
  const job = document.querySelector(".job");
  const info = document.querySelector(".text");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  window.addEventListener("DOMContentLoaded", function () {
    // callback function
    showPerson();
  });
  
  // set initial value
  let currentItem = 0;
  
  // create a showPerson function
  function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  // Show next person when click the next button
  
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson();
  });
  
  // Show prev person when click the prev button
  
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson();
  });
  
  // show random person when click the random btn
  randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
  
    console.log(currentItem);
  });