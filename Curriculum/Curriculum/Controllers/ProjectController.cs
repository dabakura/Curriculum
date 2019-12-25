using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Curriculum.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Curriculum.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjectController : Controller
    {
        private readonly ILogger<KnowledgeController> _logger;
        private IMemoryCache _cache;

        public ProjectController(ILogger<KnowledgeController> logger, IMemoryCache memoryCache)
        {
            _logger = logger;
            _cache = memoryCache;
        }

        // GET: api/Project
        [HttpGet]
        public async Task<string> Get()
        {
            try
            {
                if (!_cache.TryGetValue("Project", out string json))
                {
                    if (String.IsNullOrEmpty(json))
                    {
                        _logger.LogInformation("Intento de conección con Firebase url database/Project");
                        json = await FirebaseContext.Database.Projects.GetAllAsync();
                        _logger.LogInformation("Se conecto con Firebase [Project]");
                    }
                    var cacheEntryOptions = new MemoryCacheEntryOptions()
                        .SetSlidingExpiration(TimeSpan.FromMinutes(20))
                        .SetAbsoluteExpiration(DateTime.Now.AddHours(1));
                    _cache.Set("Project", json, cacheEntryOptions);
                }
                else
                    _logger.LogInformation("Se cargo información desde la cache [Project]");
                return json;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error: Fallo la conección con Firebase url database/Project", ex);
                throw new ArgumentException("Se presento un error al procesar la información database/Project", ex);
            }
        }

        // GET: api/Project/5
        [HttpGet("{id}", Name = "GetProject")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Project
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Project/5
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
