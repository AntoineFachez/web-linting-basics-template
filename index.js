function toggleButton() {
  const cards = document.querySelectorAll('[data-js="card"]');

  cards.forEach(card => {
    const button = card.querySelector('[data-js="button"]');
    const link = card.querySelector('[data-js="link"]');
    const arrow = card.querySelector('[data-js="arrow"]');
    button.addEventListener('click', () => {
      console.log('clicked');

      link.classList.toggle('hidden');
      arrow.classList.toggle('rotate');
    });
    card.append(button);
  });
  // cards.append(buttons);
}
toggleButton();
