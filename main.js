function operacion(pre_ven, pre_pro, ven_mes) {
    let rest = (pre_ven) - (pre_pro);
    let marg_gan = (rest) * (ven_mes);
    marg_gan = marg_gan.toFixed(3);
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
    } else if (ven_mes > 1) {
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

const repeat = () =>{
    window.location.reload();
}

const getValueInputs = () =>{
    var pre_ven = parseFloat(document.getElementById("pre_ven").value).toFixed(3);
    var pre_pro = parseFloat(document.getElementById("pre_pro").value).toFixed(3);
    var ven_mes = parseFloat(document.getElementById("ven_mes").value);
    operacion(pre_ven, pre_pro, ven_mes);
}