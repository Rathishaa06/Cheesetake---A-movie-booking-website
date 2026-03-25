const container = document.getElementById('seatContainer');
const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
const seatsPerRow = 12;
const ticketPrice = 240.00;

function initSeats() {
    rows.forEach(label => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        
        const labelSpan = document.createElement('span');
        labelSpan.className = 'row-label';
        labelSpan.innerText = label;
        rowDiv.appendChild(labelSpan);

        // 👉 Create 3 groups (columns)
        for (let g = 0; g < 3; g++) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'seat-group';

            // 👉 4 seats per group (total 12)
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
    const selectedSeats = document.querySelectorAll('.real-seat.selected'); // ✅
    const count = selectedSeats.length;
    document.getElementById('count').innerText = `${count} Seats`;
    document.getElementById('total').innerText = `₹${(count * ticketPrice).toFixed(2)}`;
}

function confirmSeats() {
    const count = document.querySelectorAll('.real-seat.selected').length; // ✅
    alert(count > 0 ? `Confirmed ${count} seats!` : 'Please select a seat.');
}

initSeats();