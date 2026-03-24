using System;
using System.Collections.Generic;
using System.Text;

namespace BlogPlatform.Application.DTOs.Blog
{
    public class BlogResponseDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string ShortDescription { get; set; }
        public string AuthorName { get; set; }
        public string CategoryName { get; set; }

        public int AuthorId { get; set; }
    }
}
