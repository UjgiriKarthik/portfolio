import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications with MERN Stack",
      excerpt: "Discover best practices for creating maintainable and scalable React applications using the MERN stack architecture.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      tags: ["React", "MERN", "Best Practices"],
      link: "#"
    },
    {
      title: "Mastering Database Design for Modern Web Apps",
      excerpt: "Learn how to design efficient database schemas and optimize queries for better performance in web applications.",
      date: "Nov 28, 2024",
      readTime: "12 min read",
      tags: ["MongoDB", "Database", "Performance"],
      link: "#"
    },
    {
      title: "The Future of Full-Stack Development",
      excerpt: "Exploring emerging technologies and trends that are shaping the future of full-stack web development.",
      date: "Nov 10, 2024",
      readTime: "6 min read",
      tags: ["Technology", "Trends", "Future"],
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Latest Blog Posts
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development, technology trends, and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="glass-card hover-glow group cursor-pointer animate-on-scroll">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-foreground/80">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="ghost" className="group/btn p-0">
                  <span className="mr-2">Read More</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Button variant="outline" size="lg">
            View All Posts
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;