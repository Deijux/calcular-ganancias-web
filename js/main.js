const btnCalc = document.getElementById("butt_cal")
const btnRes = document.getElementById("butt_rst")

btnCalc.addEventListener("click", () => {
    let format = document.getElementById("formato").value;
    if (format == "condecimal") {
        getValueInputsDecimal()
    } else if (format == "sindecimal") {
        getValueInputsNoDecimal()
    }
})

const getValueInputsDecimal = () => {
    let inputPreVen = document.getElementById("pre_ven").value
    let inputPrePro = document.getElementById("pre_pro").value
    let inputVenMes = document.getElementById("ven_mes").value
    let pre_ven = parseFloat(inputPreVen).toFixed(3);
    let pre_pro = parseFloat(inputPrePro).toFixed(3);
    let ven_mes = parseFloat(inputVenMes);
    operacion(pre_ven, pre_pro, ven_mes);
}

const getValueInputsNoDecimal = () => {
    let inputPreVen = document.getElementById("pre_ven").value
    let inputPrePro = document.getElementById("pre_pro").value
    let inputVenMes = document.getElementById("ven_mes").value
    let pre_ven = parseInt(inputPreVen);
    let pre_pro = parseInt(inputPrePro);
    let ven_mes = parseInt(inputVenMes);
    operacionNoDecimal(pre_ven, pre_pro, ven_mes);
}

function operacion(pre_ven, pre_pro, ven_mes) {
    let rest = (pre_ven) - (pre_pro);
    let marg_gan = (rest) * (ven_mes);
    if (ven_mes <= 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese una cantidad mas alta de productos vendidos',
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Entendido',
            backdrop: true,
            allowOutsideClick: false,
            allowEnterKey: true,
            timer: 5000,
            timerProgressBar: true,
        })
    } else if (ven_mes > 1 && pre_ven >= 1 && pre_pro) {
        Swal.fire({
            icon: 'success',
            title: 'Resultado',
            html: 'El margen de ganancia de los <b>' + ven_mes + '</b> productos por un valor de ' + pre_ven + ' es de <b>' + marg_gan.toFixed(3) + '</b>',
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Entendido',
            backdrop: true,
            allowOutsideClick: false,
            allowEnterKey: true,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese valores válidos',
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Entendido',
            backdrop: true,
            allowOutsideClick: false,
            allowEnterKey: true,
            timer: 5000,
            timerProgressBar: true,
        })
    }
}

function operacionNoDecimal(pre_ven, pre_pro, ven_mes) {
    let rest = (pre_ven) - (pre_pro);
    let marg_gan = (rest) * (ven_mes);
    if (ven_mes <= 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese una cantidad mas alta de productos vendidos',
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Entendido',
            backdrop: true,
            allowOutsideClick: false,
            allowEnterKey: true,
            timer: 5000,
            timerProgressBar: true,
        })
    } else if (ven_mes > 1 && pre_ven >= 1 && pre_pro) {
        Swal.fire({
            icon: 'success',
            title: 'Resultado',
            html: 'El margen de ganancia de los <b>' + ven_mes + '</b> productos por un valor de ' + pre_ven + ' es de <b>' + marg_gan + '</b>',
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Entendido',
            backdrop: true,
            allowOutsideClick: false,
            allowEnterKey: true,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese valores válidos',
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Entendido',
            backdrop: true,
            allowOutsideClick: false,
            allowEnterKey: true,
            timer: 5000,
            timerProgressBar: true,
        })
    }
}

function info() {
    Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'info',
        html: '<b>Ejemplo con decimal: </b> 13.000 <br> <b>Ejemplo sin decimal: </b> 13000'
    })
}

btnRes.addEventListener("click", () => {
    document.getElementById("pre_ven").value = "";
    document.getElementById("pre_pro").value = "";
    document.getElementById("ven_mes").value = "";
})
