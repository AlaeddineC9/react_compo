export default function Card({ articles }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {article.image && (
                        <img src={article.image} alt="Card" className="w-full h-48 object-cover object-center" />
                    )}
                    <div className="p-4">
                        {article.title && <h2 className="text-xl text-center font-bold mb-2">{article.title}</h2>}
                        {article.description && <p className="text-gray-700 mb-4 text-center ">{article.description}</p>}
                        {article.onClick && (
                            <div className="flex justify-center">
                            <button
                                onClick={article.onClick}
                                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                View Details
                            </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}