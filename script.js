const hours1 = document.querySelector('#hours-1'),
  hours2 = document.querySelector('#hours-2'),
  minutes1 = document.querySelector('#minutes-1'),
  minutes2 = document.querySelector('#minutes-2'),
  seconds1 = document.querySelector('#seconds-1'),
  seconds2 = document.querySelector('#seconds-2')

const hours1Lens = hours1.querySelector('.lens'),
   hours2Lens = hours2.querySelector('.lens'),
   minutes1Lens = minutes1.querySelector('.lens'),
   minutes2Lens = minutes2.querySelector('.lens'),
   seconds1Lens = seconds1.querySelector('.lens'),
   seconds2Lens = seconds2.querySelector('.lens')

const marginValue = 40

function setTime(){
  const date = new Date(),
    hours = date.getHours().toString().length < 2 ? '0' + date.getHours().toString() : date.getHours().toString(),
    minutes = date.getMinutes().toString().length < 2 ? '0' + date.getMinutes().toString() : date.getMinutes().toString(),
    seconds = date.getSeconds().toString().length < 2 ? '0' + date.getSeconds().toString() : date.getSeconds().toString()
  hours1.style.marginTop = `${marginValue * hours[0] + marginValue * 7}px`
  hours2.style.marginTop = `${marginValue * hours[1]}px`
  minutes1.style.marginTop = `${marginValue * minutes[0]}px`
  minutes2.style.marginTop = `${marginValue * minutes[1]}px`
  seconds1.style.marginTop = `${marginValue * seconds[0]}px`
  seconds2.style.marginTop = `${marginValue * seconds[1]}px`
  
  hours1Lens.parentNode.style.marginTop = `${marginValue * 9 - (marginValue * hours[0] + 280)}px`
  hours2Lens.parentNode.style.marginTop = `${marginValue * 9 - marginValue * hours[1]}px`
  minutes1Lens.parentNode.style.marginTop = `${marginValue * 9 - (marginValue * minutes[0])}px`
  minutes2Lens.parentNode.style.marginTop = `${marginValue * 9 - (marginValue * minutes[1])}px`
  seconds1Lens.parentNode.style.marginTop = `${marginValue * 9 - (marginValue * seconds[0])}px`
  seconds2Lens.parentNode.style.marginTop = `${marginValue * 9 - (marginValue * seconds[1])}px`

  clearActives()
  let hours1Nums = hours1.querySelectorAll('.number')
  hours1Nums[2 - hours[0]].classList.add('number-active')
  let hours2Nums = hours2.querySelectorAll('.number')
  hours2Nums[9 - hours[1]].classList.add('number-active')
  let minutes1Nums = minutes1.querySelectorAll('.number')
  minutes1Nums[9 - minutes[0]].classList.add('number-active')
  let minutes2Nums = minutes2.querySelectorAll('.number')
  minutes2Nums[9 - minutes[1]].classList.add('number-active')
  let seconds1Nums = seconds1.querySelectorAll('.number')
  seconds1Nums[9 - seconds[0]].classList.add('number-active')
  let seconds2Nums = seconds2.querySelectorAll('.number')
  seconds2Nums[9 - seconds[1]].classList.add('number-active')


}

function clearActives(){
  let nums = document.querySelectorAll('.number')
  nums.forEach(item => {
    item.classList.remove('number-active')
  })
}


setInterval(() => {
  setTime()
}, 1000);