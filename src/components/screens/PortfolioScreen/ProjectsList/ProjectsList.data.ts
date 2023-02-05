import { TFunction } from 'react-i18next';
import { ProjectsListData } from './ProjectsList.types';

export const projectsListData: (t: TFunction) => ProjectsListData[] = (t) => [
  {
    title: t('portfolio:personal.title'),
    stack: ['React Native', 'Expo', 'Typescript', 'Redux'],
    date: `${t('commons:months.february')} 2023`,
    images: [],
  },
  {
    title: t('portfolio:twitch.title'),
    stack: ['React Native', 'Expo', 'Typescript', 'Redux'],
    date: `${t('commons:months.december')} 2022`,
    images: [
      {
        uri: 'https://yassbk.com/app_images/twitch/twitch1.png',
      },
      {
        uri: 'https://yassbk.com/app_images/twitch/twitch2.png',
      },
      {
        uri: 'https://yassbk.com/app_images/twitch/twitch3.png',
      },
      {
        uri: 'https://yassbk.com/app_images/twitch/twitch4.png',
      },
      {
        uri: 'https://yassbk.com/app_images/twitch/twitch5.png',
      },
      {
        uri: 'https://yassbk.com/app_images/twitch/twitch6.png',
      },
      {
        uri: 'https://yassbk.com/app_images/twitch/twitch7.png',
      },
      {
        uri: 'https://yassbk.com/app_images/twitch/twitch8.png',
      },
      {
        uri: 'https://yassbk.com/app_images/twitch/twitch9.png',
      },
      {
        uri: 'https://yassbk.com/app_images/twitch/twitch10.png',
      },
    ],
  },
  {
    title: t('portfolio:linguee.title'),
    stack: ['React Native', 'Expo', 'Typescript', 'Redux'],
    date: `${t('commons:months.november')} 2022`,
    images: [
      {
        uri: 'https://yassbk.com/app_images/linguee/IMG_0075.png',
      },
      {
        uri: 'https://yassbk.com/app_images/linguee/IMG_0076.png',
      },
      {
        uri: 'https://yassbk.com/app_images/linguee/IMG_0079.png',
      },
      {
        uri: 'https://yassbk.com/app_images/linguee/IMG_0074.png',
      },
      {
        uri: 'https://yassbk.com/app_images/linguee/IMG_0078.png',
      },
      {
        uri: 'https://yassbk.com/app_images/linguee/IMG_0077.png',
      },
    ],
  },
  {
    title: t('portfolio:instagram.title'),
    stack: ['React Native', 'Expo', 'Typescript', 'Redux'],
    date: `${t('commons:months.october')} 2022`,
    images: [
      {
        uri: 'https://yassbk.com/app_images/instagram/instagram1.png',
      },
      {
        uri: 'https://yassbk.com/app_images/instagram/instagram2.png',
      },
      {
        uri: 'https://yassbk.com/app_images/instagram/instagram3.png',
      },
      {
        uri: 'https://yassbk.com/app_images/instagram/instagram4.png',
      },
      {
        uri: 'https://yassbk.com/app_images/instagram/instagram5.png',
      },
    ],
  },
  {
    title: t('portfolio:appointment.title'),
    stack: ['React Native', 'Expo'],
    date: `${t('commons:seasons.autumn')} 2021`,
    images: [
      {
        uri: 'https://yassbk.com/cv_images/IMG_0091.PNG',
      },
      {
        uri: 'https://yassbk.com/cv_images/IMG_0092.PNG',
      },
      {
        uri: 'https://yassbk.com/cv_images/IMG_0093.PNG',
      },
      {
        uri: 'https://yassbk.com/cv_images/IMG_0094.PNG',
      },
      {
        uri: 'https://yassbk.com/cv_images/IMG_0095.PNG',
      },
    ],
  },
  {
    title: t('portfolio:food.title'),
    stack: ['React Native', 'Expo', 'Typescript'],
    date: `${t('commons:seasons.autumn')} 2021`,
    images: [
      {
        uri: 'https://yassbk.com/cv_images/IMG_0096.PNG',
      },
      {
        uri: 'https://yassbk.com/cv_images/IMG_0097.PNG',
      },
      {
        uri: 'https://yassbk.com/cv_images/IMG_0099.PNG',
      },
      {
        uri: 'https://yassbk.com/cv_images/IMG_0101.PNG',
      },
      {
        uri: 'https://yassbk.com/cv_images/IMG_0102.PNG',
      },
      {
        uri: 'https://yassbk.com/cv_images/IMG_0103.PNG',
      },
      {
        uri: 'https://yassbk.com/cv_images/IMG_0104.PNG',
      },
      {
        uri: 'https://yassbk.com/cv_images/IMG_0105.PNG',
      },
    ],
  },
];
