using Firebase.Database.Query;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Curriculum.Models.Entities
{
    public class DbSet<T> : FirebaseDB where T : class
    {
        public async Task<String> GetAllAsync()
        {
            try
            {
                String colection = typeof(T).Name;
                var data = await Firebase
                  .Child(colection)
                  .OrderByKey()
                  .OnceSingleAsync<Object>();

                String json = JsonConvert.SerializeObject(data);
                return json;
            }
            catch
            {
                throw;
            }
        }
    }
}
