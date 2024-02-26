import { useSearchParams } from "react-router-dom";

const usePageQuery = () => {
    const [query, setQuery] = useSearchParams({ page: '1' });

    const page = query.get('page');

    const prevPage = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString());
            return prev;
        });
    };

    const nextPage = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString());
            return prev;
        });
    };

    const setPage = (newPage) => {
        setQuery({ page: newPage.toString() });
    };

    return {
        page,
        prevPage,
        nextPage,
        setPage
    };
};

export { usePageQuery };
