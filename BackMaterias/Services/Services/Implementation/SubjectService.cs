using Data.DTO;
using Data.Repositories;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services.Implementation
{
    public class SubjectService : ServiceBase<SubjectDto, Subject>, ISubjectService
    {
        public SubjectService(ISchoolUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
