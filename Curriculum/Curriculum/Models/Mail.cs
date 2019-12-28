using System;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;

namespace Curriculum.Entities
{
    public class Mail
    {
        private string _password;

        public Mail(IMail email)
        {
            Email = email;
            _password = "xxxxxxx";
        }

        public IMail Email { get; private set; }
        public string To => "davidcamposch@gmail.com";

        public async Task<bool> SendMailAsync()
        {
            var mimemessage = new MimeMessage();
            mimemessage.From.Add(new MailboxAddress(Email.From));
            mimemessage.To.Add(new MailboxAddress(To));
            mimemessage.Subject = Email.Subject;
            mimemessage.Body = new TextPart("plain")
            {
                Text = Email.Message
            };

            using(var client = new SmtpClient())
            {
                try
                {
                    await client.ConnectAsync("smtp.gmail.com", 587, false);
                    await client.AuthenticateAsync(To, _password);
                    await client.SendAsync(mimemessage);
                    await client.DisconnectAsync(true);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return true;
        }
    }
}
