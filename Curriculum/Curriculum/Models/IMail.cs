using System;
namespace Curriculum.Models
{
    public interface IMail
    {
        String From { get; set; }
        String Subject { get; set; }
        String Message { get; set; }
    }
}
