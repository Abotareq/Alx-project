import React from "react";
import { Calendar, MessageSquare } from "lucide-react";
import { Card } from "../../components/ui/card";
import image1 from "../../assets/blog/blog1.jpg"
import image2 from "../../assets/blog/blog2.jpg"
import image3 from "../../assets/blog/blog3.jpg"

const blogs = [
  {
    id: 1,
    title: "Helping Kids Speak with Confidence",
    image: image2,
    date: "Jun 28, 2020",
    comments: 3,
    badgeColor: "bg-pink-400",
    badgeCommentColor: "bg-pink-300",
    readMoreColor: "text-pink-500",
  },
  {
    id: 2,
    title: "Inspiring Kids to Communicate Effectively",
    image:image1,
    date: "Jun 28, 2020",
    comments: 0,
    badgeColor: "bg-blue-400",
    badgeCommentColor: "bg-blue-300",
    readMoreColor: "text-blue-500",
  },
  {
    id: 3,
    title: "Building Confidence in Kids' Speech Skills",
    image: image3,
    date: "Jun 28, 2020",
    comments: 0,
    badgeColor: "bg-yellow-400",
    badgeCommentColor: "bg-yellow-300",
    readMoreColor: "text-yellow-600",
  },
];

function InfoBadge({ icon: Icon, color, children }) {
  return (
    <span
      className={`flex items-center gap-1 px-3 py-1 rounded-full text-white text-sm font-medium shadow-sm ${color}`}
    >
      {Icon && <Icon className="w-4 h-4 mr-1 opacity-80" />}
      {children}
    </span>
  );
}

const BlogSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[600px] bg-[#fff5f5]">
      <div className="absolute left-0 top-20 w-32 h-32 opacity-30">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0066" d="M37.5,-48.1C49.9,-35.8,62,-24.5,68.2,-9.2C74.4,6.1,74.8,25.4,65.6,38.9C56.3,52.3,37.5,60,18.8,65.1C0.1,70.2,-18.5,72.8,-33.1,65.6C-47.7,58.4,-58.3,41.3,-65.7,22.7C-73.1,4.1,-77.4,-15.9,-70.3,-30.7C-63.3,-45.5,-44.9,-55.2,-28,-61.6C-11.1,-68,5.3,-71.2,19.3,-66.2C33.2,-61.2,44.8,-48,37.5,-48.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute right-0 bottom-20 w-36 h-36 opacity-30">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFD700" d="M36.9,-49.4C46.7,-38.3,52.9,-25.1,56.8,-10.5C60.7,4.1,62.2,20.2,55.8,32.7C49.3,45.3,34.8,54.4,19.2,59.5C3.6,64.6,-13.2,65.7,-27.2,59.5C-41.1,53.4,-52.3,40,-59.6,24.3C-66.8,8.6,-70.2,-9.3,-64.4,-23.9C-58.6,-38.5,-43.7,-49.7,-28.9,-58.3C-14.1,-66.9,0.7,-72.9,14,-69C27.4,-65.1,40.3,-51.3,36.9,-49.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <p className="text-base font-semibold text-pink-500 mb-2 tracking-wider uppercase">
            Our Blogs
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Our Blogs & Articles
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border-none"
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute left-4 bottom-4 flex gap-2 z-10">
                  <InfoBadge icon={Calendar} color={blog.badgeColor}>
                    {blog.date}
                  </InfoBadge>
                  <InfoBadge icon={MessageSquare} color={blog.badgeCommentColor}>
                    Comments ({blog.comments})
                  </InfoBadge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-500 transition-colors duration-300">
                  {blog.title}
                </h3>
                <a
                  href="#"
                  className={`inline-flex items-center ${blog.readMoreColor} font-medium text-sm group transition-all duration-300 hover:translate-x-1`}
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;