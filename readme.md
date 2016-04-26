# Senketsu

Yeoman generator for React + Redux applications.

## Generators

### app
```
yo senketsu
```
Run the default 'app' generator. You can also run this with `yo senketsu:app` if you want to be
very explicit about things.
```
? Project name        - Name of the project.
? Project description - Description of the project.
```

### state
```
yo senketsu:state
```
Add a piece of state to your application. Note that you can specify async action creators by adding
a `*` as an affix character.
```
? State name    - Name for the state in PascalCase.
? State type    - Creates basic initial state for the reducer.
? State actions - Comma separated list of actions. E.g. "incrementNumber,decrementNumber".
```

### component
```
yo senketsu:component
```
Add either a new view (container) or a basic component with optional connection to redux.
```
? Component name    - Component name in PascalCase.
? Component type    - Either view (container) or component.
? Component options - Make component "smart" to connect it to the redux store.
```

## Workflow

Run `npm start` to start a "hotreloading" development environment. Run `npm run test:auto` in
another terminal to have tests run on file changes.

To package the application, execute `npm run build` and maybe `npm run lint && npm test` before if
you want to ensure quality code. :sunglasses:

## Acknowledgements

The generated application uses [kotatsu](https://github.com/Yomguithereal/kotatsu) behind the
scenes.
