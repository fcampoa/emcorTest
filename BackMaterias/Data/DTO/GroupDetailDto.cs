using Core.Mappings;
using Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.DTO
{
    public class GroupDetailDto: IMapFrom<GroupDetail>
    {
        public int Id { get; set; }
        public Nullable<int> Group_id { get; set; }
        public Nullable<int> Student_id { get; set; }
    }
}
