using Core.Mappings;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.DTO
{
    public class GroupDto: IMapFrom<Group>
    {
        public int Id { get; set; }
        public Nullable<int> Teacher_id { get; set; }
        public string Room { get; set; }
        public string Semester { get; set; }
        public string Schedule { get; set; }
        public Nullable<int> Subject_id { get; set; }
        public string Title { get; set; }
    }
}
