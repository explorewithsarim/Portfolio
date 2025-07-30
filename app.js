  const topButton = document.getElementById("top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topButton.classList.remove("hidden");
    } else {
      topButton.classList.add("hidden"  );
    }
  });

  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
