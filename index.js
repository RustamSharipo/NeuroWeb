const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.05
});
const introduction = document.querySelectorAll('.header_introduction');
const header_img = document.querySelectorAll('.header_img');
const main_text_size = document.querySelectorAll('.main_text_size');
const examples_block = document.querySelectorAll('.examples_block');
const tim = document.querySelectorAll('.tim');
const example = document.querySelectorAll('.example');
example.forEach(ex => observer.observe(ex));
tim.forEach(t => observer.observe(t));
examples_block.forEach(eb => observer.observe(eb));
main_text_size.forEach(mts => observer.observe(mts));
header_img.forEach(hi => observer.observe(hi));
introduction.forEach(int => observer.observe(int));






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
const arrow3 = document.getElementById('arrow3');
arrow3.addEventListener('click', () => {
  arrow3.classList.toggle('rotated');
});
function toggleBlock3(){
  const imgBlock3 = document.getElementById('ImgBlock3');
  if (imgBlock3.classList.contains('visible')) {
    imgBlock3.classList.remove('fade_in');
    setTimeout(() => {
      imgBlock3.classList.remove('visible');
    }, 500);
  } else {
    imgBlock3.classList.add('visible');
    setTimeout(() => {
      imgBlock3.classList.add('fade_in');
    }, 10); 
  }
}
const arrow4 = document.getElementById('arrow4');
arrow4.addEventListener('click', () => {
  arrow4.classList.toggle('rotated');
});
function toggleBlock4(){
  const imgBlock4 = document.getElementById('ImgBlock4');
  if (imgBlock4.classList.contains('visible')) {
    imgBlock4.classList.remove('fade_in');
    setTimeout(() => {
      imgBlock4.classList.remove('visible');
    }, 500);
  } else {
    imgBlock4.classList.add('visible');
    setTimeout(() => {
      imgBlock4.classList.add('fade_in');
    }, 10); 
  }
}
