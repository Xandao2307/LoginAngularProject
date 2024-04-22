using LoginPage.Communication.Requests;
using LoginPage.Communication.Responses;
using LoginPage.Infrastructure.DbContexts;
using LoginPage.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginPage.Application.UseCases
{
    public class RegisterCase
    {
        private UserDbContext _context { get; set; }

        public RegisterCase(UserDbContext context)
        {
            _context = context;
        }
        public ResponseRegister Execute(RequestRegister request)
        {
            if (request.Password != request.RePassword)
                return null;

            var user = new User { Email = request.Email, Name = request.Name , Password = request.Password };

            _context.Users.Add(user);

            _context.SaveChanges();

            return new ResponseRegister(user.Id);
        }
    }
}
