export default function FancyCard({card}){
    return(
        <div className="flex flex-col  gap-4 items-center w-full justify-center aspect-4/3 p-4 py-8 bg-[#2E2D2D] border-2 border-secondary">
            <div className="gap-2 flex flex-col items-center justify-center">
                {card.icon}
                <span className="text-5xl font-bold text-secondary uppercase">{card.row1Text}</span>
                <span className="text-2xl font-bold text-white uppercase">{card.row2Text}</span>
            </div>
            <span className="text-white text-xl uppercase">{card.row3Text}</span>
        </div>
    )
}