import { MailtrapClient } from "mailtrap";

const TOKEN = "";

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "arveedurante220@gmail.com",
  },
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Welcome to the app",
    category: "Integration Test",
  })
  .then(console.log, console.error);
