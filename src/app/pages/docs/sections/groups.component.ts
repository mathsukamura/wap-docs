import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class GroupsComponent {
  createCode = `var group = await client.Groups.CreateGroupAsync(\n    "Meu Grupo", new[] { jid1, jid2 });`
  metadataCode = `var meta = await client.Groups.GetGroupMetadataAsync(groupJid);\nConsole.WriteLine($"Nome: {meta.Subject}");\nConsole.WriteLine($"Participantes: {meta.Participants.Count}");`
  participantsCode = `await client.Groups.AddParticipantsAsync(groupJid, new[] { newMember });\nawait client.Groups.PromoteParticipantsAsync(groupJid, new[] { admin });\nawait client.Groups.RemoveParticipantsAsync(groupJid, new[] { member });\nawait client.Groups.DemoteParticipantsAsync(groupJid, new[] { admin });`
  settingsCode = `await client.Groups.UpdateGroupSubjectAsync(groupJid, "Novo Nome");\nawait client.Groups.UpdateGroupDescriptionAsync(groupJid, "Descrição");\nawait client.Groups.UpdateGroupSettingsAsync(\n    groupJid, GroupSetting.Announcement, true);`
  inviteCode = `var code = await client.Groups.GetInviteCodeAsync(groupJid);\nawait client.Groups.JoinGroupViaInviteAsync(code);\nawait client.Groups.RevokeInviteCodeAsync(groupJid);`
}
