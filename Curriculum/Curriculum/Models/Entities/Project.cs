﻿using System;
namespace Curriculum.Models.Entities
{
    public class Project
    {
        public String Creation_Date { get; set; }
        public String Description { get; set; }
        public Boolean OnlyImage { get; set; }
        public String Title { get; set; }
        public String Video { get; set; }
        public String[] Images { get; set; }
        public Built Built { get; set; }
        public Int32 Order { get; set; }
    }
}
