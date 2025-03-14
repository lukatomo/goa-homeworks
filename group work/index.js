let totalPrice = 0;  // დავიწყოთ 0-დან

// ფუნქცია, რომელიც ფასი დაამატებს კალათაში
function addToCart(price) {
    totalPrice += price;  // ამატებს ფასი totalPrice-ს
    document.getElementById('total-price').textContent = totalPrice;  // განახლება "Total"-ზე
}
