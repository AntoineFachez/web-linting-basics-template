function toggleButton() {
  const cards = document.querySelectorAll('[data-js="card"]');

  cards.forEach(card => {
    const button = card.querySelector('[data-js="button"]');
    const link = card.querySelector('[data-js="link"]');
    const arrow = card.querySelector('[data-js="arrow"]');
    let isArrowRotated = false;

    button.addEventListener('click', () => {
      isArrowRotated = !isArrowRotated;

      link.classList.toggle('hidden');
      // arrow.classList.toggle('rotate');

      if (isArrowRotated) {
        arrow.classList.remove('unrotate');
        arrow.classList.add('rotate');
      } else {
        arrow.classList.remove('rotate');
        arrow.classList.add('unrotate');
      }
    });
    card.append(button);
  });
}
toggleButton();
