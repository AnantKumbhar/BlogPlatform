using BlogPlatform.Domain.Common;

namespace BlogPlatform.Domain.Entities;

public class Category : BaseEntity
{
    public string Name { get; set; } = string.Empty;

    public string? Description { get; set; }

    // Navigation Property
    public ICollection<Blog> Blogs { get; set; } = new List<Blog>();
}