while(++index < length) {
    const rand = index + Math.floor(Math.random()*(lastIndex-index+1));
    const value = result[rand]
    result[rand] = result[index]
    result[index] = value
}