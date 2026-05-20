import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'docs',
    loadComponent: () =>
      import('./pages/docs/docs-layout.component').then((m) => m.DocsLayoutComponent),
    children: [
      { path: '', redirectTo: 'introduction', pathMatch: 'full' },
      {
        path: 'introduction',
        loadComponent: () =>
          import('./pages/docs/sections/introduction.component').then((m) => m.IntroductionComponent),
      },
      {
        path: 'installation',
        loadComponent: () =>
          import('./pages/docs/sections/installation.component').then((m) => m.InstallationComponent),
      },
      {
        path: 'connection',
        loadComponent: () =>
          import('./pages/docs/sections/connection.component').then((m) => m.ConnectionComponent),
      },
      {
        path: 'messages',
        loadComponent: () =>
          import('./pages/docs/sections/messages.component').then((m) => m.MessagesComponent),
      },
      {
        path: 'media',
        loadComponent: () =>
          import('./pages/docs/sections/media.component').then((m) => m.MediaComponent),
      },
      {
        path: 'groups',
        loadComponent: () =>
          import('./pages/docs/sections/groups.component').then((m) => m.GroupsComponent),
      },
      {
        path: 'chats',
        loadComponent: () =>
          import('./pages/docs/sections/chats.component').then((m) => m.ChatsComponent),
      },
      {
        path: 'channels',
        loadComponent: () =>
          import('./pages/docs/sections/channels.component').then((m) => m.ChannelsComponent),
      },
      {
        path: 'events',
        loadComponent: () =>
          import('./pages/docs/sections/events.component').then((m) => m.EventsComponent),
      },
    ],
  },
]
