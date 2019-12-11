﻿using System;
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
    public class InformationController : ControllerBase
    {
        private readonly ILogger<InformationController> _logger;

        public InformationController(ILogger<InformationController> logger)
        {
            _logger = logger;
        }

        // GET: api/Information
        [HttpGet]
        public async Task<string> Get()
        {
            try
            {
                _logger.LogInformation("Intento de conección con Firebase url database/Information");
                string json = await FirebaseContext.Database.Informations.GetAllAsync();
                _logger.LogInformation("Se conecto con Firebase");
                return json;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error: Fallo la conección con Firebase url database/Information",ex);
                throw new ArgumentException("Se presento un error al procesar la inforamación",ex);
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
