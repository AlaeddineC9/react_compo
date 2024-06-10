export default function CallToAction({ title, description, buttonText, buttonLink, backgroundImage }) {
    return (
        <div 
            className="relative bg-blue-600 text-white py-20 px-5 text-center"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10">
                {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
                {description && <p className="text-lg mb-6">{description}</p>}
                {buttonText && buttonLink && (
                    <a 
                        href={buttonLink} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
                    >
                        {buttonText}
                    </a>
                )}
            </div>
        </div>
    );
}