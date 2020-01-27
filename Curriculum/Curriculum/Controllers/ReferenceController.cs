using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Curriculum.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Curriculum.Controllers
{
   [ApiController]
   [Route("api/[controller]")]
   public class ReferenceController : Controller
   {
      private readonly ILogger<ReferenceController> _logger;
      private IMemoryCache _cache;

      public ReferenceController(ILogger<ReferenceController> logger, IMemoryCache memoryCache)
      {
         _logger = logger;
         _cache = memoryCache;
      }
      // GET: api/Reference
      [HttpGet]
      public async Task<string> Get()
      {
         try
         {
            if (!_cache.TryGetValue("Reference", out string json))
            {
               if (String.IsNullOrEmpty(json))
               {
                  _logger.LogInformation("Intento de conección con Firebase url database/Reference");
                  json = await FirebaseContext.Database.References.GetAllAsync();
                  _logger.LogInformation("Se conecto con Firebase [Reference]");
               }
               var cacheEntryOptions = new MemoryCacheEntryOptions()
                   .SetSlidingExpiration(TimeSpan.FromMinutes(20))
                   .SetAbsoluteExpiration(DateTime.Now.AddHours(1));
               _cache.Set("Reference", json, cacheEntryOptions);
            }
            else
               _logger.LogInformation("Se cargo información desde la cache [Reference]");
            return json;
         }
         catch (Exception ex)
         {
            _logger.LogError("Error: Fallo la conección con Firebase url database/Reference", ex);
            throw new ArgumentException("Se presento un error al procesar la información database/Reference", ex);
         }
      }

      // GET: Reference/5
      [HttpGet("{id}", Name = "GetReference")]
      public string Get(int id)
      {
         return "value";
      }

      // POST api/values
      [HttpPost]
      public void Post([FromBody]string value)
      {
      }

      // PUT api/values/5
      [HttpPut("{id}")]
      public void Put(int id, [FromBody]string value)
      {
      }

      // DELETE api/values/5
      [HttpDelete("{id}")]
      public void Delete(int id)
      {
      }
   }
}
