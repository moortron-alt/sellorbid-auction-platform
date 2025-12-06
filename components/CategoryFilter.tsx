export function CategoryFilter() {
  const categories = [
    "All categories",
    "Cars",
    "Trucks",
    "Trailers",
    "Lawnmowers",
    "Household",
    "Agri",
    "Plant & Machinery"
  ];

  return (
    <select className="rounded-full border border-slate-300 px-3 py-1.5 text-sm bg-white">
      {categories.map((c) => (
        <option key={c}>{c}</option>
      ))}
    </select>
  );
}
