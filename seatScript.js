const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const seatSelect = document.getElementById("seat");

populateUI();

let ticketPrice = +seatSelect.value;

//Save seat index & price
function setBusSeatData(seatIndex, seatPrice) {
  localStorage.setItem("selectedBusSeatIndex", seatIndex);
  localStorage.setItem("selectedBusSeatPrice", seatIndex);
}

//update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

//Get data from local storage and pop UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats != null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedBusSeatIndex = localStorage.getItem('selectedBusSeatIndex');

  if (selectedBusSeatIndex !== null) {
    seatSelect.selectIndex = selectedBusSeatIndex;
  }
}

//BusSeat Select Event
seatSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setBusSeatData(e.target.selectIndex, e.target.value);
  updateSelectedCount();
});

//Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initial count && total
updateSelectedCount();
