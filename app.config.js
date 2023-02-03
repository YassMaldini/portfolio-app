import 'dotenv/config';

export default {
  expo: {
    name: 'YassBK',
    slug: 'portfolio-app',
    version: '0.1.1',
    runtimeVersion: '0.1.0',
    jsEngine: 'hermes',
    icon: './assets/icon.png',
    orientation: 'default',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      requireFullScreen: true,
      bundleIdentifier: 'com.ios.yassbk.portfolio',
      buildNumber: '6',
      enableHermes: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
      },
      package: 'com.android.yassbk.portfolio',
      versionCode: 6,
      enableHermes: true,
    },
    web: {
      favicon: './assets/favicon.png',
    },
    packagerOpts: {
      sourceExts: ['her', 'js', 'jsx'],
    },
    plugins: [
      [
        'expo-build-properties',
        {
          android: {
            compileSdkVersion: 31,
            targetSdkVersion: 31,
            buildToolsVersion: '31.0.0',
          },
        },
      ],
      [
        'expo-screen-orientation',
        {
          initialOrientation: 'ALL',
        },
      ],
      [
        '@config-plugins/detox',
        {
          subdomains: '*',
        },
      ],
      ['sentry-expo'],
      ['expo-community-flipper'],
      ['react-native-flipper-performance-plugin'],
    ],
    hooks: {
      postPublish: [
        {
          file: 'sentry-expo/upload-sourcemaps',
          config: {
            organization: 'personnal-use',
            project: 'portfolio-app',
            authToken: process.env.SENTRY_API_KEY,
          },
        },
      ],
    },
    extra: {
      eas: {
        projectId: 'e88c6276-c596-4933-ac78-d670600d45d7',
      },
      googleMapsApiKey: process.env.MAPS_API_KEY,
    },
  },
};
