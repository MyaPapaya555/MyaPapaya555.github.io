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

// ===== REFERRALS SYSTEM =====

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzFYz3-ECI4zpDHkyU1StPKxKa0LyMB1vxq9nVPjiapA-g2uG-8FebkJBMrsOKAadNG/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    review: document.getElementById("review").value
  };

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const text = await response.text();
    console.log("Server response:", text);

    message.textContent = "✅ Thank you! Your review has been submitted for approval.";
    form.reset();

  } catch (err) {
    console.error("Submission error:", err);
    message.textContent = "❌ Error submitting review.";
  }
});
}

loadReviews();
