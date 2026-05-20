import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-introduction',
  imports: [RouterModule],
  templateUrl: './introduction.component.html',
  host: { class: 'block' },
})
export class IntroductionComponent {}
