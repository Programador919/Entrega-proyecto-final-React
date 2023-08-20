export function toCapital(str) {
    if (str == null){
        return 
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}