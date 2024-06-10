import { useState } from 'react';

export default function SearchBar({ placeholder, onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center bg-white border border-solid border-slate-300 rounded-full px-4 py-2 w-full max-w-md mx-auto">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder || "Search..."}
                className="flex-grow px-2 py-1 border-none focus:outline-none"
            />
            <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded-full ml-2">
                Search
            </button>
        </form>
    );
}