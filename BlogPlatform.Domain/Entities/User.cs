using BlogPlatform.Domain.Common;

namespace BlogPlatform.Domain.Entities;

public class User : BaseEntity
{
    public string Username { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string PasswordHash { get; set; } = string.Empty;

    public string? Bio { get; set; }

    public string? ProfileImageUrl { get; set; }

    // Navigation Property
    public ICollection<Blog> Blogs { get; set; } = new List<Blog>();
}