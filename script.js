(() => {
  const progressBar = document.querySelector(".read-progress span");
  const tocLinks = Array.from(document.querySelectorAll(".toc a"));
  const sections = tocLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const updateProgress = () => {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(100, Math.max(0, (scrollTop / max) * 100)) : 0;
    progressBar.style.width = `${progress}%`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  if ("IntersectionObserver" in window && tocLinks.length > 0) {
    const sectionById = new Map(sections.map((section) => [section.id, section]));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        tocLinks.forEach((link) => link.classList.remove("is-active"));
        const activeLink = tocLinks.find(
          (link) => sectionById.get(link.getAttribute("href").slice(1)) === visible.target,
        );
        activeLink?.classList.add("is-active");
      },
      {
        rootMargin: "-18% 0px -65% 0px",
        threshold: [0.08, 0.18, 0.32, 0.48],
      },
    );

    sections.forEach((section) => observer.observe(section));
  }

  document.querySelectorAll(".faq-question").forEach((button) => {
    const answer = button.nextElementSibling;
    if (!answer) return;

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      answer.hidden = isOpen;
    });
  });

  document.querySelectorAll(".js-guide-shot[data-src]").forEach((placeholder) => {
    const src = placeholder.getAttribute("data-src");
    if (!src) return;

    const img = new Image();
    img.onload = () => {
      img.alt = placeholder.getAttribute("data-title") || "hampの操作画面";
      placeholder.appendChild(img);
      placeholder.classList.add("has-image");
    };
    img.onerror = () => {
      placeholder.classList.remove("has-image");
    };
    img.src = src;
  });
})();
