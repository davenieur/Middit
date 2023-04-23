export const utcToDate = utcSeconds => {
    const nowDate = new Date();
    const postDate = new Date(utcSeconds*1000);
    return Math.round((Math.abs((nowDate.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24))))
}