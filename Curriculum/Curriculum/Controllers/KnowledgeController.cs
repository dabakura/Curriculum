using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Curriculum.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Curriculum.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class KnowledgeController : ControllerBase
    {
        private readonly ILogger<KnowledgeController> _logger;

        public KnowledgeController(ILogger<KnowledgeController> logger)
        {
            _logger = logger;
        }

        // GET: api/Knowledge
        [HttpGet]
        public async Task<string> Get()
        {
            try
            {
                _logger.LogInformation("Intento de conección con Firebase url database/Knowledge");
                string json = await FirebaseContext.Database.Knowledges.GetAllAsync();
                _logger.LogInformation("Se conecto con Firebase");
                return json;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error: Fallo la conección con Firebase url database/Knowledge", ex);
                throw new ArgumentException("Se presento un error al procesar la inforamación", ex);
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
