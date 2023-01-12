const toggleRead = document.querySelector('.toggleRead')
const notifications = document.querySelectorAll('.notification')
const dot = document.querySelectorAll('.dot')
const notifsNum = document.querySelector('.notifsNum')

let read = false;
toggleRead.addEventListener('click', () => {
  if (read === false) {
    Array.from(notifications).forEach((e) => {
      if (!e.classList.contains('read')) {
        e.style.backgroundColor = "var(--VeryLightGrayishBlue)"
        e.querySelector('.dot').style.backgroundColor = "white"
        notifsNum.innerText = "0"
        read = true
      }
    })
  }
  else {
    Array.from(notifications).forEach((e) => {
      if (!e.classList.contains('read')) {
        e.style.backgroundColor = "var(--LightGrayishBlueOne)"
        e.querySelector('.dot').style.backgroundColor = "var(--Red)"
        notifsNum.innerText = "3"
        read = false
      }
    })
  }
})