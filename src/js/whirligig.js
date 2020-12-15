/* whirligig */
export function twistWhirligig(strength) {
  var whirligig = document.querySelectorAll('.whirligig');
  if (whirligig) {
    let strength_of_twist = 1
    for (let i = 0; i < whirligig.length; i++) {
      const el = whirligig[i];
      el.style.setProperty('transform', 'rotate(' + -strength * strength_of_twist + 'deg)')
    }
  }
}