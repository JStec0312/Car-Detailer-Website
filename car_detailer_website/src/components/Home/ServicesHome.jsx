
import ServiceCard from "@/ui/ServiceCard";
import SectionHeader from "@/ui/SectionHeader";
import { getServices } from "@/utils/getData";
export default async function ServicesHome() {
    
    const services = await getServices();
    
    return (
        <section className="flex flex-col gap-8 max-w-content px-4 mx-auto">
            <SectionHeader>USŁ<span className="text-secondary">UGI</span></SectionHeader>
            <div className="  flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        service={service}
                    />
                ))}
            </div>

        </section>
    );

}