# Micro Apps with Web Components and Angular Elements

This example consists of three Angular projects that demonstrate how to use Web Components/ Angular Elements to implement a shell that loads micro apps:

- **shell (/src):** Shell loading micro apps
- **client-a (/projects/client-a)**: Demo micro app
- **client-b (/projects/client-b)**: Another demo micro app

## Install Dependencies

```
npm install
```

## Standalone

For debugging and testing, you can start each of those projects individually. Please note that the shell will throw some exceptions when doing so because it does not find the micro apps that are expected in an sub folder for the sake of simplicity.

Use one of the following commands for this:

```
ng serve --project shell --open
ng serve --project client-a --open
ng serve --project client-b --open
```

## Everything together

For using everything together, you have to build the example and run it:

```
npm run build
npm start
```

## References:

A list of articles and more that I came across which helped with the design and implementation:

- https://github.com/angular-redux/store/blob/master/articles/fractal-store.md
- https://angular-redux.github.io/store/
- https://github.com/erikras/ducks-modular-redux
- http://nicolasgallagher.com/redux-modules-and-code-splitting/
- https://github.com/angular-redux/example-app
- https://github.com/angular-redux/store/blob/master/articles/quickstart.md
- https://github.com/angular-redux/platform/tree/master/packages/store
- https://redux.js.org/introduction/getting-started