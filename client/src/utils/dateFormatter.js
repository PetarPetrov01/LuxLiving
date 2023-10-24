export const formatDate = (data, type) => {
    const date = new Date(data);
    const options = {};
    if (type === 'catalog') {
        options.year = 'numeric';
        options.month = 'short';
        options.day = '2-digit';
    } else if (type === 'details') {
        options.year = 'numeric';
        options.month = 'long';
        options.day = 'numeric';
    }
    
    return date.toLocaleDateString('en-EN',options);
};