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
   public class CertificationController : Controller
   {
      private readonly ILogger<CertificationController> _logger;
      private IMemoryCache _cache;

      public CertificationController(ILogger<CertificationController> logger, IMemoryCache memoryCache)
      {
         _logger = logger;
         _cache = memoryCache;
      }
      // GET: api/values
      [HttpGet]
      public async Task<string> Get()
      {
         try
         {
            if (!_cache.TryGetValue("Certification", out string json))
            {
               if (String.IsNullOrEmpty(json))
               {
                  _logger.LogInformation("Intento de conección con Firebase url database/Certification");
                  json = await FirebaseContext.Database.Certifications.GetAllAsync();
                  _logger.LogInformation("Se conecto con Firebase [Certification]");
               }
               var cacheEntryOptions = new MemoryCacheEntryOptions()
                   .SetSlidingExpiration(TimeSpan.FromMinutes(20))
                   .SetAbsoluteExpiration(DateTime.Now.AddHours(1));
               _cache.Set("Certification", json, cacheEntryOptions);
            }
            else
               _logger.LogInformation("Se cargo información desde la cache [Certification]");
            return json;
         }
         catch (Exception ex)
         {
            _logger.LogError("Error: Fallo la conección con Firebase url database/Certification", ex);
            throw new ArgumentException("Se presento un error al procesar la información database/Certification", ex);
         }
      }

      // GET api/values/5
      [HttpGet("{id}", Name = "GetCertification")]
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
