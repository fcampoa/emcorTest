﻿using Data.DTO;
using Data.Repositories;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services.Implementation
{
    public class StudentService: ServiceBase<StudentDto, Student>, IStudentService
    {
        public StudentService(ISchoolUnitOfWork unitOfWork) : base(unitOfWork) { }
    }
}