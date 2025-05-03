
const arrow = document.getElementById('arrow');
arrow.addEventListener('click', () => {
  arrow.classList.toggle('rotated');
});
function toggleBlock(){
  const imgBlock = document.getElementById('ImgBlock');
  if (imgBlock.classList.contains('visible')) {
    imgBlock.classList.remove('fade_in');
    setTimeout(() => {
      imgBlock.classList.remove('visible');
    }, 500);
  } else {
    imgBlock.classList.add('visible');
    setTimeout(() => {
      imgBlock.classList.add('fade_in');
    }, 10); 
  }
}