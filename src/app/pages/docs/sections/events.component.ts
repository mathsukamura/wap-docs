import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class EventsComponent {
  allEventsCode = `client.OnConnectionUpdate(update => { });\nclient.OnMessage(msg => { });\nclient.OnReceipt(node => { });\nclient.OnDecryptionError((msgId, ex) => { });\nclient.OnHistorySync(data => { });\nclient.OnIdentityChanged(evt => { });`
  connectionCode = `client.OnConnectionUpdate(update =>\n{\n    switch (update.Connection)\n    {\n        case ConnectionState.Open:\n            Console.WriteLine("Conectado!");\n            break;\n        case ConnectionState.Close:\n            Console.WriteLine($"Desconectado: {update.DisconnectReason}");\n            break;\n        case ConnectionState.Connecting:\n            Console.WriteLine("Conectando...");\n            break;\n    }\n});`
  messageCode = `client.OnMessage(msg =>\n{\n    Console.WriteLine($"De: {msg.Sender}");\n    Console.WriteLine($"Texto: {msg.TextContent}");\n    Console.WriteLine($"Grupo: {msg.IsGroup}");\n    Console.WriteLine($"Tipo: {msg.Type}");\n});`
}
