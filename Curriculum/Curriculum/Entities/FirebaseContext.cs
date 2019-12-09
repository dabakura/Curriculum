using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Curriculum.Entities
{
    public class FirebaseContext : IFirebaseContext
    {
		private static FirebaseContext database;

		public FirebaseContext()
		{
			this.Informations = new DbSet<Information>();
		}

		public static FirebaseContext Database
		{
			get { return  database ?? (database = new FirebaseContext()); }
		}

		public DbSet<Information> Informations { get; set; }
    }
}
