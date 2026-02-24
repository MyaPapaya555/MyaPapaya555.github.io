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
