using System;
using System.Collections.Generic;
using System.Text;

namespace BlogPlatform.Application.DTOs.Auth
{
    public class RegisterUserDto
    {
        public string Username { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;
    }
}
