# ReactNativeChallenge

## Development environment

Make sure you have React Native installed. To install React Native, check out [Facebook's guide](https://facebook.github.io/react-native/docs/getting-started.html) on how to install React Native.

The configs that I used to run this project are:

node v9.2.0
npm 5.5.1
Ubuntu 16.04

## Running this project

clone this reposity by typing

```bash
git clone https://github.com/gutioliveira/ReactNativeChallenge.git
```

enter the project folder

```bash
cd ReactNativeChallenge
```

create a file called apiKey.js

```bash
touch apiKey.js
```
get your own Key at https://developers.google.com/maps/documentation/geocoding/start.

edit apiKey.js and add the following to it

```bash
export default API_KEY = 'YOUR_KEY_HERE';
```

now run the following commands to run the project

```bash
npm install
npm start
react-native run-android
```
