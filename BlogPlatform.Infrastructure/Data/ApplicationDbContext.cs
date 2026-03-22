using Microsoft.EntityFrameworkCore;
using BlogPlatform.Domain.Entities;

namespace BlogPlatform.Infrastructure.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }

    public DbSet<Blog> Blogs { get; set; }

    public DbSet<Category> Categories { get; set; }
}