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

  -  iOS
    <br />
    <a href="https://expo.dev/accounts/yass66s/projects/portfolio-app/builds/12837315-576f-4241-a343-b38c36392046">
      https://expo.dev/accounts/yass66s/projects/portfolio-app/builds/12837315-576f-4241-a343-b38c36392046
    </a>
    <br />
    Note: You will need to enable Developer Mode on your iOS device to install the app.
    You can follow <a href="https://docs.expo.dev/guides/ios-developer-mode/">these instructions</a> to enable Developer Mode.

  - 🤖 Android
    <br />
    <a href="https://expo.dev/accounts/yass66s/projects/portfolio-app/builds/a29e75c2-fbdc-4925-9eef-f5329db084ef">
      https://expo.dev/accounts/yass66s/projects/portfolio-app/builds/a29e75c2-fbdc-4925-9eef-f5329db084ef
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
3. Prebuild the project
   ```sh
   npx expo prebuild
   ```
4. Create a development build locally
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
