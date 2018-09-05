# Ionic Conference Application


## Table of Contents
 - [Setup](#setup)
 - [Deploying](#deploying)


## Setup

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/lemonsmatt/MAS_Programming1.git`
* Run `npm install` from the project root.
* Run `npm install --save firebase` in a terminal from the project root.
* Run `ionic serve` in a terminal from the project root.


## Deploying
* Android - Run `ionic cordova run android --prod`
  - If you are deploying to Android 4.4 or below we recommend adding crosswalk: `cordova plugin add cordova-plugin-crosswalk-webview`
* iOS - Run `ionic cordova run ios --prod`