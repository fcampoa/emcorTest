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
    [RoutePrefix("api/group")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class GroupController : ApiController
    {
        private readonly IGroupService groupService;

        public GroupController(IGroupService groupService)
        {
            this.groupService = groupService;
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult Get([FromUri]int id)
        {
            return Ok(groupService.Get(id));
        }

        [HttpGet]
        [Route("getAll")]
        public IHttpActionResult GetAll()
        {
            return Ok(groupService.GetAll());
        }

        [HttpPost]
        [Route("addGroup")]
        public IHttpActionResult AddStudent([FromBody] GroupDto group)
        {
            return Ok(groupService.Add(group));
        }

        [HttpPost]
        [Route("updateGroup")]
        public IHttpActionResult UpdateStudent([FromBody] GroupDto group)
        {
            return Ok(groupService.Update(group));
        }

        [HttpGet]
        [Route("getBySubject/{id}")]
        public IHttpActionResult GetBySubject([FromUri]int id)
        {
            return Ok(groupService.GetBySubject(id));
        }
    }
}
