const container = document.getElementById('seatContainer');
const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
const ticketPrice = 240.00;

function initSeats() {
    rows.forEach(label => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        
        const labelSpan = document.createElement('span');
        labelSpan.className = 'row-label';
        labelSpan.innerText = label;
        rowDiv.appendChild(labelSpan);

        for (let g = 0; g < 3; g++) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'seat-group';

            for (let i = 1; i <= 4; i++) {
                const seat = document.createElement('div');
                seat.className = 'seat real-seat';

                if (Math.random() < 0.2) seat.classList.add('occupied');

                seat.addEventListener('click', () => {
                    if (!seat.classList.contains('occupied')) {
                        seat.classList.toggle('selected');
                        updateSelection();
                    }
                });

                groupDiv.appendChild(seat);
            }

            rowDiv.appendChild(groupDiv);
        }

        container.appendChild(rowDiv);
    });
}

function updateSelection() {
    const selectedSeats = document.querySelectorAll('.real-seat.selected'); 
    const count = selectedSeats.length;
    const total = count * ticketPrice;

    // UI update
    document.getElementById('count').innerText = `${count} Seats`;
    document.getElementById('total').innerText = `₹${total.toFixed(2)}`;
}

// Initialize
initSeats();

// ✅ Proceed button (FINAL FIX HERE)
document.getElementById('proceedBtn').addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.real-seat.selected');

    if (selectedSeats.length > 0) {
        const count = selectedSeats.length;
        const total = count * ticketPrice;

        // 🔴 FORCE STORE AS STRING (IMPORTANT)
        localStorage.setItem('selectedCount', String(count));
        localStorage.setItem('totalPrice', String(total));

        // 🔍 DEBUG (YOU MUST SEE THIS)
        console.log("STORED VALUE:", localStorage.getItem('totalPrice'));

        // ⏳ Small delay to ensure storage completes
        setTimeout(() => {
            window.location.href = 'payment.html';
        }, 100);

    } else {
        alert('Please select at least one seat');
    }
});
