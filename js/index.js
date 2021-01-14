const shopNowItemMenu = document.querySelectorAll(".shopNowItemMenu>ul>li");
console.log(shopNowItemMenu);

const shoppingCard = document.querySelectorAll(".shopItemCard");

function sort(e) {
  shopNowItemMenu.forEach((si) => {
    if (si.className.includes("active")) {
      si.classList.remove("active");
    }
  });
  shoppingCard.forEach((sc) => {
    if (sc.className.includes("active")) {
      sc.classList.remove("active");
    }
  });

  shoppingCard.forEach((sc) => {
    if (sc.getAttribute("data") === e) {
      sc.classList.add("active");
    }
  });
  shopNowItemMenu.forEach((si) => {
    if (si.getAttribute("data") === e) {
      si.classList.add("active");
    }
  });
}
