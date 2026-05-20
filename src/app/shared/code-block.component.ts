import { Component, Input, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-code-block',
  template: `
    <div class="rounded-lg border border-border overflow-hidden">
      <div class="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
        <span class="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{{ language }}</span>
        <button
          (click)="copyCode()"
          class="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          @if (copied) {
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Copiado
          } @else {
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            Copiar
          }
        </button>
      </div>
      <div class="overflow-x-auto bg-[#fafafa] dark:bg-[#1e1e2e] p-4 transition-colors">
        <pre class="!m-0 !bg-transparent" #codeEl><code class="!text-xs !leading-relaxed" [innerHTML]="highlightedCode"></code></pre>
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }
    pre, code { font-family: 'Consolas', 'Monaco', 'Courier New', monospace; }
    :host ::ng-deep code { color: #383a42; }
    :host ::ng-deep .token.tag { color: #e45649; }
    :host ::ng-deep .token.attr-name { color: #c18401; }
    :host ::ng-deep .token.attr-value { color: #50a14f; }
    :host ::ng-deep .token.punctuation { color: #383a42; }
    :host ::ng-deep .token.string { color: #50a14f; }
    :host ::ng-deep .token.keyword { color: #a626a4; }
    :host ::ng-deep .token.function { color: #4078f2; }
    :host ::ng-deep .token.number { color: #986801; }
    :host ::ng-deep .token.operator { color: #0184bc; }
    :host ::ng-deep .token.comment { color: #a0a1a7; font-style: italic; }
    :host ::ng-deep .token.class-name { color: #c18401; }
    :host ::ng-deep .token.property { color: #4078f2; }
    :host-context(.dark) ::ng-deep code { color: #cdd6f4; }
    :host-context(.dark) ::ng-deep .token.tag { color: #f38ba8; }
    :host-context(.dark) ::ng-deep .token.attr-name { color: #a6e3a1; }
    :host-context(.dark) ::ng-deep .token.attr-value { color: #fab387; }
    :host-context(.dark) ::ng-deep .token.punctuation { color: #cdd6f4; }
    :host-context(.dark) ::ng-deep .token.string { color: #fab387; }
    :host-context(.dark) ::ng-deep .token.keyword { color: #cba6f7; }
    :host-context(.dark) ::ng-deep .token.function { color: #89b4fa; }
    :host-context(.dark) ::ng-deep .token.number { color: #fab387; }
    :host-context(.dark) ::ng-deep .token.operator { color: #89dceb; }
    :host-context(.dark) ::ng-deep .token.comment { color: #6c7086; font-style: italic; }
    :host-context(.dark) ::ng-deep .token.class-name { color: #f9e2af; }
    :host-context(.dark) ::ng-deep .token.property { color: #89b4fa; }
  `,
})
export class CodeBlockComponent implements AfterViewInit {
  @Input() code = ''
  @Input() language = 'csharp'
  @ViewChild('codeEl') codeEl!: ElementRef

  highlightedCode = ''
  copied = false

  private isBrowser: boolean

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId)
  }

  async ngAfterViewInit() {
    if (!this.isBrowser) {
      this.highlightedCode = this.escapeHtml(this.code)
      return
    }

    const Prism = await import('prismjs')
    // @ts-ignore
    await import('prismjs/components/prism-csharp')
    // @ts-ignore
    await import('prismjs/components/prism-bash')
    // @ts-ignore
    await import('prismjs/components/prism-json')

    const lang = Prism.default.languages[this.language] || Prism.default.languages['clike']
    this.highlightedCode = Prism.default.highlight(this.code, lang, this.language)
  }

  copyCode() {
    navigator.clipboard.writeText(this.code)
    this.copied = true
    setTimeout(() => (this.copied = false), 2000)
  }

  private escapeHtml(str: string): string {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }
}
