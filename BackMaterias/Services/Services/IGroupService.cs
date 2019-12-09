﻿using Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services
{
    public interface IGroupService: IService<GroupDto>
    {
        IEnumerable<GroupDto> GetBySubject(int id);
    }
}
