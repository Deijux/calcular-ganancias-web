function diferenciador() {
    var format = document.getElementById("formato").value;
    if (format == "condecimal") {
        getValueInputsDecimal()
    } else if (format == "sindecimal") {
        getValueInputsNoDecimal()
    }
}

const getValueInputsDecimal = () =>{
    var pre_ven = parseFloat(document.getElementById("pre_ven").value).toFixed(3);
    var pre_pro = parseFloat(document.getElementById("pre_pro").value).toFixed(3);
    var ven_mes = parseFloat(document.getElementById("ven_mes").value);
    operacion(pre_ven, pre_pro, ven_mes);
}

const getValueInputsNoDecimal = () =>{
    var pre_ven = parseInt(document.getElementById("pre_ven").value);
    var pre_pro = parseInt(document.getElementById("pre_pro").value);
    var ven_mes = parseInt(document.getElementById("ven_mes").value);
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
            confirmButtonText:'<i class="fa fa-thumbs-up"></i> Entendido',
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
            confirmButtonText:'<i class="fa fa-thumbs-up"></i> Entendido',
            backdrop: true,
            allowOutsideClick: false,
            allowEnterKey: true,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese valores válidos',
            confirmButtonText:'<i class="fa fa-thumbs-up"></i> Entendido',
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
            confirmButtonText:'<i class="fa fa-thumbs-up"></i> Entendido',
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
            confirmButtonText:'<i class="fa fa-thumbs-up"></i> Entendido',
            backdrop: true,
            allowOutsideClick: false,
            allowEnterKey: true,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese valores válidos',
            confirmButtonText:'<i class="fa fa-thumbs-up"></i> Entendido',
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

const repeat = () =>{
    document.getElementById("pre_ven").value = "";
    document.getElementById("pre_pro").value = "";
    document.getElementById("ven_mes").value = "";
}
