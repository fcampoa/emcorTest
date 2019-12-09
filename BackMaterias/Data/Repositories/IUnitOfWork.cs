using Emcor.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public interface IUnitOfWork
    {
        int Commit();
        int Commit(IResponseData responseData);
        Task CommitAsync();
        void Dispose();
    }
}
