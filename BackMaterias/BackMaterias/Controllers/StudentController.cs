

using Data.DTO;
using Services.Services;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BackMaterias.Controllers
{
    [RoutePrefix("api/student")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class StudentController : ApiController
    {
        private readonly IStudentService studentService;

        public StudentController(IStudentService studentService)
        {
            this.studentService = studentService;
        }
        
        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult Get([FromUri]int id)
        {
            return Ok(studentService.Get(id));
        }

        [HttpGet]
        [Route("getAll")]
        public IHttpActionResult GetAll()
        {
            return Ok(studentService.GetAll());
        }

        [HttpPost]
        [Route("addStudent")]
        public IHttpActionResult AddStudent([FromBody] StudentDto student)
        {
            return Ok(studentService.Add(student));
        }

        [HttpPost]
        [Route("updateStudent")]
        public IHttpActionResult UpdateStudent([FromBody] StudentDto student)
        {
            return Ok(studentService.Update(student));
        }
    }
}