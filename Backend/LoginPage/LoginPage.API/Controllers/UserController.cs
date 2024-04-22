using LoginPage.Application.UseCases;
using LoginPage.Communication.Requests;
using LoginPage.Communication.Responses;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LoginPage.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public LoginCase _loginCase { get; set; }
        public RegisterCase _registerCase { get; set; }

        public UserController(LoginCase loginCase, RegisterCase registerCase)
        {
            _loginCase = loginCase;
            _registerCase = registerCase;
        }

        [HttpGet("login")]
        public ResponseLogin Login([FromBody] RequestLogin request)
        {
            var obj = _loginCase.Execute(request);

            return obj;
        }

        [HttpPost("Register")]
        public ResponseRegister Register([FromBody] RequestRegister request)
        {
            var obj = _registerCase.Execute(request);
            return obj;
        }
    }
}
