using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Curriculum.Models.Entities
{
    public class FirebaseContext : IFirebaseContext
    {
		private static FirebaseContext database;

		public FirebaseContext()
		{
			this.Informations = new DbSet<Information>();
			this.Knowledges = new DbSet<Knowledge>();
            this.Projects = new DbSet<Project>();
            this.Certifications = new DbSet<Certification>();
        }

		public static FirebaseContext Database
		{
			get { return  database ?? (database = new FirebaseContext()); }
		}

		public DbSet<Information> Informations { get; set; }
		public DbSet<Knowledge> Knowledges { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Certification> Certifications { get; set; }
    }
}
