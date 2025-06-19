export default function SecondaryButton({ children, className = '' }) {
    return (
        <button className={`w-full uppercase py-2 text-white text-lg bg-primary ${className} hover:text-black hover:bg-secondary transition-all 0.3s `}>{children}</button>

    );
}
export function PrimaryButton({ children, className = '' }) {
    return (
                <button className={`w-full uppercase py-2 text-black text-lg bg-secondary hover:bg-primary hover:text-white transition 0.3s all ${className}`}>{children}</button>
    );
}