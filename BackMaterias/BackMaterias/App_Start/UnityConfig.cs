using BackMaterias.App_Start;
using BackMaterias.Controllers;
using Core.Mappings;
using Data.Repositories;
using Models;
using Services.Services;
using Services.Services.Implementation;
using System.Data.Entity;
using System.Web.Http;
using System.Web.Mvc;
using Unity;
using Unity.Lifetime;
using Unity.Mvc5;

namespace BackMaterias
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<DbContext, EmcorEntities>(new PerThreadLifetimeManager());
            container.RegisterType<ISchoolUnitOfWork, SchoolUnitOfWork>();
            container.RegisterType<ITeacherService, TeacherService>();            
            container.RegisterType<IStudentService, StudentService>();           
            container.RegisterType<IGroupService, GroupService>();
            container.RegisterType<IGroupDetailService, GroupDetailService>();
            container.RegisterType<ISubjectService, SubjectService>();
            GlobalConfiguration.Configuration.DependencyResolver = new UnityResolver(container);
            AutoMapperConfiguration.Configure();
            // DependencyResolver.SetResolver(new Unity.Mvc5.UnityDependencyResolver(container));
            //GlobalConfiguration.Configuration.DependencyResolver = new Unity.WebApi.UnityDependencyResolver(container);
        }
    }
}