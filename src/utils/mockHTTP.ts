export const mock = (success, timeout): any => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve()
            } else {
                reject({ message: 'Error' })
            }
        }, timeout)
    })
}
