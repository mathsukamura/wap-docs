import { Component } from '@angular/core'
import { CodeBlockComponent } from '../../../shared/code-block.component'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  imports: [CodeBlockComponent],
  host: { class: 'block' },
})
export class MediaComponent {
  imageCode = `var imgBytes = await File.ReadAllBytesAsync("photo.jpg");\nawait client.SendImageAsync(jid, imgBytes, "legenda");`
  videoCode = `var vidBytes = await File.ReadAllBytesAsync("clip.mp4");\nawait client.SendVideoAsync(jid, vidBytes, "vídeo legal");`
  audioCode = `var audioBytes = await File.ReadAllBytesAsync("voice.ogg");\nawait client.SendAudioAsync(jid, audioBytes, ptt: true);`
  docCode = `var docBytes = await File.ReadAllBytesAsync("report.pdf");\nawait client.SendDocumentAsync(jid, docBytes, "report.pdf");`
  stickerCode = `var stickerBytes = await File.ReadAllBytesAsync("sticker.webp");\nawait client.SendStickerAsync(jid, stickerBytes);`
  downloadCode = `client.OnMessage(async msg =>\n{\n    if (msg.Message.ImageMessage != null)\n    {\n        var bytes = await client.DownloadImageAsync(\n            msg.Message.ImageMessage);\n        await File.WriteAllBytesAsync("received.jpg", bytes);\n    }\n});`
}
