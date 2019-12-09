using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Curriculum.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Curriculum.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InformationController : ControllerBase
    {
        // GET: api/Information
        [HttpGet]
        public async Task<string> Get()
        {
            try
            {
                string json = await FirebaseContext.Database.Informations.GetAllAsync();
                return json;
            }
            catch (Exception ex)
            {
                throw new ArgumentException("Se presento un error al procesar la inforamación",ex);
            }
        }

        // GET: api/Information/5
        [HttpGet("{id}", Name = "Get")]
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
