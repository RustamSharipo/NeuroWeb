const arrow = document.getElementById('arrow');
const imgBlock = document.getElementById('ImgBlock');

    arrow.addEventListener('click', () => {
      arrow.classList.toggle('rotated');
});
arrow.addEventListener('click', () => {
  if (imgBlock.style.display === 'block') {
    imgBlock.style.display = 'none';
  } else {
    imgBlock.style.display = 'block';
  }
});


