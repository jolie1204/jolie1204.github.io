(() => {
  const gallery = document.querySelector('.screenshot-gallery');
  if (!gallery) return;

  const controls = document.querySelector('.gallery-controls');
  const hint = document.querySelector('.gallery-hint');
  const links = [...gallery.querySelectorAll('figure > a')];
  const baseLabel = gallery.getAttribute('aria-label').split(';')[0];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function updateGallery() {
    const focused = document.activeElement;
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    const overflows = maxScroll > 2;
    gallery.tabIndex = overflows ? 0 : -1;
    gallery.setAttribute('aria-label', baseLabel + (overflows ? '; scroll horizontally for more' : ''));
    controls.hidden = !overflows;
    controls.querySelector('[data-scroll="-1"]').disabled = gallery.scrollLeft <= 2;
    controls.querySelector('[data-scroll="1"]').disabled = gallery.scrollLeft >= maxScroll - 2;
    hint.textContent = (overflows ? 'Scroll for more. ' : '') + 'Select a screenshot to see it larger.';
    if (controls.contains(focused) && (focused.disabled || controls.hidden)) {
      (controls.querySelector('button:not(:disabled)') || links[0]).focus({preventScroll: true});
    }
  }

  controls.addEventListener('click', event => {
    const button = event.target.closest('button[data-scroll]');
    if (!button) return;
    const step = gallery.querySelector('figure').getBoundingClientRect().width + parseFloat(getComputedStyle(gallery).columnGap);
    gallery.scrollBy({left: Number(button.dataset.scroll) * step, behavior: reducedMotion.matches ? 'auto' : 'smooth'});
  });
  gallery.addEventListener('scroll', updateGallery, {passive: true});
  if ('ResizeObserver' in window) new ResizeObserver(updateGallery).observe(gallery);
  else window.addEventListener('resize', updateGallery);
  updateGallery();

  // Direct image links remain usable without native dialog support or JavaScript.
  if (!('HTMLDialogElement' in window) || typeof HTMLDialogElement.prototype.showModal !== 'function') return;
  const dialog = document.createElement('dialog');
  dialog.className = 'screenshot-viewer';
  dialog.setAttribute('aria-labelledby', 'viewer-title');
  dialog.innerHTML = `
    <div class="viewer-header">
      <h2 id="viewer-title"></h2>
      <button class="button button-outline viewer-close" type="button" autofocus>Close</button>
    </div>
    <img class="viewer-image" alt="">
    <p class="viewer-error" role="status" hidden>This image could not be loaded. Try opening the full image.</p>
    <div class="viewer-footer">
      <div class="viewer-navigation" role="group" aria-label="Screenshot navigation">
        <button class="button button-outline viewer-previous" type="button">Previous</button>
        <span class="viewer-counter" aria-live="polite" aria-atomic="true"></span>
        <button class="button button-outline viewer-next" type="button">Next</button>
      </div>
      <a class="viewer-original">Open full image</a>
    </div>`;
  document.body.append(dialog);
  const preview = dialog.querySelector('.viewer-image');
  const error = dialog.querySelector('.viewer-error');
  const previous = dialog.querySelector('.viewer-previous');
  const next = dialog.querySelector('.viewer-next');
  let current = 0;
  let opener;

  function showImage(index) {
    const focused = document.activeElement;
    current = index;
    const link = links[current];
    const image = link.querySelector('img');
    dialog.querySelector('#viewer-title').textContent = link.parentElement.querySelector('figcaption').textContent;
    error.hidden = true;
    preview.alt = image.alt;
    preview.width = Number(image.getAttribute('width'));
    preview.height = Number(image.getAttribute('height'));
    preview.src = link.href;
    dialog.querySelector('.viewer-original').href = link.href;
    dialog.querySelector('.viewer-counter').textContent = `${current + 1} of ${links.length}`;
    previous.disabled = current === 0;
    next.disabled = current === links.length - 1;
    if (focused === previous && previous.disabled) next.focus({preventScroll: true});
    if (focused === next && next.disabled) previous.focus({preventScroll: true});
  }
  preview.addEventListener('error', () => { error.hidden = false; });
  preview.addEventListener('load', () => { error.hidden = true; });
  links.forEach(link => link.setAttribute('aria-haspopup', 'dialog'));
  gallery.addEventListener('click', event => {
    const link = event.target.closest('figure > a');
    if (!link || !links.includes(link) || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = link;
    showImage(links.indexOf(link));
    dialog.showModal();
    document.body.classList.add('has-screenshot-viewer');
  });
  dialog.querySelector('.viewer-close').addEventListener('click', () => dialog.close());
  previous.addEventListener('click', () => showImage(current - 1));
  next.addEventListener('click', () => showImage(current + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Tab' && !event.altKey && !event.ctrlKey && !event.metaKey) {
      const stops = [...dialog.querySelectorAll('button:not(:disabled), a[href]')];
      const first = stops[0];
      const last = stops[stops.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === 'ArrowLeft' && current > 0) { event.preventDefault(); showImage(current - 1); }
    if (event.key === 'ArrowRight' && current < links.length - 1) { event.preventDefault(); showImage(current + 1); }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('has-screenshot-viewer');
    opener?.focus({preventScroll: true});
  });
})();
