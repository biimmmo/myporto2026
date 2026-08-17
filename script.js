// Documentation figures: if PictureN.png hasn't been added to the repo yet,
// the image fails to load — show the dashed placeholder instead. Once the
// real file is uploaded with the matching name, this box disappears and the
// photo displays at its own natural size automatically.
document.querySelectorAll('.figure-img').forEach(img => {
  img.addEventListener('error', () => {
    img.closest('.figure').classList.add('is-empty');
  });
});

const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold:0.12 });
    revealEls.forEach(el=>io.observe(el));
  } else {
    revealEls.forEach(el=>el.classList.add('in'));
  }
