export default function ImageGrid() {
  const images = [
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400&h=400"
  ];

  return (
    <div className="w-full flex">
      {images.map((img, idx) => (
        <div key={idx} className="w-1/6 aspect-square group relative overflow-hidden bg-gray-200">
          <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}
