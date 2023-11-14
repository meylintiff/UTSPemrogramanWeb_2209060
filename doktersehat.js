function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Mohon isi semua kolom!');
    } else {
        alert('Pesan berhasil dikirim!');
        document.getElementById('contactForm').reset();
    }
}
