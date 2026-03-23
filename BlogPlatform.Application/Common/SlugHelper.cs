using System;
using System.Collections.Generic;
using System.Text;

namespace BlogPlatform.Application.Common
{
    public static class SlugHelper
    {
        public static string GenerateSlug(string title)
        {
            return title.ToLower()
                .Replace(" ", "-")
                .Replace(".", "")
                .Replace(",", "");
        }
    }
}
