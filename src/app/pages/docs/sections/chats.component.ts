import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class ChatsComponent {
  presenceCode = `await client.Chats.SendTyping(jid);\nawait client.Chats.SendRecordingPresence(jid);\nawait client.Chats.SendPresenceUpdate(PresenceType.Available);`
  actionsCode = `await client.Chats.ArchiveChat(jid);\nawait client.Chats.PinChat(jid);\nawait client.Chats.MuteChat(jid);\nawait client.Chats.DeleteChat(jid);\nawait client.Chats.ClearChat(jid);`
  profileCode = `await client.Chats.UpdateProfileStatusAsync("Ocupado");\nawait client.Chats.UpdateProfileNameAsync("Meu Nome");\nvar status = await client.Chats.GetStatusAsync(jid);`
  blockCode = `await client.Chats.BlockUserAsync(jid);\nawait client.Chats.UnblockUserAsync(jid);\nvar blocked = await client.Chats.GetBlockListAsync();`
}
