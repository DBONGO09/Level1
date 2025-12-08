window.onload = function () {
  const imgs = [
    "Images/zero1.png",
    "Images/one1.png",
    "Images/two1.png",
    "Images/three1.png",
    "Images/four1.png",
    "Images/five1.png",
    "Images/decimal.png",
  ];

  imgs.forEach((src) => {
    new Image().src = src;
  });
};
