import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class ChannelsComponent {
  newsletterCode = `var nl = await client.Channels.CreateNewsletterAsync(\n    "Meu Canal", "Descrição do canal");\nvar list = await client.Channels.GetSubscribedNewslettersAsync();\nawait client.Channels.SubscribeNewsletterAsync(nlJid);\nvar results = await client.Channels.SearchNewslettersAsync("tech");`
  communityCode = `var community = await client.Channels.CreateCommunityAsync(\n    "Minha Comunidade");\nvar groups = await client.Channels.GetCommunityGroupsAsync(communityJid);\nawait client.Channels.LinkGroupToCommunityAsync(\n    communityJid, groupJid);`
}
