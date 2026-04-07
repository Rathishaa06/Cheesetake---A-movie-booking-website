document.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(window.location.search);
    const total = params.get('total');

    if (total && !isNaN(total)) {
        document.getElementById('amount-paid').textContent = `₹${Number(total).toFixed(2)}`;
    } else {
        document.getElementById('amount-paid').textContent = '₹0.00';
    }

});