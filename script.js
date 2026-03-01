<script>
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".grid img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
    });
  });

  lightbox.addEventListener("click", e => {
    if (e.target !== lightboxImg) {
      lightbox.classList.remove("active");
    }
  });
</script>

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // scrolling down
    header.style.transform = "translateY(-100%)"; // hide
  } else {
    // scrolling up
    header.style.transform = "translateY(0)"; // show
  }

  lastScroll = currentScroll;
});

const GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbzvDE0AZK97qvfaOLZ21XjnTdpeFQ4m2PGuVHkHwvGRihVY-iXY9O0YHWRcjtkn5fl6/exec";
