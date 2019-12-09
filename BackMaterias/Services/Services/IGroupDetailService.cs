using Data.DTO;
using Emcor.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IGroupDetailService: IService<GroupDetailDto>
    {
        IEnumerable<GroupDetailDto> GetByGroup(int groupId);
        ResponseModel AddRange(List<GroupDetailDto> details, ResponseModel response = null);
    }
}
