import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class MessagesComponent {
  textCode = `var jid = Jid.Parse("5511999999999@s.whatsapp.net");\nawait client.SendTextAsync(jid, "Hello from Wap!");`
  reactionCode = `// fromMe: true se reagindo a mensagem propria\nawait client.SendReactionAsync(jid, messageId, "\\ud83d\\udc4d", fromMe: false);`
  locationCode = `await client.SendLocationAsync(jid, -23.55, -46.63, "Sao Paulo");`
  contactCode = `await client.SendContactAsync(jid, "John",\n    "BEGIN:VCARD\\nVERSION:3.0\\nFN:John\\nEND:VCARD");`
  receiveCode = `client.OnMessage(msg =>\n{\n    Console.WriteLine($"{msg.Sender}: {msg.TextContent}");\n\n    if (msg.Message.ImageMessage != null)\n        Console.WriteLine("Imagem recebida!");\n});`
  readCode = `await client.SendReadReceiptAsync(jid, new[] { messageId });`
}
