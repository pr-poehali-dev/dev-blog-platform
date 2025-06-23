import BlogPost from "./BlogPost";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
}

interface BlogGridProps {
  posts: Post[];
  title: string;
  description?: string;
}

const BlogGrid = ({ posts, title, description }: BlogGridProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-black mb-4">
          {title}
        </h1>
        {description && (
          <p className="font-roboto text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPost
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            readTime={post.readTime}
            tags={post.tags}
            category={post.category}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
