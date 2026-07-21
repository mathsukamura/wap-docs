import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class InstallationComponent {
  step1Code = `dotnet add package Wap --version 2.0.0`
  step2Code = `using Wap;\nusing Wap.Types;`
  step3Code = `var client = await WapClient.CreateAsync(\n    authFolder: "./auth_session"\n);\nawait client.ConnectAsync();`
}
