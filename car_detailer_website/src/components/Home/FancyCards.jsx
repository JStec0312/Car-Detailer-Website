import FancyCard from "@/ui/FancyCard";
import { FileChartColumnIncreasing, Handshake, UsersRound } from "lucide-react";
export default function FancyCards(){
    const cardsContent = [
        {
            icon: <FileChartColumnIncreasing color="#0F0F0F"  size={56} />,
            row1Text: "10",
            row2Text: "Lat",
            row3Text: "doświadczenia"
        },
        {
            icon: <Handshake color="#0F0F0F" size={56} />,
            row1Text: "12000",
            row2Text: "Projektów",
            row3Text: "zrealizowanych"
        },
        {
            icon:<UsersRound color="#0F0F0F" size={56} />,
            row1Text: "10000",
            row2Text: "Klientów",
            row3Text: "zadowolonych"
        }
    ]

    return (
        <div className="w-full flex flex-col md:flex-row gap-8 px-4 max-w-content mx-auto">
            {cardsContent.map((card, index) => (
                <FancyCard card={card} key={index} />
            ))}
        </div>
    )
}