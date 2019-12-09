using Emcor.Core;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public abstract class UnitOfWork<T> : IUnitOfWork where T : DbContext
    {
        public T DbContext { get; private set; }

        public UnitOfWork(T dbContext)
        {
            DbContext = dbContext;
        }

        public string ConnectionString => DbContext.Database.Connection.ConnectionString;

        public DbContextConfiguration Configuration => this.DbContext.Configuration;

        public int Commit()
        {
            return DbContext.SaveChanges();
        }

        public int Commit(IResponseData responseData)
        {
            responseData.ResponseStatusType = ResponseStatusType.Error;
            int result = 0;

            try
            {
                result = DbContext.SaveChanges();
                responseData.ResponseStatusType = ResponseStatusType.Success;
                return result;
            }
            catch (DbEntityValidationException ex)
            {
                // Retrieve the error messages as a list of strings.
                var errorMessages = ex.EntityValidationErrors
                   .SelectMany(x => x.ValidationErrors)
                   .Select(x => x.ErrorMessage);

                foreach (var errorMessage in errorMessages)
                {
                    responseData.AddResponseMessage(ResponseMessageType.Error, errorMessage);
                }
            }
            catch (DbUpdateException ex)
            {

                foreach (var errorEntry in ex.Entries)
                {
                    responseData.InsertResponseMessage(ResponseMessageType.Error, $"Type: {errorEntry.Entity.GetType().Name} was part of the problem.");
                }

                var innerEx = ex.InnerException;

                while (innerEx != null)
                {
                    responseData.InsertResponseMessage(ResponseMessageType.Error, innerEx.Message);

                    innerEx = innerEx.InnerException;
                }
            }
            catch (Exception ex)
            {
                responseData.AddResponseMessage(ResponseMessageType.Error, ex.Message);
            }

            return result;
        }

        public async Task CommitAsync()
        {
            await DbContext.SaveChangesAsync();
        }

        public void Dispose()
        {
            DbContext.Dispose();
        }
    }
}
