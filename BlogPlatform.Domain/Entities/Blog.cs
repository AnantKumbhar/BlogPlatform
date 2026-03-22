using BlogPlatform.Domain.Common;

namespace BlogPlatform.Domain.Entities;

public class Blog : BaseEntity
{
    public string Title { get; set; } = string.Empty;

    public string Slug { get; set; } = string.Empty;

    public string Content { get; set; } = string.Empty;

    public string ShortDescription { get; set; } = string.Empty;

    public string? ImageUrl { get; set; }

    // Foreign Keys
    public int AuthorId { get; set; }

    public int CategoryId { get; set; }

    // Navigation Properties
    public User Author { get; set; } = null!;

    public Category Category { get; set; } = null!;
}