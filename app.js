function entered(){
    let year = document.querySelector('input').value;
    
if (year % 100 != 0 && year % 4 == 0) {
    alert(`Enter ${year} is a Leap Year`)
}
else if (year % 400 == 0) {
    alert(`Entered ${year} is a Leap Year`)
}
else {
    alert(`Your ${year} is not a Leap Year`)
}
}

document.querySelector('input').addEventListener
('keydown', function(event) {
    if (event.key == 'Enter') {
        entered()
    }
})