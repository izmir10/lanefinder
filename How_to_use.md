# LANEFINDER CHALLENGE

## ✔ *How to install the project*

## Pre-requisites
- Download and install Node.js
- Download and install any Text Editor (ie Visual Code)
- Install Playwright VS Code Extension from the Marketplace

## Setup Scripts
- Clone the repository into a folder (https://github.com/izmir10/lanefinder.git )
- Go to Project root directory and install Dependency: npm install
- All the dependencies from package.json would be installed in node_modules folder.

## How to Run Test
- Go to Project root directory and run all the tests: 
    - npx playwright test
- Running single test file:
    - npx playwright test < Test File Name >
- Running tests in headed mode:
    - npx playwright test --headed
- By default, the HTML report is opened automatically if some of the tests failed. If you need to open the report manually you can use the following command: 
    - npx playwright show-report
- Alternatively, the tests can be run manually through Playwright test extension