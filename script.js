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

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzvDE0AZK97qvfaOLZ21XjnTdpeFQ4m2PGuVHkHwvGRihVY-iXY9O0YHWRcjtkn5fl6/exec";

const form = document.getElementById("reviewForm");
const message = document.getElementById("formMessage");
const reviewsContainer = document.getElementById("reviewsContainer");

// Submit review
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      review: document.getElementById("review").value
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(data)
      });

      message.textContent = "✅ Thank you! Your review has been submitted for approval.";
      form.reset();
      loadReviews();

    } catch (err) {
      console.error("Submission error:", err);
      message.textContent = "❌ Error submitting review.";
    }
  });
}

// Load reviews
async function loadReviews() {
  if (!reviewsContainer) return;

  try {
    const res = await fetch(SCRIPT_URL);
    const reviews = await res.json();

    reviewsContainer.innerHTML = "";

    reviews.forEach(r => {
      if (r.status === "approved") {
        const div = document.createElement("div");
        div.className = "review-card";
        div.innerHTML = `
          <h4>${r.name}</h4>
          <p>${r.review}</p>
        `;
        reviewsContainer.appendChild(div);
      }
    });

  } catch (err) {
    console.error("Loading error:", err);
  }
}

loadReviews();
