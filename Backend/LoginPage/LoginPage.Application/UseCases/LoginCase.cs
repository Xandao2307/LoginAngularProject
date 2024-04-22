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
    public class LoginCase
    {
        private UserDbContext _context { get; set; }

        public LoginCase(UserDbContext context)
        {
            _context = context;
        }

        public ResponseLogin Execute(RequestLogin login)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == login.Email && u.Password == login.Password);
            
            if (user != null) 
                return new ResponseLogin("new token");

            return null;
        }
    }
}
