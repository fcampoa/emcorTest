using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public class LookupRepository<T> : RepositoryBase<T>, ILookupRepository<T> where T : class
    {
        public LookupRepository(EmcorEntities dbContext) : base(dbContext) { }

        public override IEnumerable<T> GetAll()
        {
            return DbContext.Set<T>();
        }
    }
}
