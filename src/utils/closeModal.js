function closeModal() {
  const modal = document.getElementById('modal');
  const close = document.getElementById('close');
  const form = document.getElementById('form');

  close.addEventListener('click', (e) => {
    modal.style.display = 'none';
  })
}

export default closeModal;