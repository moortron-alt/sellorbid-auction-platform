const categories = [
  "Cars",
  "Trucks",
  "Trailers",
  "Lawnmowers",
  "Household",
  "Agri",
  "Plant & Machinery"
];

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {categories.map((c) => (
        <div
          key={c}
          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-xs font-medium text-slate-800"
        >
          {c}
        </div>
      ))}
    </div>
  );
}
