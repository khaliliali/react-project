import _ from 'lodash';

export function paginate(blogPosts, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize;
    return _(blogPosts)
        .slice(startIndex)
        .take(pageSize)
        .value();
}
