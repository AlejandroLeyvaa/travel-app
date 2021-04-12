function modal(message, color = '#2782AC') {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const textContainer = document.getElementById('text-container');

  modal.style.display = 'block';
  modalContent.style.backgroundColor = color;
  textContainer.innerText = message;
  return true;
};

export default modal;