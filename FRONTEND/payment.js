document.addEventListener('DOMContentLoaded', () => {

    const count = localStorage.getItem('selectedCount');
    const total = localStorage.getItem('totalPrice');

    if (count !== null && total !== null) {
        document.getElementById('qty').textContent = count;
        document.getElementById('amount').textContent = Number(total).toFixed(2);
    }

    document.getElementById('payment-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const btn = document.querySelector('.pay-button');
        btn.disabled = true;
        btn.textContent = "Processing...";

        const freshTotal = document.getElementById('amount').textContent;

        setTimeout(() => {
            window.location.href = `success.html?total=${freshTotal}`;
        }, 1500);
    });

});