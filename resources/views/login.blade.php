<!doctype html>
<html lang="es">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="shortcut icon" href="https://www.bogotanear.com/img/72ppi/bogotanear.png">

    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">

    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css'>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css'>


    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.0.18/sweetalert2.all.js"></script>
    <link rel="stylesheet" href="{{ asset('css/login.css') }}">
    <title>Panel - Bogotanear</title>
</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i style="margin-top: 20px;" class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title">
                    PANEL BOGOTANEAR
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <div class="form-group">
                            <label class="form-control-label">NIT</label>
                            <input type="number" class="form-control" placeholder="INGRESE SU NIT" required id="user_log">
                        </div>
                        <div class="form-group">
                            <label class="form-control-label">CONTRASEÑA</label>
                            <input type="password" class="form-control" placeholder="INGRESE SU CONTRASEÑA" required id="pass_log">
                        </div>

                        <div class="col-lg-12 loginbttm">

                            <div class="col-lg-6 login-btm login-text">
                                <!-- Error Message -->
                            </div>
                            <div class="col-lg-6 login-btm login-button">
                                <button type="button" class="btn btn-outline-primary" id="login_log">ENTRAR</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <script>
            $(function() {
                $(document).bind("contextmenu", function(e) {
                    return false;
                });

                $(document).keydown(function(event) {
                    if (event.keyCode == 123) {
                        return false;
                    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
                        return false;
                    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
                        return false;
                    } else if (event.keyCode == 83 && (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)) {
                        return false;
                    } else if (event.ctrlKey && event.keyCode == 85) {
                        return false;
                    }

                });
                const Toast = Swal.mixin({
                    showConfirmButton: true,
                    showCancelButton: false,
                    confirmButtonColor: '#c71821',
                    background: '#1A2226',
                    iconColor: '#c71821',
                    confirmButtonText: '<span class="mu7 btn-confirm">Aceptar</span>',
                    allowOutsideClick: false,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });

                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });

                //LOGIN
                $("#login_log").click(function() {
                    var user = $("#user_log").val();
                    var pass = $("#pass_log").val();
                    if (!user.match(/^[0-9]{9}$/)) {
                        Toast.fire({
                            icon: 'error',
                            title: '<span class="alert-error">Ingresa un nit válido</span>',
                        });
                    } else if (!pass.match(/^[a-zA-Z0-9]{12}$/)) {
                        Toast.fire({
                            icon: 'error',
                            title: '<span class="alert-error">Ingresa una contraseña válida</span>',
                        });
                    } else {
                        $(this).prop('disabled', true);
                        $.ajax({
                            url: "{{ route('pros_login') }}",
                            type: "POST",
                            data: {
                                username: user,
                                password: pass
                            },
                            success: function(response) {
                                if (response == true) {
                                    $("#login_log").prop('disabled', false);
                                    location.href = "{{ route('home') }}";
                                } else {
                                    Toast.fire({
                                        icon: 'error',
                                        title: '<span class="mu7 alert-error">NIT y/o Contraseña incorrectos</span>',
                                    });
                                    $("#login_log").prop('disabled', false);
                                }
                            },
                            error: function(response) {
                                Toast.fire({
                                    icon: 'error',
                                    title: '<span class="mu7 alert-error">Ocurrió un error, intenta más tarde</span>',
                                });
                                $("#login_log").prop('disabled', false);
                            }
                        });
                    }
                });
            });
        </script>
</body>

</html>
