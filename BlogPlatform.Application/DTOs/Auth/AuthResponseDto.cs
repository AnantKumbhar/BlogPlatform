using System;
using System.Collections.Generic;
using System.Text;

namespace BlogPlatform.Application.DTOs.Auth
{
    public class AuthResponseDto
    {
        public string Token { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
    }
}
