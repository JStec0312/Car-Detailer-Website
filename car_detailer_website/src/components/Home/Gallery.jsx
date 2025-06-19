import SectionHeader from "@/ui/SectionHeader";
import GalleryCarousel from "@/ui/GalleryCarousel";
import { PrimaryButton } from "@/ui/Buttons";
import { getBeforeAfter } from "@/utils/getData";

export default async function Gallery() {

  const carouselItems= await  getBeforeAfter();
  console.log(carouselItems);
  return (
    <section className="w-full flex flex-col gap-8 px-4 max-w-content mx-auto">
      <SectionHeader>
        Gale<span className="text-secondary">ria</span>
      </SectionHeader>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
        {carouselItems.map((item, index) => (
          <GalleryCarousel
            key={index}
            images={[{ src: item.before, alt: `Przed ${item.title}` }, { src: item.after, alt: `Po ${item.title}` }]}
          />
        ))}
      </div>
      <a href="/portfolio">
        <PrimaryButton className="mt-4">Zobacz więcej realizacji</PrimaryButton>
      </a>

    </section>
  );
}
