using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginPage.Communication.Responses
{
    public class ResponseLogin
    {
        public string token { get; set; }

        public ResponseLogin(string token)
        {
            this.token = token;
        }
    }
}
