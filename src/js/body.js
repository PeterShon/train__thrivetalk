/* body */
export function transferScrollbarWidth() {
  let clientWidth = document.body.clientWidth;
  let windowWidth = window.innerWidth;
  let scrollbarWidth = windowWidth - clientWidth;
  let bodyEL = document.querySelector('body');
  bodyEL.style.setProperty('--scrollbar-width', scrollbarWidth + 'px');
}

export function getEventResizeWindow() {
  //let windowHeight = window.innerHeight
  return window.addEventListener('resize', () => {
    transferScrollbarWidth();
    //return windowHeight = window.innerHeight
  })
}

/* body --- transferPercentOfWay */
export function transferPercentOfWay(percent) {
  let bodyEL = document.querySelector('body');
  bodyEL.style.setProperty('--percent-of-way', percent + '%');
}