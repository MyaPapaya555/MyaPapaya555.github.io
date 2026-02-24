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

// Toggle commissions open/closed
const COMMISSIONS_OPEN = false; // ← change this to true when you want to open

window.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('commission-status');
  const form = document.getElementById('commission-form');

  if (COMMISSIONS_OPEN) {
    status.style.display = 'none';  // hide "closed" box
    form.style.display = 'block';    // show form
  } else {
    status.style.display = 'block';  // show "closed" box
    form.style.display = 'none';     // hide form
  }
});
