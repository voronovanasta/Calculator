 ## “Task” 
 Task: https://drive.google.com/file/d/1ZiJTP55AjIml14wh6x05yd99flX_J3wB/view?usp=drive_link

 ## Deploy
 Deploy: https://voronova-calculator.netlify.app/

 ## Installation

Step-by-step installation instructions to set up the project locally:

1. Clone the repository to your local machine:
   git clone https://github.com/voronovanasta/Calculator.git

2. Install the project dependencies using your preferred package manager:

- Using npm:
  npm install

**Note!** The project runs on the version Node.js 22.9.0.

4. Run the project locally:

- Using npm:
  npm start

## Project Structure

The project's directory structure is organized in the following way:

- **src/**: This folder contains the source code for the project.

  - **js/**: Stores Calculator MVC, every component according to this pattern stores in its folder respectively.
    - **controller**: stores controller js file for calculator,
    - **model**: stores model js file for calculator,
    - **view**: stores view js file for calculator,
  - **css/**:  Holds global style files and theme-related configurations.

- **public/**: The build output from Webpack when the project is compiled and bundled for production deployment.

## Scripts

#### `npm start`

Description: Run the project using the development server.

#### `npm run build`

Description: Build the project for production transpiling JS code and generating a production-ready build of the application in a single command.

#### `npm run lint`

Description: Run ESLint to check for code quality and formatting issues and attempt to automatically fix any fixable issues found in the code.

Description: Initialize the "husky" package, configuring and setting up Git hooks according to the project's defined configuration, ensuring that the defined hooks are in place and ready to be used during development.
