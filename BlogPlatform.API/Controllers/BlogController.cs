using BlogPlatform.Application.DTOs.Blog;
using BlogPlatform.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace BlogPlatform.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BlogController : ControllerBase
    {
        private readonly IBlogService _blogService;

        public BlogController(IBlogService blogService)
        {
            _blogService = blogService;
        }

        private int GetUserId()
        {
            return int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        }

        [HttpPost]
        public async Task<IActionResult> CreateBlog(CreateBlogDto dto)
        {
            var userId = GetUserId();
            var result = await _blogService.CreateBlogAsync(dto, userId);
            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBlogs()
        {
            var blogs = await _blogService.GetAllBlogsAsync();
            return Ok(blogs);
        }

        [HttpGet("my")]
        public async Task<IActionResult> GetMyBlogs()
        {
            var userId = GetUserId();
            var blogs = await _blogService.GetMyBlogsAsync(userId);
            return Ok(blogs);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBlog(int id, CreateBlogDto dto)
        {
            var userId = GetUserId();
            var result = await _blogService.UpdateBlogAsync(id, dto, userId);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlog(int id)
        {
            var userId = GetUserId();
            var result = await _blogService.DeleteBlogAsync(id, userId);

            return Ok(result);
        }
    }
}