const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.7,
    infinite: false,
    guestureOrientation: 'vertical',
    normalizeWheel: false,
    smoothTouch: false
  })
    
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
  
requestAnimationFrame(raf)