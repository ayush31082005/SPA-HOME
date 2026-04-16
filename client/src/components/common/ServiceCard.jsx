import formatPrice from "../../utils/formatPrice";

const serviceImages = {
  "Swedish Massage":
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
  "Deep Tissue Massage":
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
  "Aromatherapy Massage":
    "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
  "Hot Stone Massage":
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
  "Head, Neck & Shoulder Massage":
    "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=1200&auto=format&fit=crop",
  "Balinese Massage":
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",

  "Body Scrub + Massage":
    "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
  "Facial + Massage":
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop",
  "Full Relaxation Package":
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
  "Foot Spa + Massage":
    "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop",
  "Facial + Head Massage":
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
  "Body Polish + Massage":
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
  "Couple Relaxation Package":
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
  "Luxury Spa Ritual":
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
};

const twoLineClamp = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

const fourLineClamp = {
  display: "-webkit-box",
  WebkitLineClamp: 4,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

export default function ServiceCard({
  title,
  price,
  duration,
  description,
  variant = "default",
}) {
  const imageUrl =
    serviceImages[title] ||
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop";

  return (
    <div
      className={`flex h-[390px] flex-col overflow-hidden rounded-2xl border border-[#f2d8de] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:h-[400px] ${variant === "highlight" ? "bg-[#fffafb]" : ""
        }`}
    >
      <div className="h-40 sm:h-44 lg:h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex min-h-[64px] items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-snug text-secondary" style={twoLineClamp}>
              {title}
            </h3>
            {duration ? (
              <p className="mt-1 text-sm font-medium text-accentPink">
                {duration}
              </p>
            ) : null}
          </div>

          <span className="shrink-0 rounded-full bg-cta-gradient px-3 py-1.5 text-xs font-semibold text-white sm:px-4 sm:py-2 sm:text-sm">
            {formatPrice(price)}
          </span>
        </div>

        <p className="mt-3 text-sm leading-7 text-text" style={fourLineClamp}>
          {description}
        </p>
      </div>
    </div>
  );
}
