# WebDriverIO structure
Project for the e2e automated tests

After cloning this repository, execute the following comamnd to install the dependecies: npm install

To execute the tests, using the WebDriverIO config file, use the command: ./node_modules/.bin/wdio wdio.conf.js

This command creates a container with a selenium server, using a chrome standalone image: docker run -p 127.0.0.1:4444:4444 selenium/standalone-chrome:latest

Selenium Grid console: http://localhost:4444/grid/console



Some possible helpful repositories to assist i the Docker configuration:

https://github.com/hulilabs/webdriverio/blob/master/docker-compose.yml
https://github.com/serbanghita/webdriverio-docker

Element locators references:
http://v4.webdriver.io/guide/usage/selectors.html
http://www.webdriverjs.com/element-selectors-in-webdriverio/

Some debug instructions:
https://www.youtube.com/watch?v=xWwP-3B_YyE

