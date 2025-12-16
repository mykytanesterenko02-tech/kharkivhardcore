// ВАШИ ДАННЫЕ (заполните их)
const TELEGRAM_BOT_TOKEN = '8226836516:AAFCmu2nEVpfpAEdbOIbG6pJCP5R-xvqKEs';
const TELEGRAM_CHAT_ID = '6803908886';

function selectProduct(name) {
    const itemInput = document.getElementById('itemName');
    itemInput.value = name;
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const item = document.getElementById('itemName').value;
    const name = this.querySelectorAll('input')[1].value;
    const phone = this.querySelectorAll('input')[2].value;

    // Текст сообщения для вас
    const message = `
🔥 НОВЫЙ ЗАКАЗ:
👕 Товар: ${item}
👤 Имя: ${name}
📞 Тел: ${phone}
    `;

    // Отправка данных боту через запрос
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Заказ успешно отправлен! Мы свяжемся с вами.');
            document.getElementById('orderForm').reset();
        } else {
            alert('Ошибка при отправке. Попробуйте еще раз.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ошибка соединения.');
    });
});