const SectionTitle = ({ label, title, subtitle }) => {
  return (
    <div className="mb-10">
      {label && (
        <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">
          {label}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
