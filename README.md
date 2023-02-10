<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <p align="center">
  <a href="[https://github.com/YassMaldini/react-native-twitch](https://github.com/YassMaldini/react-native-twitch)">
    <img src="assets/icon.png" style="border-radius: 5px;" alt="Logo" width="80" height="80">
      <h1 align="center">YassBK</h1>
  </a>
  </p>
  
  <img src="https://img.shields.io/github/package-json/dependency-version/YassMaldini/react-native-twitch/react-native?logo=React" />
  <img src="https://img.shields.io/github/package-json/dependency-version/YassMaldini/react-native-twitch/expo?color=blueviolet&logo=Expo" />
  <img src="https://img.shields.io/github/actions/workflow/status/YassMaldini/react-native-twitch/eas-build.yml" />
  <br />
  <br />
  
  <p align="center">
    <b>My portfolio mobile app made in React Native and Typescript.</b>
  </p>
  
  <br />
  
  <img src=".github/examples/example.gif" />
</div>

## Try on your device

- 🍎 iOS
  <br />
  <a href="https://expo.dev/accounts/yass66s/projects/portfolio-app/builds/8523b2f9-cc1e-4fe1-8548-d4e1c9211a68">
  https://expo.dev/accounts/yass66s/projects/portfolio-app/builds/8523b2f9-cc1e-4fe1-8548-d4e1c9211a68
  </a>
  <br />
  Note: You will need to enable Developer Mode on your iOS device to install the app.
  You can follow <a href="https://docs.expo.dev/guides/ios-developer-mode/">these instructions</a> to enable Developer Mode.

- 🤖 Android
  <br />
  <a href="https://expo.dev/accounts/yass66s/projects/portfolio-app/builds/e7a0db18-a984-4831-b343-b2520644bb52">
  https://expo.dev/accounts/yass66s/projects/portfolio-app/builds/e7a0db18-a984-4831-b343-b2520644bb52
  </a>

<!-- GETTING STARTED -->

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- expo
  ```sh
  npm install -g expo-cli
  ```
- eas (recommended)
  ```sh
  npm install -g eas-cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/YassMaldini/portfolio-app.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Prebuild both ios and android
   ```sh
   npx expo prebuild
   ```
4. Run a development build locally
   ```sh
   yarn android|ios
   ```

### Build

Create a build with EAS

```sh
eas build --platform android|ios|all --profile development|preview|production
```

- You can also create a build locally
  ```sh
  eas build --platform android|ios|all --profile development|preview|production --local
  ```

### Test

#### Unit tests (Jest)

```sh
yarn test
```

#### E2E tests (Detox)

```sh
yarn e2e:android|ios:debug|release:build|test
```

For example the command to create a release build for an ios simulator would be:

```sh
yarn e2e:ios:release:build
```

and to run the tests

```sh
yarn e2e:ios:release:test
```
