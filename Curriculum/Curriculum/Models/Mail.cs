using System;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;

namespace Curriculum.Models
{
    public class Mail
    {
        private readonly string PASSWORD = Environment.GetEnvironmentVariable("EMAIL_PASSWORD");
        private readonly string TO = Environment.GetEnvironmentVariable("EMAIL");
        public IMail Email { get; private set; }

        public Mail(IMail email)
        {
            Email = email;
        }

        public async Task<bool> SendMailAsync()
        {
            var mimemessage = new MimeMessage();
            mimemessage.From.Add(new MailboxAddress(Email.From, Email.From));
            mimemessage.To.Add(new MailboxAddress("Urgente Trabajo", TO));
            mimemessage.Subject = Email.Subject;
            mimemessage.Body = new TextPart("plain")
            {
                Text = Email.Message + "\n\nDesde: " + Email.From
            };

            using(var client = new SmtpClient())
            {
                try
                {
                    await client.ConnectAsync("smtp.gmail.com", 587, false);
                    await client.AuthenticateAsync(TO, PASSWORD);
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
