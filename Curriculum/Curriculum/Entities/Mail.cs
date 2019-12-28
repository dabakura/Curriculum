using System;
namespace Curriculum.Entities
{
    public class SendMail
    {
        private String _password;

        public SendMail(IMail mail)
        {
            Mail = mail;
            _password = "xxxxxxx";
        }

        public IMail Mail { get; private set; }
        public String To { get => "davidcamposch@gmail.com"; }  
    }
}
