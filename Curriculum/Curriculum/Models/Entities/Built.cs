using System;

namespace Curriculum.Models.Entities
{
    public class Built
    {
        public String Github { get; set; }
        public String Link { get; set; }
        public BuiltItem[] ListBuilt { get; set; }
        public String Type { get; set; }
    }

    public class BuiltItem
    {
        public String Name { get; set; }
        public String Image { get; set; }
    }
}