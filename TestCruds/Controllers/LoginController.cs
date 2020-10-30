﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestCruds.Models;
using TestCruds.Repository.Interface;

namespace TestCruds.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    public class LoginController : ControllerBase
    {
        private IAuthentication _authenticateService;
        public LoginController(IAuthentication authenticateService)
        {
            _authenticateService = authenticateService;
        }


        [HttpPost]
        [Route("api/Login/AddAdmin")]
        public int AddAdmin([FromBody] Login lg)
        {
            return _authenticateService.AddAdmin(lg);
        }

        [HttpPost]
        [Route("api/Login/Post")]
        public IActionResult Post([FromBody] Login Model)
        {
            var user = _authenticateService.Authenticate(Model);

            if (user == null)
            {
                return BadRequest(new { message = "Username or Password is incorrect" });

            }
            else
            {
                return Ok(user);
            }
        }

        

        [HttpGet]
        [Route("api/Login/GetAdminByID/{name}")]
        public Login GetAdminByID(string name)
        {
            return _authenticateService.GetAdminByID(name);

        }

        

        [HttpGet]
        [Route("api/Login/GetAdmins")]
        public List<Login> GetAdmins()
        {
            return _authenticateService.GetAdmins();
        }

        [HttpPost]
        [Route("api/Login/UpdateAdmin/{id}")]
        public int UpdateAdmin([FromBody] Login EditLog, string UserName, int Id)
        {
            return _authenticateService.UpdateAdmins(EditLog,UserName,Id);
        }

    }
}