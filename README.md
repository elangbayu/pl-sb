# Stockbit Playwright Web Automation

<p align="center">
  <img src="icon.png" alt="Playwright + Cucumber" width="200" height="200">
</p>

This project is a Playwright-based test automation framework using Cucumber.js for Stockbit web platform.

Latest run example: [![Regression Test](https://github.com/elangbayu/pl-sb/actions/workflows/main.yml/badge.svg)](https://github.com/elangbayu/pl-sb/actions/workflows/main.yml)

## Prerequisites

- Node.js (version >= 16)
- npm or yarn

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/elangbayu/pl-sb.git
    ```

2.  Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

## Usage

### Running Tests

To run the tests, use the following command:

```bash
npm test
# or
yarn test
```

This will execute the Cucumber scenarios defined in the `features` directory and generate an HTML report in the `reports` directory.

### Linting

To run the linter, use the following command:

```bash
npm run lint
# or
yarn lint
```

This will check the code for any linting errors.

## Project Structure

```
pl-sb/
├── features/             # Feature files containing Cucumber scenarios
├── src/
│   ├── pages/            # Page object files
│   ├── components/       # Page object files for the component that is reusable in more than one page
│   ├── steps/            # Step definition files
│   ├── support/          # Support files (world, hooks, etc.)
│   └── ...
├── cucumber.js         # Cucumber configuration file
├── package.json        # Project dependencies and scripts
├── README.md           # This file
└── ...
```

## Contributing

Please feel free to contribute to this project by submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
