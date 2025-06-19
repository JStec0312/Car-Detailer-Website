import SectionHeader from "@/ui/SectionHeader";
import Opinion from "@/ui/Opinion";
export default function Opinions() {
    const opinions = [
        {
            name: "Tomasz Nowak",
            initials: "TN",
            date: "2025-06-08",
            ratingOfStars: 5,
            text: "Świetna robota przy powłoce ceramicznej. Auto lśni jak nowe i woda spływa idealnie. Polecam!",
        },
        {
            name: "Jakub Stec",
            initials: "JS",
            date: "2025-05-25",
            ratingOfStars: 5,
            text: "Renowacja lakieru przeszła moje oczekiwania. Wszystkie rysy zniknęły, auto wygląda fantastycznie!",
        },
        {
            name: "Robert Krawczyk",
            initials: "RK",
            date: "2025-06-08",
            ratingOfStars: 5,
            text: "Profesjonalne czyszczenie wnętrza. Skórzana tapicerka odzyskała pierwotny wygląd. Bardzo polecam!",
        }
    ];

    return (
        <section className="flex flex-col gap-8 px-4 max-w-content mx-auto w-full">
            <SectionHeader>Opi<span className="text-secondary">nie</span></SectionHeader>
            <div className="flex flex-col gap-8">
                {opinions.map((opinion, index) => (
                   <Opinion opinion={opinion} key={index} /> 
                ))}
            </div>
        </section>
    );
}