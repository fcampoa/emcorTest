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
    public class GroupService: ServiceBase<GroupDto, Group>, IGroupService
    {
        public GroupService(ISchoolUnitOfWork unitOfWork) : base(unitOfWork) { }

        public IEnumerable<GroupDto> GetBySubject(int id)
        {
            var repo = unitOfWork.GetLookupRepository<Group>();
            var result = repo.GetMany(g => g.Subject_id == id);
            return AutoMapper.Mapper.Map<IEnumerable<GroupDto>>(result);
        }
    }
}
