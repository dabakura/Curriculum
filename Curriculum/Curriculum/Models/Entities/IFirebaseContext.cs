using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Curriculum.Models.Entities
{
    public interface IFirebaseContext
    {
        DbSet<Information> Informations { get; set; }
        DbSet<Knowledge> Knowledges { get; set; }
        DbSet<Project> Projects { get; set; }
        DbSet<Certification> Certifications { get; set; }
        DbSet<Reference> References { get; set; }
    }
}
