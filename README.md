# generator-react-redux-usecase

Generates a react-redux file structure


## Usage:

Uses sagas per default:

```bash
$ yo react-redux-usecase main-menu
   create main-menu/actions/MainMenuActions.js
   create main-menu/reducer/MainMenuReducer.js
   create main-menu/sagas/MainMenuSaga.js
   create main-menu/components/MainMenuComponent.js
   create main-menu/containers/MainMenuContainer.js
```


But can be disabled:

```bash
$ yo react-redux-usecase main-menu --no-sagas
   create main-menu/actions/MainMenuActions.js
   create main-menu/reducer/MainMenuReducer.js
   create main-menu/components/MainMenuComponent.js
   create main-menu/containers/MainMenuContainer.js
```
