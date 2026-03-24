using BlogPlatform.Application.Common;
using BlogPlatform.Application.DTOs.Blog;
using BlogPlatform.Application.Interfaces;
using BlogPlatform.Domain.Entities;
using BlogPlatform.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace BlogPlatform.Infrastructure.Services
{
    public class BlogService : IBlogService
    {
        private readonly ApplicationDbContext _context;

        public BlogService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<string> CreateBlogAsync(CreateBlogDto dto, int userId)
        {
            var blog = new Blog
            {
                Title = dto.Title,
                Content = dto.Content,
                ShortDescription = dto.ShortDescription,
                Slug = SlugHelper.GenerateSlug(dto.Title),
                CategoryId = dto.CategoryId,
                AuthorId = userId
            };

            _context.Blogs.Add(blog);
            await _context.SaveChangesAsync();

            return "Blog created successfully";
        }

        public async Task<List<BlogResponseDto>> GetAllBlogsAsync()
        {
            return await _context.Blogs
                .Include(x => x.Author)
                .Include(x => x.Category)
                .Select(x => new BlogResponseDto
                {
                    Id = x.Id,
                    Title = x.Title,
                    ShortDescription = x.ShortDescription,
                    AuthorName = x.Author.Username,
                    CategoryName = x.Category.Name,
                    AuthorId = x.AuthorId
                }).ToListAsync();
        }

        public async Task<List<BlogResponseDto>> GetMyBlogsAsync(int userId)
        {
            return await _context.Blogs
                .Where(x => x.AuthorId == userId)
                .Include(x => x.Category)
                .Select(x => new BlogResponseDto
                {
                    Id = x.Id,
                    Title = x.Title,
                    ShortDescription = x.ShortDescription,
                    AuthorName = x.Author.Username,
                    CategoryName = x.Category.Name, 
                    AuthorId = x.AuthorId
                }).ToListAsync();
        }

        public async Task<CreateBlogDto> GetBlogByIdAsync(int id)
        {
            var blog = await _context.Blogs.FindAsync(id);

            if (blog == null)
                throw new Exception("Blog not found");

            return new CreateBlogDto
            {
                Title = blog.Title,
                Content = blog.Content,
                ShortDescription = blog.ShortDescription,
                Slug = blog.Slug,
                CategoryId = blog.CategoryId
            };
        }



        public async Task<string> UpdateBlogAsync(int blogId, CreateBlogDto dto, int userId)
        {
            var blog = await _context.Blogs.FindAsync(blogId);

            if (blog == null)
                return "Blog not found";

            // 🔥 AUTHORIZATION CHECK
            if (blog.AuthorId != userId)
                return "You are not allowed to update this blog";

            // Update fields
            blog.Title = dto.Title;
            blog.Content = dto.Content;
            blog.ShortDescription = dto.ShortDescription;
            blog.Slug = dto.Slug;
            blog.CategoryId = dto.CategoryId;

            await _context.SaveChangesAsync();

            return "Blog updated successfully";
        }

        public async Task<string> DeleteBlogAsync(int blogId, int userId)
        {
            var blog = await _context.Blogs.FindAsync(blogId);

            if (blog == null)
                return "Blog not found";

            // 🔥 AUTHORIZATION CHECK
            if (blog.AuthorId != userId)
                return "You are not allowed to delete this blog";

            _context.Blogs.Remove(blog);
            await _context.SaveChangesAsync();

            return "Blog deleted successfully";
        }
    }
}