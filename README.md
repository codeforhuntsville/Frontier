[![Stories in Ready](https://badge.waffle.io/codeforhuntsville/Frontier.png?label=ready&title=Ready)](https://waffle.io/codeforhuntsville/Frontier)

# Frontier
Frontier is an app that lets you give it your location and then returns a list of accessible resources nearby. For example, it might tell you the nearest open restaurants, the nearest open gas stations, the nearest public wifi hotspots, the nearest public restrooms, or the nearest open towing/mechanic shops.

## Tools/Resources

* We use Waffle to project-manage Frontier. [Create/view tasks here](https://waffle.io/codeforhuntsville/Frontier).
* We chat about Frontier/Code for Huntsville on Slack. [Join Slack here](http://tech256.com).
* We've made a big list of layers/APIs. [View them in our Wiki](https://github.com/codeforhuntsville/Frontier/wiki/Masterlist-of-layers-and-public-APIs).
* We meet every Wednesday night to work on Frontier. [Meetups are organized here](http://www.meetup.com/Hack-Huntsville).

## Mockups
We intend to build Frontier as a hybrid web/mobile HTML app so that it is usable on any device.

<img src="http://i.imgur.com/KzCHSbC.jpg" height="450">

### Wireframes

* [V1.1 wireframes made by Abbie](https://frcv.net/files/mockups/Wireframe-OnTheFly_V1.pdf)
* [V1.2 wireframes made by Chris](http://lrdy2r.axshare.com/)
* [Whiteboard photos from previous hack nights](https://frcv.net/files/mockups/meetups-whiteboard/) 
 
## Tech Stack

We're building our back-end in Node.js and our front-end in React. At the moment, we're not using a database because we're pulling data into Frontier dynamically via various public APIs.

## Front-End

We're building the front-end for Frontier in HTML/CSS/JS, which we'll later be converting to React. [Check out the front-end code in Codepen](http://codepen.io/chadxz/full/waobOw/).

## License
[MIT](/LICENSE.txt)

## Setup using a Virtual Machine

1. [Install VirtualBox](https://www.virtualbox.org/)
1. [Download Ubuntu ISO](http://www.ubuntu.com/) (or your favorite distro . These instructions are Debian-based.)
1. Live boot Ubuntu with Virtual Box. After installation, install these packages via terminal:
  * `sudo apt-get update`
  * `sudo apt-get install git`
  * `sudo apt-get install nodejs`
  * `sudo ln -s /usr/bin/nodejs /usr/bin/node`
  * `sudo apt-get install npm`
  * `sudo apt-get install docker.io`
1. Clone repo, install dependencies:
  *  `git clone https://github.com/codeforhuntsville/Frontier`
  * `cd Frontier`
  * `npm install`
1. Setup docker
  * `sudo usermod -aG docker <your Linux username>`
  * Reboot the server
  * Log back in.
  * `docker build -t "frontier" .` (Lowercase, and notice the dot at end)
  * `make build`
1. Run the server:
  * `make run GOOGLE_PLACES_API_KEY=supersecretkey`

The server will start locally and on ngrok. The restaurants will not load because you do not have a Google Places API key yet. That key will replace `supersecretkey`. To stop the server, use Ctrl+C.

This is the standard use case for deploying the server for general access on the internet.  Developers see the Developers section below for launching the server for development and testing locally.

## Google Places Key

1. Go to https://code.google.com/apis/console/ to register for an API key.
1. Create a new project, (e.g. Frontier).
1. Select APIs in the left.
1. Register for "Google Places API Web Service" key (click the MORE link under Maps).
1. Enable the API.
1. Go to Credentials in the left.
1. Create a new Public Access browser key. Don't worry about IP restrictions (this is for development).
1. Your key will be generated. Use that key in place of `supersecretkey` each time you `make run GOOGLE_PLACES_API_KEY=supersecretkey`

## City of Huntsville APIs

* [Here is the City's list of layers](http://maps.huntsvilleal.gov/arcgis/rest/services/Layers), each of which provides a REST endpoint from which we can query data. 
* [Here's an example of a URL where you might query data](http://maps.huntsvilleal.gov/arcgis/rest/services/Layers/ParkLocations/MapServer/0/query).

## Developers

Instead of building the server and launching the server via make run, an alternative method to start the server is:
>export GOOGLE_PLACES_API_KEY=supersecretkey
>cd Frontier
>npm start

This eliminates having to build the whole docker image allowing for faster debug cycles.

