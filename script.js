const YES_BTN = document.getElementById("yes");
const NO_BTN = document.getElementById("no");
const HEADER = document.querySelector("h1");
const IMAGE = document.querySelector("img");

let NO_COUNT = 0;

const texts = [
  "No? :(",
  "Did you mean yes :(",
  "WHY NO :((",
  "PLEASE!!! :(",
  "PLEASE BABYYY",
  "DID I DO SOMETHING WRONG??? :(",
  "WHY NOT???",
  "OKAY IF YOU GOT THIS FAR WHAT THE HECK"
];

let DB = false;

function updateNO() {
  if (DB) {
    return;
  }
  DB = true;

  if (NO_COUNT < texts.length - 1) {
    NO_COUNT++;
    NO_BTN.innerText = texts[NO_COUNT];
  } else {
    NO_BTN.innerText = "YKK WHAT TAKE THIS!";

    setTimeout(function() {
      NO_BTN.remove();
    }, 1000);
    return;
  }

  DB = false;
}

function handleYES() {
  // Set a cookie to remember that "Yes" was clicked
  document.cookie = "userAnsweredYes=true; path=/; max-age=" + 60 * 60 * 24 * 365; // cookie lasts for 1 year

  NO_BTN.removeEventListener("click", updateNO);

  NO_BTN.remove();
  YES_BTN.remove();

  IMAGE.src = "./assets/images/Letter.png";
  HEADER.innerText = "THANK YOU!! HAPPY VALENTINE'S DAY PRINCESS!!! I LOVE YOU SM";
}

// Check if the user has already answered "Yes" using the cookie
function checkCookie() {
  const cookies = document.cookie.split('; ');
  const userAnsweredYes = cookies.find(cookie => cookie.startsWith('userAnsweredYes='));

  if (userAnsweredYes && userAnsweredYes.split('=')[1] === 'true') {
    handleYES();
  }
}

NO_BTN.addEventListener("click", updateNO);
YES_BTN.addEventListener("click", handleYES, { once: true });

// Check the cookie on page load
checkCookie();
