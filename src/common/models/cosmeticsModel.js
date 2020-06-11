import get from 'lodash/get';

export default (data) => {
    if (Array.isArray(data)) {
        return data.map(item => {
            return {
                id: get(item, 'id') || 0,
                brand: get(item, 'brand') || '',
                apiImage: get(item, 'api_featured_image') || '',
                category: get(item, 'category') || '',
                price: get(item, 'price') || '',
                description: get(item, 'description') || ''
            }
        });
    }
}
