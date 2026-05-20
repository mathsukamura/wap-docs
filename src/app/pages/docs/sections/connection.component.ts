import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class ConnectionComponent {
  basicCode = `var client = await WapClient.CreateAsync(\n    authFolder: "./auth_session"\n);\n\nclient.OnConnectionUpdate(update =>\n{\n    Console.WriteLine($"Status: {update.Connection}");\n});\n\nawait client.ConnectAsync();`
  eventsCode = `client.OnConnectionUpdate(update =>\n{\n    if (update.Connection == ConnectionState.Open)\n        Console.WriteLine("Conectado!");\n\n    if (update.Qr != null)\n        Console.WriteLine($"QR: {update.Qr}");\n\n    if (update.DisconnectReason == DisconnectReason.LoggedOut)\n        Console.WriteLine("Deslogado");\n});`
  disconnectCode = `await client.DisconnectAsync();`
}
