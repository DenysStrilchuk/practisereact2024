import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [searchUrl, setSearchUrl] = useState(null);
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim() !== "") {
            setSearchUrl(`/movies/search?query=${encodeURIComponent(query)}`);
        }
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const navigateToSearchResults = () => {
        if (searchUrl) {
            navigate(searchUrl);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
            {navigateToSearchResults()}
        </div>
    );
};

export { SearchPage };
