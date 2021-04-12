function closeModal() {
  const modal = document.getElementById('modal');
  const close = document.getElementById('close');

  close.addEventListener('click', (e) => {
    modal.style.display = 'none';
  })
}

export default closeModal;