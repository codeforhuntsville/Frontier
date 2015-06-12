[![Stories in Ready](https://badge.waffle.io/codeforhuntsville/Frontier.png?label=ready&title=Ready)](https://waffle.io/codeforhuntsville/Frontier)

# Frontier

Frontier is an app that lets you give it your location and then returns a list of accessible resources nearby. For
example, it might tell you the nearest open restaurants, the nearest open gas stations, the nearest public wifi
hotspots, the nearest public restrooms, or the nearest open towing/mechanic shops.

## Tech
This project is built using [node.js](https://nodejs.org/). It uses the [express](http://expressjs.com/) web application
framework on the backend to serve the website and provide APIs for the website to access data. The frontend is built
using [React](https://facebook.github.io/react/) & [Bootstrap](http://getbootstrap.com/). The frontend assets are
compiled using the [Webpack](http://webpack.github.io/) module bundler and [Babel](https://babeljs.io/) compiler to
allow the use of [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and next generation Javascript features.

## Setup

1. [install node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) on your computer
1. [setup git](https://help.github.com/articles/set-up-git/) on your computer
1. [clone this repository](https://help.github.com/articles/fetching-a-remote/): `git clone https://github.com/codeforhuntsville/Frontier.git`
1. `npm install` in the cloned directory to install the required packages
1. obtain a Google Places API Key (see instructions below)
1. copy the file `config/default.js` to `config/local.js`, then fill in the `googlePlacesApiKey` property value with
your key
1. `npm start` to run the server

#### Google Places API Key
We use the [Google Places API](https://developers.google.com/places/) as a source for some of the data in Frontier. In
order to make requests to the API, you must obtain an API key and configure Frontier to use it.

1. Navigate to the [Google Developers Console](https://console.developers.google.com)
1. Create a new project, (e.g. "Frontier")
1. Select APIs on the left
1. Click "Google Places API Web Service" under the "Google Maps APIs" section
1. Enable the API
1. Go to "Credentials" on the left
1. Create a new "Public API Access" "Server" key. Don't worry about IP restrictions for now
1. Plug this key into the config in Frontier.

## Join our community

- We use Waffle to project-manage Frontier. [Create/view tasks here](https://waffle.io/codeforhuntsville/Frontier).
- We chat about Frontier/Code for Huntsville on Slack. [Join Slack here](http://tech256.com).
- We use the wiki to keep track of notes and resources. [View the Wiki](https://github.com/codeforhuntsville/Frontier/wiki/).
- We meet every Wednesday night to work on Frontier. [Meetups are organized here](http://www.meetup.com/Hack-Huntsville).

## License
[MIT](LICENSE)
