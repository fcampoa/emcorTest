using Emcor.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services
{
   public interface IService<T> where T : class
    {
        ResponseModel Add(T entity, ResponseModel response = null);
        ResponseModel Update(T Entity, ResponseModel response = null);
        ResponseModel Delete(T entity, ResponseModel response = null);
        T Get(int Id);
        IEnumerable<T> GetAll();
    }
}
