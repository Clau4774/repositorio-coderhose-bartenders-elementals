export const sortOrderArticles = toSort => {
    console.log(toSort)
    const sortedArray = [...toSort];

    sortedArray.sort((a, b) => {
        const randomOrder = Math.floor(Math.random() * toSort.length);
        
        return (a.id - randomOrder);
    })
    console.log(toSort, "toSort");
    console.log(sortedArray, "sortedArray");

    return sortedArray;
}