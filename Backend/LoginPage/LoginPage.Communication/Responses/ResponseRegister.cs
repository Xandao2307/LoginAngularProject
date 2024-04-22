using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginPage.Communication.Responses
{
    public class ResponseRegister
    {
        public Guid Id { get; set; }

        public ResponseRegister(Guid id)
        {
            Id = id;
        }
    }
}
