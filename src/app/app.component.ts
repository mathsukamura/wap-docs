import { Component, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Wap'
  isDark = false
  mobileMenuOpen = false

  private isBrowser: boolean

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId)
    if (this.isBrowser) {
      const saved = localStorage.getItem('theme')
      this.isDark = saved === 'dark'
      if (this.isDark) {
        document.documentElement.classList.add('dark')
      }
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark
    if (this.isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen
  }
}
