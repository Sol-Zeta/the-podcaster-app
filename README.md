# The Podcaster App (React.js SPA)

![Version](https://img.shields.io/badge/version-1.2.0-blue.svg?cacheSeconds=2592000)

**Este README también está disponible en [Español](./README-ES.md).**

## Main Features

- **📋 Podcast List:** Access to the 100 top podcasts list.
- **🔍 Search and Filter:** Filter podcasts in the List by title or author's name.
- **📜 Podcast Details:** Display details about the podcast and its episodes list.
- **📜 Episode Details:** Display details about the selected episode.
- **▶️ Episode Player:** Play the selected episode.
## Technologies Used

- **ReactJS:** Library for building user interfaces.
- **React Router Dom:** Enables dynamic routing in React applications.
- **TypeScript:** Superset of JavaScript with static typing.
- **Vite:** Build tool that provides a fast development environment.
- **SASS:** CSS preprocessor for writing styles in a more maintainable way.
- **Testing Library:** Library for unit testing React components.
- **Cypress:** Tool for end-to-end (e2e) testing.

## Changelog

For a detailed list of changes corresponding to each version of the app, please refer to the [CHANGELOG](./CHANGELOG.md). 
<br>
Each version is tagged with Git tags in specific commits.

## Installation

To install the dependencies, run:

    npm install

## Usage
### Development

To start the development server:

    npm run dev

### Production
To build and start the production version:

    npm run build && npm run preview

### Docker

To build and run the application using Docker:

1.  **Build the Docker image:**

    docker build -t the-podcaster-app .

2.  **Run the Docker container:**

        docker run -p 3000:3000 the-podcaster-app

    This will start the application at  [http://localhost:3000](http://localhost:3000).

## Run Tests

### Unit Tests

To run unit tests:

    npm run test

### e2e Tests

To run end-to-end tests with Cypress:

    npm run cypress:open

## Continuous Integration

The project uses **GitHub Actions** to ensure code quality. The workflow is triggered on every push to any branch and performs the following actions:

1. **Build the Docker Image**
2. **Run the Docker Container**
3. **Run Unit Tests inside the container**
4. **Run e2e Tests inside the container**
5. **Stop and Remove the Docker Container**

## JIRA Board

You can see the project's planning and division into user stories on the following [JIRA board](https://soledadpattoglio.atlassian.net/jira/software/projects/PA/boards/4).

## Author

👩🏻‍💻 **Soledad Pattoglio**

- [Portfolio](https://www.soledadpattoglio.tech/)
- [LinkedIn](https://www.linkedin.com/in/mspattoglio/)
- [GitHub](https://github.com/Sol-Zeta)