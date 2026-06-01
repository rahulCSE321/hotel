import { Clock, ArrowUpRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800",
      date: "April 10, 2024",
      title: "Weighing the pros and cons of each choice.",
      desc: "Navigating the world of hotel booking is a crucial aspect of ensuring...",
      authorImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
      author: "Jane Cooper",
      readTime: "4 Min Read"
    },
    {
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
      date: "April 16, 2024",
      title: "We'll delve into the art of seamless hotel booking.",
      desc: "Navigating the world of hotel booking is a crucial aspect of ensuring...",
      authorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
      author: "Cody Fisher",
      readTime: "7 Min Read"
    },
    {
      img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800",
      date: "April 18, 2024",
      title: "Identifying your travel goals and preferences.",
      desc: "Navigating the world of hotel booking is a crucial aspect of ensuring...",
      authorImg: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100&h=100",
      author: "Devon Lane",
      readTime: "4 Min Read"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-rose-700 font-medium mb-2 text-sm tracking-wide">Hotel News & Event</p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Explore Our Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white group cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden h-56">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 border-b border-gray-100">
                <p className="text-gray-500 text-xs mb-3 font-medium">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-rose-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.desc}
                </p>
              </div>
              <div className="p-4 px-6 flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <img src={post.authorImg} alt={post.author} className="w-8 h-8 rounded-full mr-3 object-cover" />
                  <span className="font-semibold text-gray-900">{post.author}</span>
                </div>
                <div className="flex items-center text-gray-500 text-xs font-medium">
                  <Clock className="w-4 h-4 mr-1.5" />
                  {post.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3 hover:bg-gray-900 hover:text-white transition-colors">
            All Publications <ArrowUpRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
