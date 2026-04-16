import { Star } from "lucide-react";

export default function TestimonialCard({ name, location, review }) {
  return (
    <div className="card-base h-full p-6">
      <div className="mb-4 flex gap-1 text-accentPink">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={18} fill="currentColor" />
        ))}
      </div>
      <p className="text-sm leading-7 text-text">“{review}”</p>
      <div className="mt-6">
        <h3 className="text-base font-semibold text-secondary">{name}</h3>
        <p className="text-sm text-muted">{location}</p>
      </div>
    </div>
  );
}
