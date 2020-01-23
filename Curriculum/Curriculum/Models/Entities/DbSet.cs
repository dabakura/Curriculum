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
            if ("Knowledge" == typeof(T).Name)
            {
               return "{ \"Frameworks\" : [ { \"Imagen\" : \"angular.png\", \"Level\" : 7, \"Name\" : \"Angular\" } ],\"Languages\" : [ {\"Imagen\" : \"espanol.png\",\"Level\" : 10,\"Name\" : \"Español\"}, {\"Imagen\" : \"ingles.png\", \"Level\" : 6,\"Name\" : \"Ingles\"} ],\"Otros\" : [ {\"Description\" : \"XML, JSON\",\"Name\" : \"Formatos\"} ],\"Programming_Languages\" : [ {\"Imagen\" : \"Csharp.png\",\"Level\" : 8.5,\"Name\" : \"C#\"} ],\"Technologies\" : [ {\"List\" : [ \"JavaFX\", \"JavaEE\", \"Java Web\", \"ASP\", \"Android\", \"WinForm\", \"WPF\", \".Net-Core\" ],\"Name\" : \"Programación\"}]}";
            }
            if ("Information" == typeof(T).Name)
            {
               return "{\"Birth_Date\" : \"17/07/1989\",\"Civil_Status\" : \"Soltero\",\"Identification\" : \"1-1396-0817\",\"Location\" : \"Guadalupe Bº Pilar\",\"Mail\" : \"davidcamposch@gmail.com\",\"Name\" : \"David\",\"Phone\" : \"+506 60958027\",\"Qualities\" : \"Responsable, honrado, eficiente, eficaz, enfocado en resultados, proactivo, facilidad de aprendizaje, autosuficiencia, compromiso con el trabajo, trabajo bajo presión. Me gusta trabajar en grupo y aportar mis conocimientos individuales, soy bueno acatando ordenes y resolviendo limitaciones.\",\"Surnames\" : \"Campos Chavarría\"}";
            }
            if ("Reference" == typeof(T).Name)
            {
               return "{\"Jobs\":[{\"Admission\": \"12/04/2017\",\"Departure\": \"22/06/2019\",\"Company\": \"C&D Soporte Técnico\",\"Position\": \"Developer and Technical Support\",\"Description\": \"Tareas realizadas: Mantenimiento preventivo, Mantenimiento correctivo, Configuración de redes, Reparación de dispositivos electrónicos, programación, asesoramiento, entre otros.\",\"Phone\": \"23457845\" } ],\"Personals\":[{\"Name\": \"Elva Lopez\",\"Phone\": \"23457845\",\"Image\": \"cartadeelva.png\",\"Pdf\": \"cartadeelva.pdf\"} ]}";
            }
            return "[]";
            //throw;
         }
      }
   }
}