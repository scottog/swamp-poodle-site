# Swamp-Poodle-Software.com

Root folder for the website for Swamp Poodle Software
License: ISC / MIT / OpenSource

# Details

A repo for all the things needed to deisng and build the Swamp Poodle Software website. Leverages microfrontend approach. Can be used as a template by others to have a better time making things worth making.
Uses the awesome open source project Single-SPA to do its magic.

# Instructions

- Download / clone / fork repository.
- Open in a terminal with NPM installed
- Nav to each subdirectory of `./web/`
- `npm ci`
- To run locally, `npm start` in each directory.
- To build a deployable version, `npm start build` from project root.
- To deploy, create a Pull-Request back to master branch in GitHub.com and merge it (either to your fork or the root repository).
  \*\* GitHub Actions will take care of the rest.

# How to add a new component

- In `./web/` run `npx create-single-spa`
- Fill out fields, using "Directory for new project" to dictate where and what the new component will be.

## How do I develop a microfrontend?

### To develop this microfrontend, try the following steps:

Copy the following URL to your clipboard: http://localhost:8080/swamp-poodle-main.js
In a new browser tab, go to the your single-spa web app. This is where your "root config" is running. You do not have to run the root config locally if it is already running on a deployed environment - go to the deployed environment directly.
In the browser console, run localStorage.setItem('devtools', true); Refresh the page.
A yellowish rectangle should appear at the bottom right of your screen. Click on it. Find the name @swamp-poodle/main and click on it. If it is not present, click on Add New Module.
Paste the URL above into the input that appears. Refresh the page.
Congrats, your local code is now being used!

To run standalone: `npm start -- --port 8500`
