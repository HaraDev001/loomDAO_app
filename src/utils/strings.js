export function trimString(maxLength, str){
    let trimmedString = str.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    return trimmedString + " ...";
}

export const shortenAddress = (address, num = 3) => {
    if (!address) return '';
    return !!address && `${address.substring(0, num + 2)}...${address.substring(address.length - num - 1)}`;
};

export const capitalize = (str) => {
    return str.trim().replace(/^\w/, (c) => c.toUpperCase())
}