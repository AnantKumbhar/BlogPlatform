using BlogPlatform.Application.DTOs.Blog;
using System;
using System.Collections.Generic;
using System.Text;

namespace BlogPlatform.Application.Interfaces
{
    public interface IBlogService
    {
        Task<string> CreateBlogAsync(CreateBlogDto dto, int userId);
        Task<List<BlogResponseDto>> GetAllBlogsAsync();
        Task<List<BlogResponseDto>> GetMyBlogsAsync(int userId);

        Task<string> UpdateBlogAsync(int blogId, CreateBlogDto dto, int userId);
        Task<string> DeleteBlogAsync(int blogId, int userId);
    }
}
