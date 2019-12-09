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
    [RoutePrefix("api/groupDetail")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class GroupDetailController : ApiController
    {
        private readonly IGroupDetailService groupDetailService;

        public GroupDetailController(IGroupDetailService groupDetailService)
        {
            this.groupDetailService = groupDetailService;
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult Get([FromUri]int id)
        {
            return Ok(groupDetailService.Get(id));
        }

        [HttpGet]
        [Route("getAll")]
        public IHttpActionResult GetAll()
        {
            return Ok(groupDetailService.GetAll());
        }

        [HttpPost]
        [Route("addDetail")]
        public IHttpActionResult AddStudent([FromBody] GroupDetailDto groupDetail)
        {
            return Ok(groupDetailService.Add(groupDetail));
        }

        [HttpPost]
        [Route("updateDetail")]
        public IHttpActionResult UpdateStudent([FromBody] GroupDetailDto groupDetail)
        {
            return Ok(groupDetailService.Update(groupDetail));
        }

        [HttpGet]
        [Route("getByGroup/{id}")]
        public IHttpActionResult GetByGroup([FromUri] int id)
        {
            return Ok(groupDetailService.GetByGroup(id));
        }

        [HttpPost]
        [Route("addRange")]
        public IHttpActionResult AddRange([FromBody] List<GroupDetailDto> details)
        {
            return Ok(groupDetailService.AddRange(details));
        }

        [HttpPut]
        [Route("deleteDetail")]
        public IHttpActionResult DeleteDetail([FromBody] GroupDetailDto detail)
        {
            return Ok(groupDetailService.Delete(detail));
        }
    }
}
