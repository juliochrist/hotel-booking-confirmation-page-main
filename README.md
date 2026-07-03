# Frontend Mentor - Hotel Booking Confirmation Page

![Design preview for the Hotel booking confirmation page coding challenge](./preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Build a hotel booking confirmation page for **Maison Soleil**, matching the given designs as closely as possible.

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for all interactive elements
- Open and close the navigation menu on smaller screens
- Copy the Wi-Fi password to their clipboard using the copy button

Extra features I added:

- Print the receipt using the browser's print dialog
- Download an `.ics` calendar file generated from the booking dates ("Add to calendar")

### Screenshot

![Desktop screenshot](./design/desktop-design.jpg)

### Links

- Solution URL: [Add your GitHub repo link here]
- Live Site URL: [Add your deployed site link here]

## My process

### Built with

- Semantic HTML5
- CSS custom properties (design tokens for color, type, radius, shadow)
- CSS Flexbox and Grid
- Mobile-first responsive workflow
- Vanilla JavaScript (no frameworks/libraries)

### What I learned

This challenge was mainly about layering: getting the receipt and welcome
cards to overlap convincingly, then having them "fan out" on hover using
`transform: rotate()` combined with `translate()`.

Mobile-first meant starting with the cards stacked normally in document flow,
then switching to `position: absolute` only from the `768px` breakpoint up:

```css
.card {
  position: absolute;
  top: 0;
  left: 50%;
}

.card--receipt {
  transform: translateX(-62%) rotate(-4deg);
}

.card-stack:hover .card--receipt {
  transform: translateX(-85%) rotate(-8deg) translateY(-6px);
}
```

I also used the Clipboard API for the Wi-Fi password copy button, with a
temporary "Copied" state for feedback:

```js
await navigator.clipboard.writeText(value);
```

### Continued development

- Revisit the card-stack animation on touch devices, since `:hover` doesn't
  translate directly to mobile/tablet
- Look into `prefers-reduced-motion` to respect users who don't want the
  fan/rotate transition

## Author

- Frontend Mentor - [Add your Frontend Mentor profile link here]
- GitHub - [Add your GitHub profile link here]
