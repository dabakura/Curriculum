using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Curriculum.Models
{
    [BindProperties(SupportsGet = true)]
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
        [BindRequired]
        public string From { get => _from; set => _from = value; }
        [BindRequired]
        public string Subject { get => _subject; set => _subject = value; }
        [BindRequired]
        public string Message { get => _message; set => _message = value; }
    }
}
