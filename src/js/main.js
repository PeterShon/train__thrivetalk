import $ from '../local_modules/jquery/dist/jquery.min'
import { transferScrollbarWidth, getEventResizeWindow, transferPercentOfWay } from '../js/body.js'
import { twistWhirligig } from '../js/whirligig.js'
import { animOfAppear } from '../js/anim-of-appear.js'
import { minHeader, changeBurger } from '../js/header.js'
import { moveUp } from '../js/move-up.js'


$(document).ready(() => {
  transferScrollbarWidth()
  getEventResizeWindow()
  getScrollInfo()
  animOfAppear()
  moveUp()
  changeBurger()
})

function getScrollInfo() {
  let scrollValue = 0
  let scrollTop = window.pageYOffset

  transferPercentOfWay(getPercentOfWay())
  document.addEventListener(`scroll`, () => {
    if (scrollTop < window.pageYOffset) {
      scrollValue++
    } else {
      scrollValue--
    }
    scrollTop = window.pageYOffset
    twistWhirligig(scrollValue)
    minHeader(scrollTop)
    transferPercentOfWay(getPercentOfWay())
  })
  return false
}

function getPercentOfWay() {
  let percentOfWay
  const windowHeight = window.innerHeight
  const scrollTop = window.pageYOffset
  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  )
  percentOfWay = ((scrollTop) / (scrollHeight - windowHeight)) * 100
  return percentOfWay
}
