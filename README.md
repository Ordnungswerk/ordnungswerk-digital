# OrdnungsWerk Digital – Vercel Projekt

## Deployment
1. ZIP entpacken.
2. Ordner in ein neues GitHub Repository hochladen.
3. In Vercel: Add New Project → Repository importieren → Deploy.

## Kontaktformular
Damit das Formular Mails versendet, in Vercel unter Project Settings → Environment Variables setzen:

- SMTP_HOST=smtp.ionos.de
- SMTP_PORT=587
- SMTP_USER=info@ordnungswerk-digital.de
- SMTP_PASS=DEIN_IONOS_PASSWORT
- CONTACT_TO=info@ordnungswerk-digital.de

Danach neu deployen.

## Hinweis
Die Seite ist im Stil des gelieferten Screenshots umgesetzt. Das Menü enthält bewusst kein „Über mich“.
