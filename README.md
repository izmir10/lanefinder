### **1- What are the downsides with the test implementation as it is implemented and what would you suggest for changes on lanefinder.com to mitigate these?**

*- I tested only a limited portion of the lanefinder.com website. Thus these comments might be superficial.*

*- Locating web elements are important in test automation and can create problems during the development and adding new functioalities phases. Thus, unique id names could be used more often to increase the maintainability of the framework.* 


### **2- What strategy would you like to use in order to mitigate false positives and flaky tests?** 

*- There are a number of reasons that cause fleaky tests or false positives. They can be different in the backend and UI part; but these reasons are mainly caused by 3rd party APIs, instable test environment, poorly written tests, or changing locators.*

*- I try to use meaningful and varied data, including edge cases and negative testing as much as possible to reduce the chances of false positives.*

*- Structuring the framework with stable elements and scheduling tests & maintenance in a regular basis is also important. I regularly maintain and update the tests to reflect any changes in the code or environment. In my framework I prefer to implement POM and try to avoid hardcoding. These make the framework more flexibla and maintainabile.*

*- Refactoring the test suite to remove redundant tests and ensuring that tests are focused on specific functionality helps to mitigate fleaky tests.* 

*- There are also some self-healing test automation tools in the market and these new tech solutions can be implemented for this purpose too.*

### **3- Please suggest a couple of changes that we should implement on lanefinder.com to enable your findings in question1 and 2.**

*- I really liked the design of the web site. It is very dynamic and handy. But from a visual perspective, at the mainpage, "Show # Jobs" button's responsiveness can be increased. It takes a while to finish countdown after filtering.*

*- It was time consuming to locate some of the elements, because there were a number of elements sharing same attributes and values with quite long class names at the DOM. This can be overcome by increasing unique id's in the HTML source. This will also make the test framework easy to maintain.*

*- As a final remark; this was the first time I used used Playwright. So I needed to learn and implement a new tool in a very short time for this task. Thus I could not avoid hardcoding or implement POM.*

*But it was fun though!*

## ✔ *Task:* 
To create on UI automated test cases using Playwright 

*Steps:*

- Opens the page lanefinder.com 
- Set up a job filter 
- Searches for jobs
- Select one job

- Including a how to use 
- Including Readme file (answer to 3 questions listed below)
- Including a Jenkins file
- All in a zip file able to run by "npm run" command after unzipping

*Questions:*
- What are the downsides with the test implementation as it is implemented and what would you suggest for changes on lanefinder.com to mitigate these?
- What strategy would you like to use in order to mitigate false positives and flaky tests? 
- Please suggest a couple of changes that we should implement on lanefinder.com to enable your findings in question1 and 2.
