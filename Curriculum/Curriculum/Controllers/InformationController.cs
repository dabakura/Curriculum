using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Curriculum.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

namespace Curriculum.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InformationController : ControllerBase
    {
        private readonly ILogger<InformationController> _logger;
        private IMemoryCache _cache;

        public InformationController(ILogger<InformationController> logger, IMemoryCache memoryCache)
        {
            _logger = logger;
            _cache = memoryCache;
        }

        // GET: api/Information
        [HttpGet]
        public async Task<string> Get()
        {
            try
            {
                if (!_cache.TryGetValue("Information", out string json))
                {
                    if (String.IsNullOrEmpty(json))
                    {
                        _logger.LogInformation("Intento de conección con Firebase url database/Information");
                        json = await FirebaseContext.Database.Informations.GetAllAsync();
                        _logger.LogInformation("Se conecto con Firebase [Information]");
                    }
                    var cacheEntryOptions = new MemoryCacheEntryOptions()
                        .SetSlidingExpiration(TimeSpan.FromMinutes(20))
                        .SetAbsoluteExpiration(DateTime.Now.AddHours(1));
                    _cache.Set("Information", json, cacheEntryOptions);
                }
                else
                    _logger.LogInformation("Se cargo información desde la cache [Information]");
                return json;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error: Fallo la conección con Firebase url database/Information", ex);
                throw new ArgumentException("Se presento un error al procesar la información database/Information", ex);
            }
        }

        // GET: api/Information/5
        [HttpGet("{id}", Name = "GetInformation")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Information
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Information/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
