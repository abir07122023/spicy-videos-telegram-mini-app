const tg = window.Telegram.WebApp;

tg.expand();

function watchAd() {

  alert("Fake ad playing...");

  setTimeout(() => {

    document
      .getElementById("content")
      .classList.remove("hidden");

  }, 3000);

}
