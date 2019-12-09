using Data.DTO;
using Services.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BackMaterias.Controllers
{
    [RoutePrefix("api/teacher")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class TeacherController : ApiController
    {
        private readonly ITeacherService teacherService;
        public TeacherController(ITeacherService teacherService)
        {
            this.teacherService = teacherService;   
        }

        [HttpGet]
        [Route("getAll")]
        public IHttpActionResult GetTeachers()
        {
            return Ok(teacherService.GetAll());
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetById([FromUri]int id)
        {
            return Ok(teacherService.Get(id));
        }

        [HttpPost]
        [Route("addTeacher")]
        public IHttpActionResult AddTeacher([FromBody]TeacherDto teacher)
        {
            return Ok(teacherService.Add(teacher));
        }

        [HttpPost]
        [Route("updateTeacher")]
        public IHttpActionResult UpdateTeacher([FromBody] TeacherDto teacher)
        {
            return Ok(teacherService.Update(teacher));
        }
    }
}
