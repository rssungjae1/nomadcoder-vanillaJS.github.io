const clockTitle = document.querySelector(".js-clock");

function getClock() {
  // const setDate = new Date("2022-12-25T00:00:00+0900");

  const now = new Date();

  // const distance = setDate.getTime() - now.getTime();

  // const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  // const hours = String(
  //   Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  // ).padStart(2, "0");
  // const minutes = String(
  //   Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  // ).padStart(2, "0");
  // const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
  //   2,
  //   "0"
  // );

  clockTitle.innerText = `${now.getMonth()}月${now.getDay()}日 ${now.getHours()}:${now.getMinutes()}`;
}

getClock();
setInterval(getClock, 1000);
