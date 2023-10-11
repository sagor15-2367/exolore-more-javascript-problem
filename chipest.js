const phones = [
    { name: 'sumsung', camera: 12, storage: '32gb', price: 30000, color: 'silver' },
    { name: 'walton', camera: 15, storage: '64gb', price: 20000, color: 'silver' },
    { name: 'iphone', camera: 50, storage: '500gb', price: 830000, color: 'silver' },
    { name: 'redmi', camera: 52, storage: '128gb', price: 220000, color: 'silver' },
    { name: 'oppo', camera: 12, storage: '32gb', price: 120000, color: 'white' },
    { name: 'nokia', camera: 100, storage: '108gb', price: 430000, color: 'black' }

];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        // console.log(phone);
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);