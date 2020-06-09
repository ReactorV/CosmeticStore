const cosmeticsLoaded = (newCosmetics) => {
    return {
        type: 'FETCH_COSMETICS_SUCCESS',
        cosmetics: newCosmetics
    }
};

const cosmeticsError = (error) => {
    return {
        type: 'FETCH_COSMETICS_ERROR',
        error: error
    }
};

const fetchCosmetics = (cosmeticsStoreService) => () => (dispatch) => {
    return cosmeticsStoreService.getCosmetics()
        .then(async (response) => {
            const reader = response.body.getReader();

            // Шаг 3: считываем данные:
            let receivedLength = 0; // количество байт, полученных на данный момент
            const chunks = []; // массив полученных двоичных фрагментов (составляющих тело ответа)

            while(true) {
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

            for(let chunk of chunks) {
                chunksAll.set(chunk, position); // (4.2)
                position += chunk.length;
            }

            // Шаг 5: декодируем Uint8Array обратно в строку
            const result = new TextDecoder("utf-8").decode(chunksAll);

            const cosmetics = JSON.parse(result);

            dispatch(cosmeticsLoaded(cosmetics));
        })
        .catch(error => dispatch(cosmeticsError(error)));
};

export {
    fetchCosmetics
}
