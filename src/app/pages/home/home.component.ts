import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  host: { class: 'block' },
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('heroTitle') heroTitle!: ElementRef
  @ViewChild('heroDesc') heroDesc!: ElementRef
  @ViewChild('heroCta') heroCta!: ElementRef
  @ViewChildren('featureCard') featureCards!: QueryList<ElementRef>
  @ViewChildren('techItem') techItems!: QueryList<ElementRef>

  private isBrowser: boolean

  features = [
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      title: 'End-to-End Encryption',
      description: 'Signal Protocol completo com Double Ratchet e Sender Key para grupos.',
    },
    {
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      title: 'Mensagens Completas',
      description: 'Texto, imagem, vídeo, áudio, documento, sticker, contato, localização e reações.',
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Grupos e Comunidades',
      description: 'CRUD completo de grupos, participantes, convites, newsletters e comunidades.',
    },
    {
      icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
      title: 'Media Upload/Download',
      description: 'Upload e download de mídia com criptografia AES-CBC + HMAC automática.',
    },
    {
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      title: 'Auto-Reconnect',
      description: 'Reconexão automática com exponential backoff e detecção de identity change.',
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'QR Code e Pairing Code',
      description: 'Autenticação via QR Code no terminal ou Pairing Code de 8 dígitos.',
    },
  ]

  techStack = [
    { name: '.NET 8', description: 'Runtime principal', icon: 'dotnet' },
    { name: 'C#', description: 'Linguagem principal', icon: 'csharp' },
    { name: 'Signal Protocol', description: 'Criptografia E2E', icon: 'signal' },
    { name: 'Protobuf', description: 'Serialização', icon: 'protobuf' },
    { name: 'WebSocket', description: 'Conexão real-time', icon: 'websocket' },
    { name: 'Noise Protocol', description: 'Handshake seguro', icon: 'noise' },
  ]

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId)
  }

  async ngAfterViewInit() {
    if (!this.isBrowser) return

    const gsap = (await import('gsap')).default
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(this.heroTitle.nativeElement, { y: 60, opacity: 0, duration: 1 })
      .from(this.heroDesc.nativeElement, { y: 40, opacity: 0, duration: 0.8 }, '-=0.5')
      .from(this.heroCta.nativeElement, { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')

    this.featureCards.forEach((card, i) => {
      gsap.from(card.nativeElement, {
        scrollTrigger: { trigger: card.nativeElement, start: 'top 85%', toggleActions: 'play none none none' },
        y: 50, opacity: 0, duration: 0.6, delay: i * 0.1,
      })
    })

    this.techItems.forEach((item, i) => {
      gsap.from(item.nativeElement, {
        scrollTrigger: { trigger: item.nativeElement, start: 'top 90%', toggleActions: 'play none none none' },
        x: -30, opacity: 0, duration: 0.5, delay: i * 0.08,
      })
    })
  }
}
