using Core.Mappings;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.DTO
{
    public class TeacherDto: IMapFrom<Teacher>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
