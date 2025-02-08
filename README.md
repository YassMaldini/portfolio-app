<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <p align="center">
  <a href="[https://github.com/YassMaldini/portfolio-app](https://github.com/YassMaldini/portfolio-app)">
    <img src="assets/icon.png" style="border-radius: 5px;" alt="Logo" width="80" height="80">
      <h1 align="center">YassBK</h1>
  </a>
  </p>
  
  <img src="https://img.shields.io/github/package-json/dependency-version/YassMaldini/portfolio-app/react-native?logo=React" />
  <img src="https://img.shields.io/github/package-json/dependency-version/YassMaldini/portfolio-app/expo?color=blueviolet&logo=Expo" />
  <img src="https://img.shields.io/github/actions/workflow/status/YassMaldini/portfolio-app/eas-build.yml" />
  <br />
  <br />
  
  <p align="center">
    <b>My portfolio mobile app made in React Native and Typescript.</b>
  </p>
  
  <br />
  
  <img src=".github/examples/example.gif" />
</div>

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
3. Prebuild both ios and android (optionnal)
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
npx eas build --platform android|ios|all --profile development|preview|production
```

- You can also create a build locally
  ```sh
  npx eas build --platform android|ios|all --profile development|preview|production --local
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
