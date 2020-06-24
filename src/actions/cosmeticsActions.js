const cosmeticsLoaded = (newCosmetics) => {
    return {
        type: 'FETCH_COSMETICS_SUCCESS',
        cosmetics: newCosmetics
    }
};

const cosmeticsRequest = () => {
    return {
        type: 'FETCH_COSMETICS_REQUEST'
    }
};

const cosmeticsError = (error) => {
    return {
        type: 'FETCH_COSMETICS_ERROR',
        error: error
    }
};

const addCartItem = (id) => {
    return {
        type: 'ADD_CART_ITEM',
        itemId: id
    }
};

const fetchCosmetics = (cosmeticsStoreService) => () => (dispatch) => {
    dispatch(cosmeticsRequest());

    return cosmeticsStoreService.getCosmetics()
        .then(async (response) => {
            if (response.ok) {
                const reader = response.body.getReader();

                // Шаг 3: считываем данные:
                let receivedLength = 0; // количество байт, полученных на данный момент
                const chunks = []; // массив полученных двоичных фрагментов (составляющих тело ответа)

                while (true) {
                    const { done, value } = await reader.read();

                    if (done) {
                        break;
                    }

                    chunks.push(value);
                    receivedLength += value.length;
                }

                // Шаг 4: соединим фрагменты в общий типизированный массив Uint8Array
                let chunksAll = new Uint8Array(receivedLength); // (4.1)
                let position = 0;

                for (let chunk of chunks) {
                    chunksAll.set(chunk, position); // (4.2)
                    position += chunk.length;
                }

                // Шаг 5: декодируем Uint8Array обратно в строку
                const result = new TextDecoder("utf-8").decode(chunksAll);

                const cosmetics = JSON.parse(result);

                if (cosmetics && cosmetics.length) {
                    dispatch(cosmeticsLoaded(cosmetics));
                } else {
                    dispatch(cosmeticsError('Something went wrong...'));
                }
            } else {
                dispatch(cosmeticsError(response));
            }
        })
        .catch(error => dispatch(cosmeticsError(error)));
};

export {
    fetchCosmetics,
    addCartItem
}
