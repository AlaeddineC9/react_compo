export default function Hero({ title, subtitle, image, cta }) {
    return (
        <div className="relative bg-white h-screen flex items-center justify-center">
            {image && (
                <div className="absolute inset-0">
                    <img src={image} alt="Background Image" className="w-full h-full object-cover opacity-50" />
                </div>
            )}
            <div className="relative z-10 text-center p-5">
                {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}
                {subtitle && <p className="text-xl mb-6">{subtitle}</p>}
                {cta && (
                    <a
                        href={cta.link}
                        target={cta.target ? cta.target : ""}
                        className="bg-blue-500 text-white py-3 px-6 rounded-full"
                    >
                        {cta.text}
                    </a>
                )}
            </div>
        </div>
    );
}