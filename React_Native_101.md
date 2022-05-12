
# React Native 101

React-native is a framework which allows developers to build native apps using JavaScript.

Like we already know, most of the native code in case of iOS is written in **Objective C** or **Swift**, while in the case of Android it is written in **Java**. But for writing our react-native app, we would hardly ever need to write native code for iOS or Android.

## React Native Architecture

[![Architect](https://hackernoon.com/hn-images/1*JT_Smf1u3fJTBY8ev9WAzg.png)](https://hackernoon.com/hn-images/1*JT_Smf1u3fJTBY8ev9WAzg.png)

### JavaScriptCore

React-native uses a JavaScript virtual machine called **JavaScriptCore** to run all our JavaScript code. In case of iOS, react-native uses the JavaScriptCore provided by the iOS platform. In case of Android, react-native bundles the JavaScriptCore along with the application. This would increases the app size, hence the Hello World application of RN would take around 3 to 4 megabytes for Android.

> Note: **JavaScriptCore** is actually an open source JavaScript engine originally built for **WebKit**.

When we run the application later on using the following commands issued via the CLI - `react-native run-ios` or `react-native run-android`, React Native CLI would spawn a node packager/bundler that would bundle all the JS code into a single `main.bundle.js` file. JavaScriptCore will then runs this bundled JS code.

>Note: The packager can be considered as being similar to **Webpack**

### React Native Bridge

React-native bridge is a C++/Java bridge which is responsible for communication between the native and JavaScript thread. The bridge is the concept that provides a way for bidirectional and asynchronous communications between these two threads.

Because it is built in C/Java language, the bridge can be run on multiple platforms and OS. With this in mind, JavaScript code can be run inside a C/C++ program. It can inject variables, functions and declare globals to enhance the JavaScript existing code.

React-native relies on this kind of magic to make JavaScript communicate with the native world and thus trigger actions in the native world.

## Setting Up a Project

React-native has a bunch of options to set up a project.
`create-react-native-app`, `react-native init` and `Expo` are among the most popular ones.

Here is a short description of each of them:

-   `create-react-native-app`:  It is similar to  `create-react-app`. It has all the necessary tasks to run your application. All the necessary setup has been taken care of and you can start hacking around react-native. This is very useful if you are starting with react-native and don't want to worry about anything else. It uses Exponent's open source tools to debug the application. To run the app, all you need to do is install the Expo Client app and scan a QR code. Although it is very quick to setup, everything seems like a black-box. Due to this, it can get pretty messy when you want to change a lot of configurations. Hence, it is **not recommended for a long-term production application**.

-   `Expo`: It is a third-party framework which provides you with a lot of cool features like sharing your app with anyone while you are developing it and showing live code changes on a real device by just scanning a QR code. It is **not recommended if your app uses a lot of third party native modules** or you wish to hack around the native code since you don't get access to native code out of the box.

-   `react-native init`:  This provides you with a very basic setup of the application including native iOS and android directories. This allows you to change the native code if required. You would use native **Android/iOS simulators** or **devices** to run your application. You can run the application with  `react-native run-ios`  command (it will open the iOS simulator and run your app on it). Here we will need to setup everything from scratch. But on the contrary, we get full access to native code and have control over almost everything that is going on in our application. Also, it is easier to upgrade react-native and other core libraries using this boilerplate as compared to others. Hence any critical updates can be integrated much more easily.  This boilerplate is **recommended for any long term production application.**

    Setup instructions for `react-native init` can be found at  [https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html). You can find them at the  *React Native CLI* section.

>Note: if this is your first time setting up a react-native project, you need to install some dependencies based on what's explained in the link above.

## Project Structure

### Create a New Project

To create a new project run `react-native init <project-name>`. Once the setup and installing is complete you should have a project structure similar to this.

```
.
├── _tests_
├── android
├── ios
├── node_modules
├── .buckconfig
├── .eslintrc.js
├── .flowconfig
├── .gitattributes
├── .gitignore
├── .watchmanconfig
├── App.js
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
└── yarn.lock
```

### Run the Project

First, let's run the project to see how it looks.

Type the command

```
cd ios
pod install
cd ..
react-native run-ios
```
for running the app on iOS simulator

or

`react-native run-android`  - for running the app on a connected Android phone/emulator.

> Note: for  `react-native run-android` to work, you should have an open Android emulator or an Android device with USB Debugging enabled connected to your system via a USB cable.

If all goes well you should see the following screen on your iOS or Android emulator.

![InitPic](https://i.ibb.co/FxB8BTX/Screen-Shot-2019-08-07-at-18-31-30.png =250x)

Along with the native project, react-native packager kicks in on another terminal window and runs on port `8081` by default.

## Conventions and Code Style

Every team of developers follow different conventions. Not having a proper convention creates dependencies on individuals and makes the project difficult to understand by a newcomer. Tight dependencies in a software development project can affect the **velocity of the team**. In order to solve that, I'm going to enforce us all to follow code conventions together using a tool called **ESLint**.

**ESLint** allows us to maintain code quality and enforce code conventions. ESLint is a static code evaluator. It means that ESLint will not actually execute the code but will instead read through the source code to see if all the preconfigured code conventions are followed by the developers.

### ESLint Installation and Setup

It is pretty easy to setup ESLint for a project.

```
npm i --save-dev eslint babel-eslint eslint-plugin-react
```

>Note: `babel-eslint` allows you to lint all valid Babel code with the **ESLint**.

Then we need to add rules, which can be configured via a configuration file called `.eslintrc.js`. It should be placed in the root directory of the project.

Modify `.eslintrc.js` to look like this:

```
// 'off' or 0 - turn the rule off
// 'warn' or 1 - turn the rule on as a warning (doesn’ t affect exit code)
// 'error' or 1 - turn the rule on as an error (exit code is 1 when triggered)

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended'],
  rules: {
    'object-curly-spacing': [1, 'always'],
    'react-native/no-inline-styles': 0,
    'react/jsx-curly-spacing': [1, { 'when': 'always', 'children': true }],
    'react/jsx-no-bind': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-uses-vars': 1,
    'react/prop-types': 0,
    'react/self-closing-comp': 1,
    'jsx-quotes': [1, 'prefer-single'],
    'quotes': [1, 'single'],
    'eqeqeq': 1,
    'no-unused-vars': 1,
    'no-undef': 1,
    'no-unneeded-ternary': 1,
    'no-extra-bind': 2,
    'no-console': 1,
    'no-trailing-spaces': [1, { 'skipBlankLines': true }],
    'comma-spacing': [1, {
     'before': false,
     'after': true
    }],
    'semi': 2,
    'semi-spacing': 1,
    'keyword-spacing': 1,
    'key-spacing': 1,
    'array-bracket-spacing': 1,
    'arrow-parens': [1, 'as-needed'],
    'arrow-spacing': 1,
    'block-spacing': 1,
    'func-call-spacing': 1,
    'brace-style': [1, '1tbs', { 'allowSingleLine': true }],
    'space-before-blocks': 1,
    'space-before-function-paren': [1, 'never'],
    'space-in-parens': 1,
    'space-infix-ops': 1,
    'space-unary-ops': [1, {
      'words': true,
      'nonwords': false,
      'overrides': {
        '+': true
      }
    }],
    'spaced-comment': 1,
    'rest-spread-spacing': 2,
    'prettier/prettier': 0,
    // 'radix': [1, 'as-needed']
  }
};
```

The important area in the above configuration is the rules section. This section controls all the code conventions followed in the project.

It can be pretty overwhelming at first to decide which rules should go in. Hence we can start with

`'extends': ['plugin:react/recommended']`
or
`'extends': ['eslint:recommended']`

to cover all the basic rules needed to start our project.

>Note: the complete list of all the available rules is present here:  [http://eslint.org/docs/rules/](http://eslint.org/docs/rules/)

### Run ESLint

Add an  `lint` and `lint:fix` scripts  in your  `package.json`  as given below.

```
{
  ...
  "scripts": {
    ...
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix"
  },
  ...
}
```

You can simply run

```
npm run lint
or
npm run lint:fix
```

`npm run lint` will run the ESLint and show a list of errors that need to be fixed.  `npm run lint:fix` will run ESLint and attempt to correct the errors it is able to fix automatically.

With ESLint installed in our project, we can now find and fix list of incorrect code conventions regardless of any code editor you use.

### Update .gitignore

`.gitignore` tells git which files (or patterns) it should ignore. It's used to avoid committing transient files from your working directory that aren't useful to other collaborators, such as compilation products, temporary files IDEs create, etc.

Add these additional rules that could be useful for our project:

```
# Custom
#.env*
*env.js
.env
.eslintcache
package-lock.json
yarn.lock
.vscode

/android/.project
/android/.settings
/android/app/.project
/android/app/.classpath
/android/app/.settings
/android/app/google-services.json

/ios/projectName/GoogleService-Info.plist
/ios/Pods
/ios/Podfile.lock
```

That's all the basic rules we need to set! Let's now move on to the real thing.

## Customise the Project Structure

After we initiate the project, there are several files and directories created by the `react-native init`. Some important files that worth to be mentioned are the following:

`index.js` is the JS entry point to running react-native app. Application name and component listed in this file will be called and bundled by the packager.

```
import {AppRegistry} from 'react-native';
import App from './App';
import {name as ourAppName} from './app.json';

AppRegistry.registerComponent(ourAppName, () => App);
```

`App.js`: all of the project screens and designs sourced from here. This JS file serves as a component which wrapped all other screens/components. Any additional third party dependencies that will be used in the application should be written in here as well. E.g. `react-redux`, `react-native-code-push`, `react-native-one-signal`, `react-native-sentry`, etc. This way we can get a good picture of what being used in our application as additions. We will talk about more third party dependencies later in the guide.

At first this is how our `App.js` look like, but we will modify it as we continue with the customisation.

```
import React, {Fragment} from 'react';
import {...} from 'react-native';

const App = () => {
  return (...);
};

const styles = StyleSheet.create({...});

export default App;
```

`app.json`: we can change our application and display name in here.

```
{
  "name": "ourAppName",
  "displayName": "ourAppName"
}
```

### Create a Directory Structure

Let's begin by creating a directory named `src` in the project directory. The `src` directory will have all our JavaScript source code.

```
mkdir src
```

Create a few directories inside `./src` that will help us structure our code in modular and easier way to maintain.

```
cd src
mkdir assets components constants helpers redux routers screens utils
```

So our project directory should now look like this:

```
.
├── _tests_
├── android
├── ios
├── node_modules
├── src
│   ├── assets
│   ├── components
│   ├── constants
│   ├── helpers
│   ├── redux
│   ├── routers
│   ├── screens
│   ├── utils
├── .buckconfig
├── .eslintrc.js
├── .flowconfig
├── .gitattributes
├── .gitignore
├── .watchmanconfig
├── App.js
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
└── yarn.lock
```

-   `src/assets`  - This is where all the images, videos, etc will go in.
-   `src/components`  - The directory will contain all the dumb components. These components will only do lay outing and won't contain any states or logic inside them. All the data in these components will be passed in as props from their parents. This concept will be explained in detail further in the guide.
-	`src/constants`  - This is where our colours, global themes, fonts, dictionary/languages,  dispatches, etc will go.
-	`src/helpers`  - This is where all helpers needed like validator, ratio helper, currency helper, etc will go.
-	`src/redux`  - This will contain all our redux state management files like actions, reducers, store config, etc.
-   `src/routers`  - This is where we will keep all our app's routing logic.
-	`src/screens`  - This directory will hold all the smart components. Smart components are those components which contain logic and states in them. Their job is to pass the props to the dumb components.
-  `src/utils`  - This is where configurations for the app will go in such as HTTP utility to make API calls, middle-wares, environment specific config for dev and prod, etc will go.

Next, modify our `package.json` to look like this:

```
{
  ...
  "scripts": {
    "start": "react-native start --reset-cache",
    ...
  },
  ...
}
```

This allow us to clear the cache of our react-native project before we run it.

### Modify App.js

Now we’ve got a standard react-native app with the default screen based on `App.js`. We want to change what's written there to look similar like this:

```
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={ {flex: 1, justifyContent: 'center', alignItems: 'center'} }>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  };
};
```

>Note: to see the changes we made, we need to enable `Enable Hot Reloading` option in the emulator -- for iOS press `CMD + D` or for Android press `CTRL + M`. If nothing changes, press `Reload` to refresh the emulator.

Here’s what you should see:

![AppJS](https://i.ibb.co/sqJmxJV/Screen-Shot-2019-08-07-at-18-17-00.png =250x)

So this code is defining `App` as a new `Component`. When you're building a react-native app, you'll be making new components a lot. Anything you see on the screen is some sort of component. A component can be pretty simple - the only thing that's required is a `render` function which returns some JSX to render.

### JSX

What is JSX? JSX is a preprocessor step that adds XML syntax to JavaScript. JSX may remind you of a template language, but it comes with the full power of JavaScript. It is used to describe what the UI should look like.

We can also modify our `App.js` using JSX to become like this:

```
export default class App extends Component {
  render() {
    const element = <Text>Welcome to React Native!</Text>;
    const elementStyle = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    };

    return (
      <View style={elementStyle}>
        {element}
      </View>
    );
  };
};
```

## Create a New Screen

Later on in our project we want to navigate between screens. In order to do that, we need to create more screens.

Navigate to `./src/screens` and create a file `index.js` as our screens entry point.

```
cd src/screens
touch index.js
```

Create a few directories inside `./src/screens`. For example `ResourceScreen` and `WelcomeScreen`.

```
mkdir ResourceScreen WelcomeScreen
```

>Note: notice that we use CamelCase notation for our screen directory name.

In each of the directory, create another `index.js` and `style.js`.

```
cd ResourceScreen
touch index.js style.js
cd ..
cd WelcomeScreen
touch index.js style.js
```

Our `screens` directory should now look like this:

```
├── screens
│   ├── ResourceScreen
│   |	├── index.js
│   |	└── style.js
│   ├── WelcomeScreen
│   |	├── index.js
│   |	└── style.js
│   └── index.js
```

List all the new screen directories we just made in the screen entry point `./src/screens/index.js`.

```
import ResourceScreen from './ResourceScreen';
import WelcomeScreen from './WelcomeScreen';

export {
	ResourceScreen,
	WelcomeScreen,
};
```

Next, we are going to modify `index.js` and `style.js` in `ResourceScreen` and `WelcomeScreen` that we just made. To maintain the readiness and cleanness of our code, we put all the CSS styling inside `style.js`. It returns a simple object and will be imported into `index.js`.

I’m only going to post the snippet for one. Try to make the other screen as an exercise. The text, component name, and background colour should be different with the other one.

`./src/screens/ResourceScreen/index.js`:
```
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Styles from './style';

export default class ResourceScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.text} onPress={Actions.welcome}>
          Resource Screen
        </Text>
      </View>
    );
  };
};
```

`./src/screens/ResourceScreen/style.js`:

```
export default {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },

  text: {
    fontSize: 20
  },
};
```

## Setup Router (Navigator)

Now that we have two screens to navigate with, we can configure the routing dependencies that we are going to use in our project.

In this guide, we are going to use `react-native-router-flux` as our router API. It helps users to define all the routes in one central place and navigate between screens in an easier way compare to `react-navigation`.

>Note: `react-native-router-flux` is made based on `react-navigation`. It inherits all limitations and changes from `react-navigation`. For more information, read [https://github.com/aksonov/react-native-router-flux](https://github.com/aksonov/react-native-router-flux).

Navigate to root directory `./` and install `react-native-router-flux`.

```
npm i react-native-router-flux
```

Now navigate to `./src/routers` and create a file `index.js`.

```
cd src/routers
touch index.js
```

`./src/routers/index.js` serves as the entry point of our routing logic. Here we want to list down all the screens that we use in our project.

There is just a bit of boilerplate you have to do and I’ll explain everything after you take a look at the code. The following is happening in `./src/routers/index.js`:

```
import React, { Component } from 'react';
import {
  Router,
  Scene,
  Stack,
} from 'react-native-router-flux';

import {
  ResourceScreen,
  WelcomeScreen,
} from '../screens';

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="resource" component={ ResourceScreen } initial />
          <Scene key="welcome" component={ WelcomeScreen } />
        </Stack>
      </Router>
    );
  };
};

```

`<Router>`: a component where we define all the routing scenes and stacks.
`<Stack>`: a component to group `<Scene>` components together for its own stack based navigation. Using this will create a separate navigator for this stack. `hideNavBar` is a prop to hide the default navigation bar made by the router. Try to remove it and see the difference.
`<Scene>`: the basic routing component for this router. All `<Scene>` components require a `key` prop that must be unique and a `component` prop to pass our screen into the router. `initial` is a prop to define our initial screen for the application. We can move the `initial` prop to any `<Scene>` we want.

Next, we want our `App.js` to listen to the router we just configured, instead of just returning a single `<View>` with text.

```
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import AppRouter from './src/routers';

export default class App extends Component {
  render() {
    return (
      <AppRouter/>
    );
  };
};
```

### Navigate Between Scenes

So now, how do we navigate between screens?

We’re going to rely on the `Actions` imported from `react-native-router-flux`. Whenever we want to go to a new screen we’re going to call `Actions.key` where `key` is the key we passed into the scene when we defined it. Let’s see it in use.

`./src/screens/ResourceScreen/index.js`

```
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Styles from './style';

export default class ResourceScreen extends Component {
  render() {
    <View style={Styles.container}>
      <Text style={Styles.text} onPress={Actions.welcome}>
        Resource Screen
      </Text>
    </View>
  };
};
```

`./src/screens/WelcomeScreen/index.js`

```
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Styles from './style';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.text} onPress={Actions.pop}>
          Welcome Screen
        </Text>
      </View>
    );
  };
};
```

You can see how we’re using `Actions` on line 14. You should now be able to do some navigating!

- `[key]`: the `Actions` object "automagically" uses the `<Scene>`'s `key` prop to navigate.
- `pop`: go back to the previous scene by "popping" the current scene off the nav stack.
- `refresh`: reloads the current scene by loading new `props` into the `Scene`.
- `replace`: pops the current scene from the stack and pushes the new scene to the navigation stack. No transition will occur.
- `reset`: clears the routing stack and pushes the scene into the first index. No transition will occur.

For more routing API see [https://github.com/aksonov/react-native-router-flux/blob/master/docs/API.md](https://github.com/aksonov/react-native-router-flux/blob/master/docs/API.md).

## Handling API in React Native

Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may simply need to fetch static contents from a server.

### Fetch

React Native provides the  [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)  for your networking needs. Fetch will seem familiar if you have used  `XMLHttpRequest`  or other networking APIs before. You may refer to MDN's guide on  [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)  for additional information.

### Making Requests with Fetch

In order to fetch content from an arbitrary URL, just pass the URL to fetch:

```
fetch('https://mywebsite.com/mydata.json');
```

Fetch also takes an optional second argument that allows you to customize the HTTP request. You may want to specify additional headers, or make a POST request:

```jsx
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    Content-Type: 'application/json',
  },
  body: JSON.stringify({
    firstKey: 'yourValue',
    secondKey: 'yourOtherValue',
  }),
});
```

Take a look at the  [Fetch Request docs](https://developer.mozilla.org/en-US/docs/Web/API/Request)  for a full list of properties.

### Handling the Response

The above examples show how you can make a request. In many cases, you will want to do something with the response.

Fetch methods will return a  [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)  that makes it straightforward to write code that works in an asynchronous manner:

```
function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Content-Type: 'application/json',
    },
    body: JSON.stringify({
      firstKey: 'yourValue',
      secondKey: 'yourOtherValue',
    })
  })
  .then(response => response.json())
  .then(responseJson) => {
    return responseJson.movies;
  })
  .catch(error => {
    console.log(error);
  }
}
```

You can also use the proposed ES2017  `async`/`await`  syntax:

```
async function getMoviesFromApi() {
  try {
    let response = await fetch('https://facebook.github.io/react-native/movies.json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Content-Type: 'application/json',
      },
      body: JSON.stringify({
        firstKey: 'yourValue',
        secondKey: 'yourOtherValue',
      })
    });

    let responseJson = await response.json();

    return responseJson.movies;
  } catch (error) {
    console.log(error);
  }
}
```

>Note:  Don't forget to `catch` any errors that may be thrown by  fetch, otherwise they will be dropped silently.

### Setup Fetch API

Now let's add fetch API in our project. Create `index.js` and `Api.js` as our entry point and as a file where we will configure fetch in `./src/utils`.

```
cd src/utils
touch index.js Api.js
```

List all files in `./src/utils/index.js`:

```
import * as Api from './Api'

export {
	Api,
};
```

>Note: notice here we import * (asterisk) from `Api.js`, as we want to export **API functions** later on.

This is another boilerplate you have to follow and I’ll explain everything after you take a look at the code.

`./src/utils/Api.js`:

```
import { Actions } from 'react-native-router-flux';
// import env from '../../env';

export function request(endpoint, requestBody, successFunction, errorFunction = null, preFunction = null, postFunction = null) {
	let url = null;
	let method = null;

	if (Array.isArray(endpoint)) {
		let api = endpoint[0];
		let param = endpoint[1];

		// Handler for param in the middle. E.g: www.mywebsite/$/item
		if (api.path.indexOf('$') === -1) {
			// If $ not exist
			url = api.baseUrl + api.path + '/' + param;
			method = api.method;
		} else {
			// If $ exist
			url = api.baseUrl + api.path.replace(/\$/g, param);
			method = api.method;
		}
	} else {
		url = endpoint.baseUrl + endpoint.path;
		method = endpoint.method;
	}

	// The Object.keys() method returns an array of a given object's own property names
	if (method === 'GET' && requestBody !== {}) {
		// Only if the requestBody has a value, then return '&' else ''
		let queryParams = Object.keys(requestBody).length > 0 ? '&' : '';
		let i = 0;

		for (let key in requestBody) {
			// Only if the key has a value, otherwise won't be added to the queryParams
			if (requestBody[key]) {
				queryParams += (i > 0 ? '&' : '') + key + '=' + requestBody[key];
				++i;
			}
		}

		url += queryParams;
	}

	return (dispatch, getState) => {
		// const xApiKey = env.serverApiToken;
		// const token = getState().user.get('token');

		const makeRequest = async() => {
			try {
				if (preFunction) {
					preFunction(dispatch);
				}

				let apiFetch = await fetch(url,
				{
					method: method,
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						// 'X-Api-Key': xApiKey ? xApiKey : null,
						// 'token': token ? token : null,
					},
					body: method !== 'GET' ? JSON.stringify(requestBody) : null,
				});

				// if (env.status === 'development') {
				// 	console.log('api_logger: ', apiFetch, 'method: ', method);
				// 	console.log('requestBody', requestBody);
				// 	console.log('token', token);
				// }

				let response = await apiFetch.json();

				if (apiFetch.ok) {
					// execute dispatch
					await successFunction(response.data, dispatch, apiFetch.ok);
				} else {
					// if should_relogin
					if (response.message === 'Token Expired') {
						await dispatch({
							type: 'LOGOUT',
						});

						Actions.reset('resource');

						return errorFunction('Login session expired. Please logout and re-login', response.code, dispatch);
					} else {
						// execute dispatch THROW_ERROR
						if (errorFunction) {
							console.log('Error debugger: utilities/api:', response);
							return errorFunction(response.message, response.code, dispatch);
						} else {
							console.log('Error debugger: utilities/api:', response);
							return alert('Oops, sorry, we are experiencing some problem (#1)');
						}
					}
				}

				if (postFunction) {
					postFunction(dispatch);
				}
			} catch (error) {
				if (errorFunction) {
					console.log('Error debugger: utilities/api: ', error);
					return errorFunction('Oops, sorry, we are experiencing some problem (#2)', 999, dispatch);
				} else {
					console.log('Error debugger: utilities/api: ', error);
					return alert('Oops, sorry, we are experiencing some problem (#3)');
				}
			}
		};

		makeRequest();
	};
}
```

The function `request` has **6 parameters**:

**endpoint**: this parameter receive two data types, an object or an array.
As an object, it serves as an API entry with 3 properties: baseUrl, path and method.
As an array it serves as a handler for dynamic URL. It has at least two indexes, the first index is the API object with 3 properties: baseUrl, path and method, and the second index is the dynamic param to replace the char '$' in URL-path.

```
Api.request(
	{
		baseUrl: baseUrl,
		path: 'reset-password',
		method: 'POST'
	},
	...
)

Api.request(
	[
		{
			baseUrl: baseUrl,
			path: 'address/$/default',
			method: 'POST'
		},
		id
	],
	...
)

Api.request(
	[
		{
			baseUrl: baseUrl,
			path: 'sales-orders/$',
			method: 'GET'
		},
		id
	],
	...
)
```

**requestBody**: data object required for POST. We also need to include requestBody for GET, if we want to add query param in the request.

E.g: baseUrl/products/page?=1&country=id&brand=adidas

```
Api.request(
	{
		baseUrl: baseUrl,
		path: 'products',
		method: 'GET'
	},
	{
		page: page,
		country: country,
		brand: brand,
		...
	},
	...
)
```

**successFunction**: javascript function we are going to execute if the API request succeed.

```
return Api.request(
	...,
	(response, dispatch, success) => {
		dispatch({
			type: POST_ADDRESS_DEFAULT,
			payload: {
				address: response,
			},
		});

		if (success) Actions.pop();
	},
	...
)
```

**errorFunction**: javascript function we are going to execute if the API request fail.

```
return Api.request(
	...,
	(message, code, dispatch) => {
		dispatch({
			type: THROW_ERROR,
			payload: {
				code: code,
				message: message,
			},
		});
	},
	...
);
```

**preFunction**: javascript function we are going to execute before the API request.

```
return Api.request(
	...,
	(dispatch) => {
		dispatch({
			type: Dispatches.API_LOADING_START,
			payload: {
				message: 'postingAddress',
			},
		});
	},
	...
);
```

**postFunction**: javascript function we are going to execute after the API request.

```
return Api.request(
	...,
	(dispatch) => {
		dispatch({
			type: Dispatches.API_LOADING_END,
		});
	}
);
```

## Redux

Redux, in a nutshell, is a simple tool to create a global state where the information contained in Redux can be used and shared by many components. As our app grow, the need to manage data state between components becomes incredibly complex. For example, user data saved on a local state of a component is needed on other components. if there are changes on user data, the app has to update each components that require that data. Redux handles that automatically.

### Setup Redux

To connect redux to our app, simply run:

```
$ npm i redux react-redux
```
In addition, we're going to need `redux-thunk` to handle async calls and `redux-persist` to rehydrate a redux store.. More on this later.

```
$ npm i redux-thunk redux-persist
```

### Reducers

A `reducer` is a pure function that takes the previous `state` and an `action` as arguments and returns a new state. The reducer is instrumental in keeping the current `state` updated throughout our app as it changes.

Locate the app's `reducers` directory located in `./src/store/reducers`

This directory is where we will put all of our reducers.
It is common to name each of the reducer files to corresponds to the data collected in it.

Let's take `User.js` reducer as an example.
`User.js` will collect and updates any data pertaining to user data.

`./store/reducers/User.js`

```
const initialState = {
  user: {},
};

// state manipulation (set the current state with updated data)
const setUser = (state, payload) => {
  // direct mutation of reducer state is prohibited.
  // therefore, we must assign a new object where it takes a copy of our current state,
  // and update the new state with the corresponding payload
  return Object.assign({}, state, {
    user: payload,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
    case 'LOGIN':
      return setUser(state, action.payload);

    default:
      return state;
  }
};
```

`initialState` is the global state that corresponds to a certain state that will be used throughout the app. Since we are on `user.js`, the state collected on this `initialState` will corresponds to `user` state. `initialState` characteristic is ***final*** and ***immutable***, meaning that ***Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.***

`setUser` is an example of setting new data to the user state. it takes two parameters, `state` and `payload`. the `state` parameter is the current reducer state `initialState` .  `payload` parameter is the new data that is needed to update the current reducer state.

Since the characteristic of reducer state is final and immutable, direct mutation of reducer state is prohibited. Therefore, to update our we must assign a new object where it takes a copy of our reducer state, and update the new state with the corresponding payload using `Object.assign()` function or the `...` syntax.

Finally, `userReducer` is our reducer function. it takes two parameter: `state` and `action`. When `userReducer` is called, we set starting point `state` parameter with `initialState`.

`action`is JavaScript objects that represent payloads of information that send data from your application to your `Redux` store. actions contains `type` and `payload` keys. `type`contains string literals that will be processed by `switch` case to determine which function will be used to process the data that was sent to redux.

### Actions

Actions, or actions creator, is pure functions that sends data to your redux store using `dispatch`.  Any data received, either from user input, AJAX calls, etc, are handled in Action creators.

Actions `dispatch` data into your reducer. using the `type` key to determine how to update data in the reducer.

Most of the time, actions will handle any AJAX calls. in our case, they will handle any `fetch` requests. The boilerplate includes an example on how to create action without any `fetch` request, as well as actions with `fetch` request.

`fetch` requests are asynchronous.  Therefore, our actions function cannot `dispatch` any data without the help of `redux-thunk`. This is why we need to include `redux-thunk` to our projects.

refer to `./store/actions/User.js` to see examples on action functions.

### Store

The redux `store` holds all the reducer state of your apps. It will be passed down to your app through either your root or through your app's navigation.

### Store Methods

-   [`getState()`](https://redux.js.org/api/store#getstate)
-   [`dispatch(action)`](https://redux.js.org/api/store#dispatchaction)
-   [`subscribe(listener)`](https://redux.js.org/api/store#subscribelistener)
-   [`replaceReducer(nextReducer)`](https://redux.js.org/api/store#replacereducernextreducer)

[https://redux.js.org/api/store](https://redux.js.org/api/store)

### Store Component

Refer to `./store/index.js` to see the boilerplate's `store` component.

To create the store object we use `createStore` method provided by redux.

```
const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      thunk,
    ),
  ),
);
```

Let's break the store object a little bit. The `createStore` method commonly takes two arguments. the first one is the `rootReducer` (referring to `./reducers/index.js` for detail on how to create `rootReducer`)  where we combine all our reducers into one single object. the second one is `compose` method. `compose` usually take all the middleware for your project. Most commonly used is `thunk` which is used to handle asynchronous method in our actions.

Once we create our `store` object, we must pass our store object to the `Provider` component ,conveniently provided by `react-redux`. If any action dispatched to the store, the `Provider` component will automatically update the any component using any information from the store accordingly.

`Provider` component must be placed at the outermost layer of your app. Usually, `Provider` component wraps `App.js` However, the way we compose our store component is to create a wrapper where the `Provider` acts as a the outer-most wrapper, wrapping the `App.js` or any other main components. This way, it is relatively easier to maintain if there needs to be any changes or addition to the code. (e.g. adding `redux-persist` or middleware `logger`).
