using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Firebase.Auth;
using Firebase.Storage;
using Firebase.Database;
using Firebase.Database.Query;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Curriculum.Models;
using Newtonsoft.Json;

namespace Curriculum.Models.Entities
{
    public class FirebaseDB
    {
        private readonly string APISECRET = Environment.GetEnvironmentVariable("KEYSECRET");
        private readonly string URL = Environment.GetEnvironmentVariable("BASEURL");

        public FirebaseClient Firebase
        {
            get => new FirebaseClient(
                 URL,
                 new FirebaseOptions
                 {
                     AuthTokenAsyncFactory = () => Task.FromResult(APISECRET),
                 });
        }
        
    }
}