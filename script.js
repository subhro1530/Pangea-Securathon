const scriptURL =
  "https://script.google.com/macros/s/AKfycbwigMBAbp_FrZBo8oCsDv8r1Vvdw_mOYNCwoTIkWHVYCN_XsSB1BiYDj8Z5Y6-i6z0C0w/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thanks for Contacting us..! We Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});
