// loading.js
// Wait for 2.5 seconds, then hide loader and show main content
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  }, 2500);
});