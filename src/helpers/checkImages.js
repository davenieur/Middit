// Check if an image has any of these formats
export const checkIfIsImage = (imgSrc) => {
    return (imgSrc.match(/\.(jpeg|jpg|gif|png)$/) != null)
}
