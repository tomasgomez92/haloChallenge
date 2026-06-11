# Halo Challenge - QA Automation
  
#  Index
  1. General Structure 
  2. Wdio config
  3. Feature files 
  4. Step definitions 
  5. Page Objects 
  6. Utils 
  7. Configuration
  8. Test Coverage

  # 0. This project contains an automated test suite for SauceDemo implemented using:
  
  - WebdriverIO
  - TypeScript
  - Cucumber
  - Page Object Model
  
  The solution covers the following business flows:
  
  - Login
  - Product Detail Page
  - Cart Management
  - Checkout
  - Order Completion
  
  The framework was designed following Page Object Model principles to improve maintainability and scalability.
  
  # 1. General Structure 💾
  
  The project is structured as follows: 
  - 🔋 features: main folder containing: feature files, step definition files and page object files 
  - 🛠 utils: folder containing enums that are used by the different tests
  - 🫀 wdio.config.ts: main configuration file containing all details for test excecutions
  
  # 2. Wdio Config 🧠
  
  This file contains all the configuration needed to run the tests. In order to understand it better please refer to https://webdriver.io/docs/configurationfile. The main sections to be configured in this documents are: 
  
  - Capabilities array: it contains browser objects with the desired capabilities for each one. Right now the project supports Chrome. If you need to modify something browser-related this is the place to do it. 
  - baseUrl: this is the url used to open the browser, ⚠️this value may be change but it must be returned to its default value before pushing code⚠️
  - Reporters array: contains configuration for each desired reported
  - cucumberOpts: object in which all cucumber configurations are stored.
  - Hooks: we use hooks to define actions that we need to execute at a certain moment.
  
  # 3. Feature Files 📑
  
  Each .feature file describes a set of scenarios that are englobed under the same functionality. They are written in Gherkin (https://cucumber.io/docs/gherkin/) and follow a certain set of DOs and DON'Ts: 
  
  
  # 4. Step Definitions 💬
  
  These files are in charge of translating the .feature files into TypeScript code. This is the place from which we call our Page Objects and their methods to simulate the different user actions. 
  
  Each step definition file corresponds to only one Page Object, all the steps that take place in a given page must be under the same step definition file. That's why the files are named as follow: [pageName].steps.ts (example: item.steps.ts).
  
  # 5. Page Objects 🖥
  
  Page Object files are TypeScript classes that represent a page in our application (example: Login Page, Item Page, Inventory Page, etc). Each page inherits from a Page.ts class that contains shared methods as well as the constructor. Each Page Object class has a certain amount of elements (which represent the different elements on a page) and methods (which represent user actons). 
  
  SELECTORS: The elements are obtained using the selectors provided by WebdriverIO $$(condition) or $(condition). The first one returns all web elements that match that condition whilst the latter only returns the first result. That condition is a CSS selector that represent the element we are looking for. 
  
  Example: 
  - I want to locate the firstName input, that has an Id = "firstName" => $('#firstName') [Single element selector]
  - I want to locate the different li inside an ul with a className = "rated-rewards" => $$('.rated-rewards li') [Multiple elements selector]
  
  # 6. Utils 🧰
  
  Utils folder contains files that are used to assert, transform, provide data to the tests. This is its content: 
  
  - enums.ts: contains enums commonly used in classes / steps and text data to run the tests (user, messages, etc)
 
 Notes:
  - ✅ Define enums to use in switch cases
  - ✅ Define all data/text in enums/ts
  
  
  # 7. Configuration

  1- Install NodeJS: https://nodejs.org/en/
  
  2- Clone the repository in a local file.
  
  3- Install all the dependencies: npm i
  
  4- Now you are available to execute the test cases: npx wdio run ./wdio.conf.ts

  # 8. Test Coverage

  ### Login
  - Successful login
  - Invalid credentials
  - Locked user
  
  ### Product Details
  - Product information validation
  
  ### Cart
  - Add items
  - Remove items
  - Cart badge validation
  - Cart item details validation
  
  ### Checkout
  - Checkout summary validation
  - Form validation errors
  - Total calculations
  
  ### Order Completion
  - Successful purchase
  - Purchase cancellation
