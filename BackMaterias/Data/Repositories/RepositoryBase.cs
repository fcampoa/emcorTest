using Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
   public class RepositoryBase<T> where T: class
    {

        private readonly DbSet<T> dbSet;

        public EmcorEntities DbContext { get; private set; } 

        protected RepositoryBase(EmcorEntities dbContext)
        {
            DbContext = dbContext;
            dbSet = DbContext.Set<T>();
        }
          public virtual void Add(T entity)
        {
            dbSet.Add(entity);
            DbContext.Entry<T>(entity).State = EntityState.Added;
        }

        public virtual void Update(T entity)
        {
            //  dbSet.Attach(entity);
            DbContext.Entry<T>(entity).State = EntityState.Modified;
        }

        public virtual void Delete(T entity)
        {
            dbSet.Remove(entity);
        }

        public virtual void Delete(Expression<Func<T, bool>> where)
        {
            IEnumerable<T> objects = dbSet.Where<T>(where).AsEnumerable();
            foreach (T obj in objects)
                dbSet.Remove(obj);
        }

        public virtual T GetById(object id)
        {
            var entity = dbSet.Find(id);
            if (entity != null)
            {
                DbContext.Entry(entity).State = EntityState.Detached;
            }
            return entity;
        }

        public virtual IEnumerable<T> GetAll()
        {
            return dbSet.ToList();
        }

        public virtual IEnumerable<T> GetMany(Expression<Func<T, bool>> where)
        {
            return dbSet.Where(where).ToList();
        }

        public T Get(Expression<Func<T, bool>> where)
        {
            return dbSet.Where(where).FirstOrDefault<T>();
        }
    }
}