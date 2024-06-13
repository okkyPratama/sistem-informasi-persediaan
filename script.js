
function notNullValidation(input) {
    if (input.value === '') {
        input.setCustomValidity('Mohon Untuk diisi');
        return false
    } else {
        input.setCustomValidity('');
    }

    return true;
}


function emailValidation(input) {

    if (input.value === '') {
        input.setCustomValidity
            ('Mohon Untuk diisi');
    } else if (input.validity.typeMismatch) {
        input.setCustomValidity
            (`Alamat Email harus mengandung '@' `);
    } else {
        input.setCustomValidity('');
    }

    return true;
}


function addresValidation(input) {

    if (input.value === '') {
        input.setCustomValidity('Mohon Untuk diisi');
        return false
    } else if (!(input.value.startsWith("Jl."))) {
        input.setCustomValidity(`Alamat harus diawali dengan "Jl. "`)
        return false
    } else {
        input.setCustomValidity('');
    }

    return true
}

function phoneNumbervalidation(input) {
    if (input.value === '') {
        input.setCustomValidity('Mohon Untuk diisi');
        return false
    } else if (!(input.value.startsWith("08"))) {
        input.setCustomValidity(`Nomor telpon harus diawali dengan 08`)
        return false
    } else {
        input.setCustomValidity('');
    }
    console.log(input)
    return true
}

function passwordValidation(input) {

    const hurufKapital = /[A-Z]/
    const hurufKecil = /[a-z]/
    const angka = /[0-9]/

    if (input.value === '') {
        input.setCustomValidity
            ('Mohon Untuk diisi');
        return false
    } else if (input.value.length < 8) {
        input.setCustomValidity("Password minimal terdiri dari 8 karakter")
        return false

    } else if (input.value.length > 10) {
        input.setCustomValidity("Password maksimal terdiri dari 10 karakter")
        return false
    } else if (!(input.value.match(hurufKapital))) {
        input.setCustomValidity("Password harus memiliki minimal 1 huruf kapital ")
        return false
    } else if (!(input.value.match(hurufKecil))) {
        input.setCustomValidity("Password harus memiliki minimal 1 huruf Kecil ")
        return false
    } else if (!(input.value.match(angka))) {
        input.setCustomValidity("Password harus memiliki minimal 1 angka ")
        return false
    }

    else {
        input.setCustomValidity('');
    }

    return true;
}

function loginNotification() {
    alert("Login Sukses")

}

function registerNotification() {
    alert("Register Sukses'")
}

function menuToggle() {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
}

function logoutConfirmation() {
    text = "Yakin ingin logout?"
    if (confirm(text) == true) {
        window.location.href = "./index.html"
        return true

    } else {
        window.location.reload();
        return false;
    }
}
