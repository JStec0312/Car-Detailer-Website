import Star from "@/ui/Star.jsx";
export default function Opinion({ opinion }) {
    return (
        <div className="flex flex-row gap-3 border-2 border-secondary px-2 py-4 ">
            <div id="opinionAvatar" className="rounded-full border-2 border-secondary w-11 h-11 flex items-center justify-center">
                <span className="text-white text-xl">{opinion.initials}</span>
            </div>
            <div id="opinionContent" className="flex flex-col gap-4 w-full">
                <div id="OpinionCustomer flex-flex-col gap-2 w-full">
                    <div id="nameStars" className="flex flex-row justify-between items-center w-full">
                        <span className="text-xl text-white font-bold">{opinion.name}</span>
                        <div className="flex flex-row gap-1">
                            {Array.from({ length: opinion.ratingOfStars }).map((_, i) => (
                                <Star key={i} height={12}/>))}
                        </div>
                    </div>
                    <div id="opinionWhen" className="text-secondary text-base">
                        <p className="text-secondary text-base">{opinion.date}</p>
                    </div>
                    <p className="text-white text-base  leading-relaxed">{opinion.text}</p>
                </div>

            </div>
        </div>
    );
}