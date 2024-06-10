export default function Footer({ sections }) {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            {section.title && <h3 className="text-lg font-semibold mb-4">{section.title}</h3>}
                            {section.links && (
                                <ul>
                                    {section.links.map((link, idx) => (
                                        <li key={idx} className="mb-2">
                                            <a href={link.url} className="hover:underline">
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
}