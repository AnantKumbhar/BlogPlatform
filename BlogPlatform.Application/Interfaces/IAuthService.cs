using System;
using System.Collections.Generic;
using System.Text;
using BlogPlatform.Application.DTOs.Auth;

namespace BlogPlatform.Application.Interfaces
{
    public interface IAuthService
    {
        Task<string> RegisterAsync(RegisterUserDto dto);

        Task<AuthResponseDto> LoginAsync(LoginUserDto dto);
    }
}
