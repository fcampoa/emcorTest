using Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services.Implementation
{
    public class LookupService<T, K> : ServiceBase<T, K>, ILookupService<T> where T : class where K : class
    {
        public LookupService(ISchoolUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
