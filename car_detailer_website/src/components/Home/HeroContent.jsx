import SecondaryButton, { primaryButton, PrimaryButton, secondaryButton } from "@/ui/Buttons";
export default function HeroContent() {
    return (
        <div className="flex flex-col lg:items-center  gap-8 justify-center h-full w-full z-10 max-w-content  mx-auto px-4">
            <div className="flex flex-col gap-4 lg:text-center lg:max-w-[850px]">
                <h1 className="text-3xl md:text-6xl text-white uppercase">studio detailingu pabianice </h1>
                <h2 className="text-xl md:text-4xl text-white">Renowacja lakieru, powloki ceramiczne, czyszczenie wnetrza</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full lg:items-center lg:max-w-[850px]">
                <a href="/uslugi" className="w-full">
                    <PrimaryButton>Zobacz nasze usługi</PrimaryButton>
                </a>
                <a href="tel:+48123 456 789" className="w-full">
                    <SecondaryButton>ZADZWOŃ +48 123 456 789</SecondaryButton>
                </a>
            </div>
        </div>
    );
}