# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

- Mobile: [https://github.com/rogeriobautz/base-apparel/blob/master/screenshots/mobile.png]
- Desktop: [https://github.com/rogeriobautz/base-apparel/blob/master/screenshots/desktop.png]
- Active: [https://github.com/rogeriobautz/base-apparel/blob/master/screenshots/active.png]

### Links

- Solution URL: [https://github.com/rogeriobautz/base-apparel/]
- Live Site URL: [https://rogeriobautz.github.io/base-apparel/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to do email validation in two different ways and combine them to make even better.

```js
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
```

### Continued development

I'm still take too long to find the answers.
I need to improve my ui/ux skills to better adapt bad designs.

### Useful resources

- [Stack Overflow](https://www.stackoverflow.com)
- [Tutorials Camp](https://tutorialscamp.com/how-to-validate-an-email-address-in-javascript/) - This is an amazing article which helped me with email validation

## Author

- [Rogério Bautz](https://github.com/rogeriobautz)
- Frontend Mentor - [@rogeriobautz](https://www.frontendmentor.io/profile/rogeriobautz)
- Instagram - [@rogerio.bautz](https://www.instagram.com/rogerio.bautz)
