using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginPage.Communication.Requests
{
    public class RequestRegister
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string RePassword { get; set; }

        public RequestRegister(string email, string password, string name, string rePassword)
        {
            Email = email;
            Password = password;
            Name = name;
            RePassword = rePassword;
        }
    }
}
