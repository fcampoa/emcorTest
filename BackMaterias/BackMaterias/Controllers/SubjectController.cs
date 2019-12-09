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
    [RoutePrefix("api/subject")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class SubjectController : ApiController
    {
        private readonly ISubjectService subjectService;
        public SubjectController(ISubjectService subjectService)
        {
            this.subjectService = subjectService;
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult Get([FromUri]int id)
        {
            return Ok(subjectService.Get(id));
        }

        [HttpGet]
        [Route("getAll")]
        public IHttpActionResult GetAll()
        {
            return Ok(subjectService.GetAll());
        }

        [HttpPost]
        [Route("addSubject")]
        public IHttpActionResult AddStudent([FromBody] SubjectDto subject)
        {
            return Ok(subjectService.Add(subject));
        }

        [HttpPost]
        [Route("updateSubject")]
        public IHttpActionResult UpdateStudent([FromBody] SubjectDto subject)
        {
            return Ok(subjectService.Update(subject));
        }
    }
}
