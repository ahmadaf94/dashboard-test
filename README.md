# Dashboard Test Project
## Description
This is a test project for displaying a dashboard which uses json server to simulate a backend and react to display the dashboard. also it uses server side rendering to pre-render the page and then hydrate it on the client side.
## Development
1. Clone the repository
2. Run `npm install`
3. Run `npm run start:db`
4. Run `npm run dev`
5. Open `http://localhost:3000` in your browser
6. Enjoy!
## Production
1. Clone the repository
2. Run `npm install`
3. Run `npm run build`
4. Run `npm run start:db`
5. Run `npm run start`
6. Open `http://localhost:3000` in your browser
7. Enjoy!

## Testing
1. Clone the repository
2. Run `npm install`
3. Run `npm run test`
4. Enjoy!


## Notes
### Folder Structure
- `server` contains the backend code.
- `client` contains the frontend code.

#### Client Structure
All logics inside folder are guarded with index.ts files to expose only the needed files.
- `components` folder contains the shared components.
- `routes` folder contains the react router routes.
- `constants` folder contains the shared constants.
- `contexts` folder contains the shared react contexts.
- `hooks` folder contains the shared react hooks.
- `layouts` folder contains the shared layouts.
- `styles` folder contains the shared styles.
- `utils` folder contains the shared utils.
- `domains` folder contains the domain specific code inspired by [DDD](https://en.wikipedia.org/wiki/Domain-driven_design) (Domain Driven Design). each domain can have it's own `components`, `apis`, `utils`, `pages`,... and exposes its usable functionalities through its `index.ts` file. project contains this domains:
    - task: contains logics related to listing and managing tasks
    - user: contains logics related to listing the users

### Dependencies
- `@tanstack/react-query` as async state manager.
- `cookie-parser` to parse cookies in backend.
- `express` to serve the backend.
- `ejs` to render the html template.
- `framer-motion` to animate the page transitions.
- `js-cookie` to manage browser cookies.
- `react` and `react-dom` to render the frontend.
- `react-router-dom` to manage the routes.
- `styled-components` for styling the UI.
- `webpack` to bundle the frontend and backend.
- `webpack-cli` to run webpack commands.
- `jest`, `@testing-library/react` and `babel` for running tests.
- `clean-webpack-plugin` to clean the build folder before building.
- `copy-webpack-plugin` to copy the `ejs` template files to the build folder.
- `cross-spawn` to run the backend and frontend in parallel.
- `dotenv-webpack` to load the environment variables.
- `json-server` to simulate the backend api and database.
- `prettier` to format the code.
- `ts-loader` to load typescript files with webpack.
- `typescript` to add types to the code.
- `webpack-bundle-analyzer` to analyze the bundle size.
- `webpack-manifest-plugin` to generate the manifest file.
- `webpack-node-externals` to exclude node modules from the backend bundle.

### Caveats
I used React `renderToString` server api for ssr, but it doesn't support suspense, and sometimes it fails to render lazy loaded components. from another side, new react 18 api for stream rendering supports rendering of lazy loaded components but `styled-components` doesn't support it yet. so I stuck with `renderToString` for now until `styled-components` supports it or we change our style library approach later.
