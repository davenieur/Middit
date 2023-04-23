export const checkIfIsImage = (imgSrc) => {
    return (imgSrc.match(/\.(jpeg|jpg|gif|png)$/) != null)
}
