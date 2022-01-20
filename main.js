const pattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

document.getElementById('email-input').addEventListener('keyup', event => {
  if (
    !event.target.checkValidity() ||
    !pattern.test(event.target.value.toLowerCase())
  )
    document.getElementsByTagName('form')[0].classList.add('error')
  else document.getElementsByTagName('form')[0].classList.remove('error')
})
