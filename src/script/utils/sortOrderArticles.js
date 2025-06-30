export const sortOrderArticles = toSort => {
    const sortedArray = [...toSort];

    sortedArray.sort((a, b) => {
        const randomOrder = Math.round(Math.random() * toSort.length + 1);        
        return (a.id - randomOrder);
    })

    return sortedArray;
}