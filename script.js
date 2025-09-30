(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;
    if (page) {
      document.querySelectorAll('[data-nav]').forEach(link => {
        if (link.dataset.nav === page) {
          link.classList.add('is-active');
        }
      });
    }

    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 120) {
        header.classList.add('header-hidden');
      } else {
        header.classList.remove('header-hidden');
      }
      lastScroll = currentScroll;
    });
  });
})();
