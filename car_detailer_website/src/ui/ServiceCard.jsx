import { urlFor } from "@/sanity/image";
import Image from "next/image";

export default function ServiceCard({ service }) {
  return (
    <div className="flex flex-col justify-between text-white gap-4 h-full">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl">{service.title}</h3>
        <p className="text-base leading-relaxed">{service.description}</p>
      </div>
      {service.img && (
        <div className="relative w-full md:h-64 h-48">
          <Image
            src={urlFor(service.img).width(800).height(400).url()}
            alt={service.title}
            fill
            className="object-cover "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
    </div>
  );
}
