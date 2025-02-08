import 'dotenv/config';

export default {
  expo: {
    name: 'YassBK',
    slug: 'portfolio-app',
    version: '1.3.0',
    runtimeVersion: '1.3.0',
    jsEngine: 'hermes',
    icon: './assets/icon.png',
    orientation: 'portrait',
    userInterfaceStyle: 'dark',
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
      buildNumber: '11',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
      },
      package: 'com.android.yassbk.portfolio',
      versionCode: 11,
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
            compileSdkVersion: 34,
            targetSdkVersion: 34,
            buildToolsVersion: '34.0.0',
          },
        },
      ],
      [
        'expo-screen-orientation',
        {
          initialOrientation: 'ALL',
        },
      ],
      ['expo-font'],
      [
        '@config-plugins/detox',
        {
          subdomains: '*',
        },
      ],
      ['sentry-expo'],
    ],
    extra: {
      eas: {
        projectId: 'e88c6276-c596-4933-ac78-d670600d45d7',
      },
      googleMapsApiKey: process.env.MAPS_API_KEY,
    },
  },
};
