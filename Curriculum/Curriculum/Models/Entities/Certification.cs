using System;
namespace Curriculum.Models.Entities
{
    public class Certification
    {
        public string Date { get; set; }
        public string Institution { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public string Pdf { get; set; }
        public Int32 Order { get; set; }
    }
}
