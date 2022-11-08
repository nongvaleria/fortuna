# INSTRUCTION



```text
How to install the project and run the tests...
```
​
### STEP 1: GitHub repository


​
Go to your personal GitHub accocunt and create a new repository. 
By opening the corresponding page 'github.com/new' you will need to specify the following parameters in order to create a project:
​
```text
- Repository name
- Description (optional)
- Make a 'Public' repository
- Add a README file - yes
```
​
When all the parameters are filled in, hit the button 'Create repository'. Repository should be created.
After completing all the steps mentioned above, you need to clone the newly created repository to our local machine.You can do it manually or executing the following command 'git clone *copied link of the repository*'.


​
### STEP 2: Make a project structure

​1. Open terminal and navigate to the project root
2. Initialize the project with the following command 'yarn init'. You will go through a set of basic questions as shown in an example below
​
```json
{
  "name": "hometask-project-set-up",
  "version": "1.0.0",
  "description": "This is my first project",
  "main": "index.js",
  "author": "rsledevskis",
  "license": "MIT"
}
```
​
3. Check that the 'package.json' has been created and added to the repository
4. Add the following files and folders to your project
- 'README.md' file
- '.gitignore' file
- 'js' folder 
- 'tests' folder 
​
So far the project structure should look like this:
​
```text
project_name
    - js (folder)
    - tests (folder)
    - .gitignore (file)
    - package.json (file)
    -README.md (file)
```
​
### STEP 3: Project confguration
​

Since the project will contain javascript functions and the tests as well, it is needed to add the testing library, that we have discovered so far "JEST".
​
1. Let's add JEST as development dependency with the command:
```text
 yarn add --dev jest
```

2. Also we need to install additional configuration to avoid any difficulties while executing tests. To use Babel, install required dependencies:

```text
 yarn add --dev babel-jest @babel/core @babel/preset-env
```
3. Check the 'package.json' file if the dev dependencies were added
​
```json
  "devDependencies": {
    "@babel/core": "^7.20.2",
    "@babel/preset-env": "^7.20.2",
    "babel-jest": "^29.3.0",
    "jest": "^29.3.0"
  },
```
4. Configure Babel to target your current version of Node by creating a 'babel.config.cjs' file in the root of your project and add the following text in it:
```text
 module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```
4. The following text lines should be added to the '.gitignore' file.
​
**A gitignore file specifies intentionally untracked files that Git should ignore.**
​
During development inside the project can appear files, that shouldn't be tracked by git, because they are generated automatically by different reasons e.g. code editor, node, frameworks, etc. Thet are not affecting the code, but they are updating constantly, which forces you manually skip them during commit, so it can be easily skipped by adding them to .gitigore.
​
```text
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
​
# Dependency directories
node_modules/
​
#IntelliJ
.idea
```

​
### STEP 4: Add JavaScript functions
​
- Add '.js' file inside the 'js' folder. Name it.( *Example: 'my.js'*)
- Add the functions in it.

​
### STEP 5: Creating tests
​
- Create a test file inside the folder "tests" 
- Name the file "test.js"
- Write tests for the functions provided in the '.js' file


        
### STEP 6: Executing tests


- Run the project executing the following command:

```text
 node js/my.js
```

- Run your tests with executing the following command:

```text
 yarn jest
```

- The successful execution of the tests will be marked as 'PASSED' in the terminal.

***MY CONGRATULATIONS AND BEST REGARDS!!!***
