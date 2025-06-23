import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
}

const BlogPost = ({
  title,
  excerpt,
  date,
  readTime,
  tags,
  category,
}: BlogPostProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 border-gray-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs font-roboto">
            {category}
          </Badge>
          <div className="flex items-center text-gray-500 text-sm font-roboto">
            <Icon name="Clock" size={14} className="mr-1" />
            {readTime}
          </div>
        </div>
        <h3 className="font-montserrat font-semibold text-xl text-black group-hover:text-gray-700 transition-colors duration-200 leading-tight">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 font-roboto text-sm leading-relaxed mb-4">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-roboto"
              >
                #{tag}
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500 font-roboto">{date}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
