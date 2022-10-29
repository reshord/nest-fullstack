export const deleteSpaces = (el: string) => {
    const arr = el.split(' ')

    if(arr.length > 1) {
        for(let i = 0; i < arr.length; i++) {
            return arr[i] = `${arr[i]}-${arr[i + 1]}` 
        }
    }
    return arr.join('')
}