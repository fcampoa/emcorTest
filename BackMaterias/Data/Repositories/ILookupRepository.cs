using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public interface ILookupRepository<T> : IRepository<T> where T : class
    {
    }
}
