export default function TailwindFilters() {
  // reactjs.jpg is used here so the lab runs out of the box.
  const src = "/images/reactjs.jpg";
  const colorFilterSrc = "/images/greece.jpg";
  return (
    <div>
      <h2 className="text-2xl font-bold">Blurs</h2>
      <div className="flex">
        <img className="blur-none w-1/4" src={src} alt="blur none" />
        <img className="blur-sm w-1/4" src={src} alt="blur sm" />
        <img className="blur-lg w-1/4" src={src} alt="blur lg" />
        <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
      </div>
      <h3 className="text-lg font-bold">Grayscale and brightness</h3>
      <div id="wd-ai-filters" className="flex">
        <img className="grayscale w-1/4" src={colorFilterSrc} alt="grayscale" />
        <img className="grayscale-0 w-1/4" src={colorFilterSrc} alt="grayscale zero" />
        <img className="brightness-50 w-1/4" src={colorFilterSrc} alt="brightness 50" />
        <img className="brightness-150 w-1/4" src={colorFilterSrc} alt="brightness 150" />
      </div>
      <h2 className="mt-4 text-2xl font-bold">Other Filters</h2>
      <div className="flex">
        <img className="grayscale w-1/4" src={src} alt="grayscale filter" />
        <img className="brightness-75 w-1/4" src={src} alt="brightness 75 filter" />
        <img className="brightness-125 w-1/4" src={src} alt="brightness 125 filter" />
        <img className="contrast-150 w-1/4" src={src} alt="contrast 150 filter" />
      </div>
    </div>
  );
}