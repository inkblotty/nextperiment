# Nextperiment

### An experiment in Next.js and Material-UI

### Overview:
Demo: [nextperiment-ipujvzewlm.now.sh](https://nextperiment-ipujvzewlm.now.sh/)

To start this app locally, run `npm run dev` via the root folder.


## Features:

- Loads a random list of users via [randomuser.me](https://randomuser.me/)
- Able to generate a new set of users
- Able to paginate users by groups of 20
- View User Details in Modal Dialog
- All features shipped with Next (server-side rendering, etc.)
- Not Done: Not fully responsive on all small devices


## Utilizes:

- ES6+
- Node & Next
- React
- Material UI Components


## Thoughts:
These are initial thoughts and observations based on this one encounter.

### Material UI
- Default styles are beautiful, easy to use, good UI
- Unnecessary markup added (i.e. RaisedButton has a button with div > div > span inside for a simple line of text)
- Default tags are not always semantic (GridList is just a div, etc.)


### Styled JSX
- All styles & markup in one place
- Good for small apps
- Takes more workarounds for global styles, utility classes and reuability, esp. when responsiveness & accessibility are concerned
- TO DO: Read more on media queries and approaches to resuability; Sass syntax use may be good balance


### Next
- Super easy to bootstrap
- Server and Client rendering handled for you
- Somewhat configurable (next.config.js recently added)
- Easy to use popular packages like Redux

- No root-level access / global entry point for common utilities, providers, environment config, etc.
    * Must import global layout and initialization into every single page

- Does not utilize React Router *yet* -- componentized and nestable routes are a huge feature of React ecosystem
