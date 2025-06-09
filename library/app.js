const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const decs = document.querySelectorAll(".productDesc");

const products = [
  {
    id: 1,
    title: "Rowley Jefferson's Awesome Friendly Adventure",
    price: 69,
    desc: "Rowley Jefferson's Awesome Friendly Adventure is the second book in the Diary of an Awesome Friendly Kid spin-off series. The book was released on August 4, 2020. Its cover shows Roland the Kind in a Viking suit and riding on a seahorse with some help from Greg Heffley at the bottom right of the book.",
    colors: [
      {
        img: "./img/1.png",
      },
    ],
  },
  {
    id: 2,
    title: "Ya Allah, Jika Dia Jodohku, Permudahkanlah (2022)",
    price: 59,
    desc: "‘Ya Allah Jika Dia Jodohku, Permudahkanlah’ ditulis khas bagi membimbing gadis dan berkongsi rasa hakikat sebenar indahnya pertemuan dan jodoh yang dirahsiakan di sisi-Nya. Tidak ada hubungan cinta antara lelaki dengan perempuan yang diredhai oleh Allah s.w.t. selain pernikahan.",
    colors: [
      {
        img: "./img/2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Born Of Vengeance (The League: Nemesis Rising, Bk. 10)",
    price: 109,
    desc: "Welcome back to the blockbuster bestselling author Sherrilyn Kenyon's world of the League with Born of Vengeance, where destiny and danger collide. . . Bastien Cabarro survived the brutal slaughter of his entire family only to have his wife pin their murders on him.",
    colors: [
      {
        img: "./img/3.png",
      },
    ],
  },
  {
    id: 4,
    title: "The School For Good And Evil: Movie Tie-In Edition",
    price: 89,
    desc:'Two best friends have been chosen to be students at the fabled School for Good and Evil, where ordinary boys and girls are trained to be fairy-tale heroes and villains. One will train for Good, one will become Evil’s new hope.',
    colors: [
      {
        img: "./img/4.png",
      },
    ],
  },
  {
    id: 5,
    title: "School Of Thieves",
    price: 99,
    desc:"Amra DeSilva left school when she was young and became the sole bread winner of her family. When life hits her hard, she has no choice but to do dirty thief work in order to make ends meet. One day, a new family moves into town. It's her father, who had long abandoned Amra and her family. Out of hatred, Amra plans to rob her rich father's house but gets caught red-handed.",
    colors: [
      {
        img: "./img/5.png",
      },
    ],
  },
    {
    id: 6,
    title: "Fastest Men On Earth",
    price: 49,
    desc: "With an exclusive foreword by Usain Bolt, The Fastest Men on Earth tells the fascinating inside stories of the Olympic Men's 100m Champions. It takes just under ten seconds to run, but the results of the Olympic men's 100 metres are etched forever into history. In The Fastest Men on Earth, journalist Neil Duncanson tells the stories of the 25 athletes who've been crowned champions in the event, and earned the coveted title of 'Fastest Man on Earth'.Each chapter explores the fascinating, inspiring, and occasionally tragic lives of these supremely talented sprinters, as well as the intense drama of the record-breaking runs that wrote them into history. Immaculately researched and featuring exclusive interviews with several Olympic champions, including a new conversation with Usain Bolt, The Fastest Men on Earth brings the stories of some of the greatest athletes of all time to life like never before.",
    colors: [
      {
        img: "./img/6.png",
      },
    ],
  },
      {
    id: 7,
    title: "Thor: Thunderstrike",
    price: 61,
    desc: "Thunderstrike is the name of two fictional characters appearing in American comic books published by Marvel Comics.",
    colors: [
      {
        img: "./img/7.png",
      },
    ],
  },
      {
    id: 8,
    title: "Deathlok: The Demolisher Tpb",
    price: 71,
    desc: "Col. Luther Manning has been locked in a state of living death. He is no longer a man, but a mockery of a man. He has become an amalgam of reanimated flesh and computer circuitry, stripped of his family, his humanity - but not his will. He has become Deathlok the Demolisher - a weapon of war programmed solely for destruction. A challenging blend of science fiction and psychological war journal, Deathlok set the pace for anti-heroes in the turbulent post-Watergate '70s. Illustrated by Rich Buckler, and co-written with Doug Moench and Bill Mantlo, Deathlok pushed the moral relevance of Marvel Comics into a bold, often frightening new future.",
    colors: [
      {
        img: "./img/8.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductDesc.textContent = choosenProduct.desc
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});