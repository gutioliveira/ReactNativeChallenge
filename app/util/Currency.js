export function formatBrazillianPrice(price) {
    return "R$ " + (price ? price.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.") : "0,00")
}