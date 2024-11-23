# Introduction

The documentation for our Playwright framework infrastructure. This guide is designed to provide you with all the necessary information to understand my implementation of Playwright, including setup instructions, usage examples, and best practices.

# Tools required

- Visual Studio Code with extensions (Playwright Test for VSCode, vscode-icons, Git Extension Pack)
- [nvm](https://github.com/nvm-sh/nvm)
- node 20.10.0/npm 10.2.3

# Installation steps

- npm ci
- npx playwright install (install playwright browsers)

# Playwright run commands

- _UI MODE_: to run tests with the Playwright test runner in UI mode - `npx playwright test --ui`
- _Headed Mode with Debugging_: to run tests in a visible browser (headed mode) with debug option - `npx playwright test --ui --debug --headed`
- _Selective Test Execution_: you can mark specific tests to run using `.only` option with debug option - `npx playwright test --debug --headed`
- _Selective Test Execution_: you can mark specific tests to run using `.only` option without debug option - `npx playwright test`

# Running tests

**Note**: None of the tests have gone through dry runs due to the restrictions from ReCAPTCHA

- _Initial run_: Test will start with homepage with page pause in between to handle captcha verification with manual intervention
- _Parallel running_: All the tests are independent of each other to enable parallelization
- _Test fixtures_: Custom fixture is introduced to step away from the traditional POM model and take advantage of reusability.

# Manual test cases

- Check the manual test cases for the first challenge inside the [Manual tests folder](Manual tests)