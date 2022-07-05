import { PAGINATE_RESULTS } from '../types';

function paginateResults(response) {
    let results = response.filter(
        elem => elem
    )
    const PAGE_SIZE = 10;
    let paginated_countries = [];
    let page_count = Math.ceil(results.length / PAGE_SIZE)
    for (let i = 0; i < page_count; i++) {
        paginated_countries.push(results.splice(0, PAGE_SIZE))
    }
    return {
        type: PAGINATE_RESULTS, payload: paginated_countries
    };
}

export default paginateResults