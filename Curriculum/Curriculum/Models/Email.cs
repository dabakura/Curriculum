using System;
namespace Curriculum.Entities
{
    public class Email : IMail
    {
        private String _from;
        private String _subject;
        private String _message;

        public Email()
        {
        }

        public Email(String from, String subject, String message)
        {
            From = from;
            Subject = subject;
            Message = message;
        }

        public string From { get => _from; set => _from = value; }
        public string Subject { get => _subject; set => _subject = value; }
        public string Message { get => _message; set => _message = value; }
    }
}
