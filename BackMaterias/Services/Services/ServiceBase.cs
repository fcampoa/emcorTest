using Data.Repositories;
using Emcor.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services
{
    public class ServiceBase<T, K> where T : class where K : class
    {
        public ISchoolUnitOfWork unitOfWork { get; private set; }

        protected ServiceBase(ISchoolUnitOfWork unitOfWork) {
            this.unitOfWork = unitOfWork;
        }

        public virtual ResponseModel Add(T entity, ResponseModel response = null)
        {
            response = response ?? new ResponseModel();
            var repo = unitOfWork.GetLookupRepository<K>();
            var e = AutoMapper.Mapper.Map<K>(entity);
            repo.Add(e);
            unitOfWork.Commit(response);
            if (response.ResponseStatusType == ResponseStatusType.Success)
            {
                response.Data = e;
            }
            return response;
        }
        public virtual ResponseModel Update(T entity, ResponseModel response = null)
        {
            response = response ?? new ResponseModel();
            var repo = unitOfWork.GetLookupRepository<K>();
            var e = AutoMapper.Mapper.Map<K>(entity);
            repo.Update(e);
            unitOfWork.Commit(response);
            if (response.ResponseStatusType == ResponseStatusType.Success)
            {
                response.Data = e;
            }
            return response;
        }

        public virtual ResponseModel Delete(T entity, ResponseModel response = null)
        {
            response = response ?? new ResponseModel();
            var repo = unitOfWork.GetLookupRepository<K>();
            var e = AutoMapper.Mapper.Map<K>(entity);
            repo.Delete(e);
            unitOfWork.Commit(response);
            if (response.ResponseStatusType == ResponseStatusType.Success)
            {
                response.Data = e;
            }
            return response;
        }

        public virtual T Get(int Id)
        {
            var repo = unitOfWork.GetLookupRepository<K>();
            var entity = AutoMapper.Mapper.Map<T>(repo.GetById(Id));
            return entity;
        }

        public virtual IEnumerable<T> GetAll()
        {
            var repo = unitOfWork.GetLookupRepository<K>();
            var entities = AutoMapper.Mapper.Map<IEnumerable<T>>(repo.GetAll());
            return entities;
        }

        public virtual IEnumerable<T> GetByFilter(Expression<Func<K, bool>> where)
        {
            var repo = unitOfWork.GetLookupRepository<K>();
            var entities = AutoMapper.Mapper.Map<IEnumerable<T>>(repo.Get(where));
            return entities;
        }

        private Func<TOut, TR> ConvertFunc<TIn, TOut, TR>(Func<TIn, TR> func) where TIn : TOut
        {
            return p => func((TIn)p);
        }
    }
}
