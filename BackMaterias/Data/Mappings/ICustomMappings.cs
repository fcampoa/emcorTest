using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Mappings
{
    public interface ICustomMappings
    {
        void CreateMappings(IMapperConfigurationExpression configuration);
    }
}
