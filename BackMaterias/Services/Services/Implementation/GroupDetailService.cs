using Data.DTO;
using Data.Repositories;
using Emcor.Core;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services.Implementation
{
    public class GroupDetailService : ServiceBase<GroupDetailDto, GroupDetail>, IGroupDetailService
    {
        public GroupDetailService(ISchoolUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public ResponseModel AddRange(List<GroupDetailDto> details, ResponseModel response = null)
        {
            response = response ?? new ResponseModel();
            var repo = unitOfWork.GetLookupRepository<GroupDetail>();
            details.ForEach(d => {
                repo.Add(AutoMapper.Mapper.Map<GroupDetail>(d));
            });
            unitOfWork.Commit(response);
            if (response.ResponseStatusType == ResponseStatusType.Success)
            {
                response.Data = true;
            }
            return response;
        }

        public IEnumerable<GroupDetailDto> GetByGroup(int groupId)
        {
            var repo = unitOfWork.GetLookupRepository<GroupDetail>();
            var result = repo.GetMany(d => d.Group_id == groupId);
            return AutoMapper.Mapper.Map<IEnumerable<GroupDetailDto>>(result);
        }
    }
}
