
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
const arrow2 = document.getElementById('arrow2');
arrow2.addEventListener('click', () => {
  arrow2.classList.toggle('rotated');
});
function toggleBlock2(){
  const imgBlock2 = document.getElementById('ImgBlock2');
  if (imgBlock2.classList.contains('visible')) {
    imgBlock2.classList.remove('fade_in');
    setTimeout(() => {
      imgBlock2.classList.remove('visible');
    }, 500);
  } else {
    imgBlock2.classList.add('visible');
    setTimeout(() => {
      imgBlock2.classList.add('fade_in');
    }, 10); 
  }
}