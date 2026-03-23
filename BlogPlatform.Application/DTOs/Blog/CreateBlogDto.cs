using System;
using System.Collections.Generic;
using System.Text;

namespace BlogPlatform.Application.DTOs.Blog
{
    public class CreateBlogDto
    {
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string ShortDescription { get; set; } = string.Empty;
        public string Slug { get; set; } = string.Empty;
        public int CategoryId { get; set; }
    }
}
