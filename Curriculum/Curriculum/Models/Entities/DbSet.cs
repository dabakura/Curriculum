using Firebase.Database.Query;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Curriculum.Entities
{
    public class DbSet<T> : FirebaseDB where T : class
    {
        //public async Task<string> TaskAsync<String> ExistAsync(int Id)
        //{
        //    var data = await firebaseClient
        //      .Child("prueba")
        //      .OrderByKey()
        //      .OnceAsync<PruebaViewModel>();
        //}
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
        //Task<String> GetAsync(int Id);
        //Task<bool> DeleteAsync(int Id);
        //Task<T> UpdateAsync(T entity);
        //Task<T> AddAsync(T entity);
    }
}
