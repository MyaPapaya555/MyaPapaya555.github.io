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

const COMMISSIONS_OPEN = false; // set true when open

window.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('commission-status');
  const form = document.getElementById('commission-form');
  const overlay = document.getElementById('form-overlay');

  if (COMMISSIONS_OPEN) {
    status.style.display = 'none';   // hide closed box
    overlay.style.display = 'none';  // remove overlay
  } else {
    status.style.display = 'block';  // show closed box
    overlay.style.display = 'block'; // show overlay to block form interaction
  }
});
