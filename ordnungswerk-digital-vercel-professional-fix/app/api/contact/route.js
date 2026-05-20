import nodemailer from 'nodemailer';
export async function POST(req){
  const form=await req.formData();
  const data=Object.fromEntries(form.entries());
  const required=['name','email','message'];
  if(required.some(k=>!data[k])) return new Response('Bitte alle Pflichtfelder ausfüllen.',{status:400});
  const host=process.env.SMTP_HOST, port=process.env.SMTP_PORT, user=process.env.SMTP_USER, pass=process.env.SMTP_PASS, to=process.env.CONTACT_TO || 'info@ordnungswerk-digital.de';
  if(!host||!port||!user||!pass){return new Response('SMTP ist noch nicht konfiguriert. Bitte SMTP_HOST, SMTP_PORT, SMTP_USER und SMTP_PASS in Vercel setzen.',{status:503});}
  const transporter=nodemailer.createTransport({host,port:Number(port),secure:Number(port)===465,auth:{user,pass}});
  await transporter.sendMail({from:`OrdnungsWerk Website <${user}>`,to,replyTo:String(data.email),subject:'Neue Anfrage über ordnungswerk-digital.de',text:`Name: ${data.name}\nE-Mail: ${data.email}\nTelefon: ${data.phone||'-'}\nBereich: ${data.area||'-'}\n\nNachricht:\n${data.message}`});
  return new Response('<h1>Danke für deine Anfrage.</h1><p>Die Nachricht wurde versendet.</p><p><a href="/">Zurück zur Startseite</a></p>',{headers:{'content-type':'text/html; charset=utf-8'}});
}
