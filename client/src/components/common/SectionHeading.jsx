export default function SectionHeading({ label, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`mx-auto mb-8 flex max-w-3xl flex-col ${alignment}`}>
      {label ? <span className="soft-chip">{label}</span> : null}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-heading sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
