## PWA - Text Editor

## Link to Deployed Assets
https://racheldmarron.github.io/jate-the-pwa/ <br>
HEROKU GOES HERE 

## Overview 
Using PWA criteria and IndexedDB API, this application is a text editor that runs in the browser. The application is also able to function offline.

## User Story
```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use 
```

## Acceptance Criteria
```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## How This Was Achieved
<ul>
<li>Created and index.js file and pulled the inquirer through node using an npm init and npm install </li>
<li> Added a generatemarkdown file where the formatting of the README file lives</li>
<li>When a user uses node index.js on the command line, they are walked through generated questions they can answer to create their readme file</li>
<li>Using the writetofile and init functions, a readme generator is created once the user answers all the questions on the command line</li>
</ul>

## Visual Representations
## Images 

![](./assets/images/readme-generator-ref-1.png)
![](./assets/images/readme-generator-ref-2.png)

## Contributors

- N/A

## License

This application is covered under MIT License    

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

- - -
© 2022 Rachel Delaney Marron, Inc. All Rights Reserved.