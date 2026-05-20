import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

interface NavItem {
  label: string
  slug: string
}

interface NavGroup {
  title: string
  items: NavItem[]
}

@Component({
  selector: 'app-docs-layout',
  imports: [RouterModule],
  templateUrl: './docs-layout.component.html',
  host: { class: 'block' },
})
export class DocsLayoutComponent {
  sidebarOpen = false

  navGroups: NavGroup[] = [
    {
      title: 'Primeiros Passos',
      items: [
        { label: 'Introdução', slug: 'introduction' },
        { label: 'Instalação', slug: 'installation' },
        { label: 'Conexão', slug: 'connection' },
      ],
    },
    {
      title: 'Funcionalidades',
      items: [
        { label: 'Mensagens', slug: 'messages' },
        { label: 'Media', slug: 'media' },
        { label: 'Grupos', slug: 'groups' },
        { label: 'Chats', slug: 'chats' },
        { label: 'Canais', slug: 'channels' },
        { label: 'Eventos', slug: 'events' },
      ],
    },
  ]

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen
  }

  closeSidebar() {
    this.sidebarOpen = false
  }
}
