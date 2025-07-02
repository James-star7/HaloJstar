document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        const nama = document.getElementById('nama').value;
        const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
        
        if (!nama || !jenisKelamin) {
            showMessage('Silahkan lengkapi semua data yang diperlukan!', 'error');
            return;
        }

        // Form is valid, proceed with submission
        showMessage('Data berhasil dikirim!', 'success');
        
        // Uncomment this to actually submit the form
        // form.submit();
    });

    function showMessage(msg, type) {
        messageDiv.textContent = msg;
        messageDiv.className = 'message ' + type;
    }
});
   