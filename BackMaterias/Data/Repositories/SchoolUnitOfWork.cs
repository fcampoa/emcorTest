using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public class SchoolUnitOfWork : UnitOfWork<EmcorEntities>, ISchoolUnitOfWork
    {
        public SchoolUnitOfWork(EmcorEntities DbContext) : base(DbContext) { }

        public ILookupRepository<T> GetLookupRepository<T>() where T : class
        {
            return new LookupRepository<T>(DbContext);
        }
    }
}
