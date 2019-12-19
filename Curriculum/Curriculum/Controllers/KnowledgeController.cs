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
    public class KnowledgeController : ControllerBase
    {
        private readonly ILogger<KnowledgeController> _logger;
        private IMemoryCache _cache;

        public KnowledgeController(ILogger<KnowledgeController> logger, IMemoryCache memoryCache)
        {
            _logger = logger;
            _cache = memoryCache;
        }

        // GET: api/Knowledge
        [HttpGet]
        public async Task<string> Get()
        {
            try
            {
                if (!_cache.TryGetValue("Knowledge", out string json))
                {
                    if (String.IsNullOrEmpty(json))
                    {
                        _logger.LogInformation("Intento de conección con Firebase url database/Knowledge");
                        json = await FirebaseContext.Database.Knowledges.GetAllAsync();
                        _logger.LogInformation("Se conecto con Firebase [Knowledge]");
                    }
                    var cacheEntryOptions = new MemoryCacheEntryOptions()
                        .SetSlidingExpiration(TimeSpan.FromMinutes(20))
                        .SetAbsoluteExpiration(DateTime.Now.AddHours(1));
                    _cache.Set("Knowledge", json, cacheEntryOptions);
                } else
                    _logger.LogInformation("Se cargo información desde la cache [Knowledge]");
                return json;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error: Fallo la conección con Firebase url database/Knowledge", ex);
                throw new ArgumentException("Se presento un error al procesar la información database/Knowledge", ex);
            }
        }

        // GET: api/Knowledge/5
        [HttpGet("{id}", Name = "GetKnowledge")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Knowledge
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Knowledge/5
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
