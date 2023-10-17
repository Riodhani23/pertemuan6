// membuat program pengecekan user



// function untuk mengecek berdasarkan data user
function cekuser(data_username, data_password) {
    let user = [
        ['admin', 'admin123'],
        ['santri', 'santri123'],
        ['arya', 'aryaganteng']
    ]

    for (user of user){
        let u = user[0] //username
        let p = user[1] //password

        if (u == data_username && p == data_password) {
            window.location = "home.html"
        }
    }
}

function Login() {

    let username = document.getElementById('username').value

    let password = document.getElementById('password').value

    if (username.length < 1 && password.length < 1) {
        alert("isi username dan password terlebih dahulu")
    }

    else if (password.length < 8) {
        alert("password minimal 8 karakter")
    }

    else {
        cekuser(username, password)
    }

}

document.getElementById('simpan').addEventListener('click', Login)