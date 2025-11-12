class Field {
  name: string;
  value: string;

  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}

class Embed {
  title: string;
  description: string;
  color: number;
  fields: Field[];

  constructor(title: string, description: string, color: number, fields: Field[] = []) {
    this.title = title;
    this.description = description;
    this.color = color;
    this.fields = fields;
  }
}

async function sendWebhook(embed: Embed, url: string) {
  const body = {
    embeds: [
      {
        title: embed.title,
        description: embed.description,
        color: embed.color,
        fields: embed.fields.map(f => ({
          name: f.name,
          value: f.value,
        })),
      },
    ],
    attachments: [],
  };

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}
