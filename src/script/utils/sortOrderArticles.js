export const sortOrderArticles = toSort => {
    const sortedArray = [...toSort];

    sortedArray.sort((a, b) => {
        const randomOrder = Math.round(Math.random() * toSort.length + 1);
        console.log(randomOrder)
        
        return (a.id - randomOrder);
    })
    console.log(toSort, "toSort");
    console.log(sortedArray, "sortedArray");

    return sortedArray;
}