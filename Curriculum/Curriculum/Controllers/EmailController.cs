using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Curriculum.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Curriculum.Controllers
{
   [ApiController]
   [Route("[controller]")]
   public class EmailController : Controller
   {
      private readonly ILogger<EmailController> _logger;

      public EmailController(ILogger<EmailController> logger)
      {
         _logger = logger;
      }

      [HttpPost]
      public async Task<bool> Post([FromBody] Email email)
      {
         var result = false;
         if (ModelState.IsValid)
         {
            Mail mail = new Mail(email);
            try
            {
               _logger.LogInformation("Intentando conección con Gmail");
               result = await mail.SendMailAsync();
               _logger.LogInformation("Se envio el email");
            }
            catch (Exception ex)
            {
               _logger.LogError("Error: Fallo la conección con Gmail:", ex);
               throw new ArgumentException("Se presento un error al Enviar el email", ex);
            }
         }
         return result;
      }
   }
}
