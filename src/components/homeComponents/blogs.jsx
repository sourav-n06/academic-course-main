import React from "react";

const BlogCard = ({ image, author, date, comments, title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
      <div className="relative">
        <img
          src={image}
          alt="Blog Post"
          className="w-full h-48 md:h-52 object-cover"
        />
      </div>
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between space-x-2 mb-6">
          <span className="text-xs text-teal-600">{author}</span>
          <span className="text-xs text-teal-600">{date}</span>
          <span className="text-xs text-teal-600">{comments} COMMENTS</span>
        </div>
        <h2 className="text-lg md:text-lg font-medium mb-2 hover:text-teal-600 cursor-pointer">
          {title}
        </h2>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const blogPosts = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661436185717-f779de991178?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      author: "ADMIN",
      date: "JAN. 18, 2021",
      comments: 3,
      title: "Master Essential Software Development Skills",
      content:
        "Discover essential skills and strategies to excel in the dynamic fields of software and engineering.",
    },
    {
      image:
        "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg",
      author: "ADMIN",
      date: "APR. 25, 2022",
      comments: 5,
      title: "Explore Innovative Engineering Career Paths",
      content:
        "Explore career pathways, learn from industry leaders, and achieve your professional goals in engineering.",
    },
    {
      image:
        "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg",
      author: "USER",
      date: "MAY. 15, 2022",
      comments: 10,
      title: "Turn Your Dreams Into a Thriving Tech Career",
      content:
        "Gain practical insights and hands-on experience to turn your aspirations into a successful career.",
    },    
    
  ];

  return (
    <div className="bg-gray-50 py-8 md:py-16 px-4 md:px-4 sm:px-24">
      <h2 className="text-teal-500 text-lg uppercase text-center font-bold mb-2">
        Blogs
      </h2>
      <h1 className="text-4xl font-bold text-center mb-8">Recent From Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            author={post.author}
            date={post.date}
            comments={post.comments}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
