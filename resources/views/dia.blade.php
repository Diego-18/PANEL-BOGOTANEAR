<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<a id="btn_descargar_1" href="#" class="btn btn-sm btn-flash-border-success btn-info">DESCARGABLE</a>
<div class="mt-5 div-home" id="dia_div">
    <h4 class="card-title" style="text-align: center;">
        <i class="fas fa-calendar-check" style="color:#d62215" aria-hidden="true">
        </i> Redenciones por día
    </h4>
    <br>
    <div style="width: 90%; justify-content: end; display: flex;"></div>
    <div style="margin-top: 3rem; width: 1400px;">
        <canvas id="dia_graf" width="1400"></canvas>
    </div>
</div>
<script>

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $("#btn_descargar_1").click(function() {
            Swal.fire({
                icon: "question",
                title: '<span class="alert-error">¿Qué reporte deseas descargar?</span>',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: `<span class="mu7 btn-confirm">POR FECHAS</span>`,
                denyButtonText: `<span class="mu7 btn-confirm" style="color: #fff">DE HOY</span>`,
                denyButtonColor: "#227a68",
                confirmButtonColor: '#c71821',
                background: '#1A2226',
            }).then((result) => {
                if (result.isConfirmed) {
                    $("#modal_descarga").modal("show");
                } else if (result.isDenied) {
                    $("#ddownload_hoy").submit();
                }
            })
        });

</script>
<div class="modal fade" id="modal_descarga" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title card-title">Descargar redenciones por fecha</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="align-items-center">
                        <h2 align="center" class="title-prim"><strong>Redenciones por fecha</strong></h2>
                        <form method="POST" action="{{ route('dia_datos') }}">
                            @csrf
                            <div class="row mt-2">
                                <div class="col">
                                    <select class="form-control" id="mes_desc" name="mes_desc" required>
                                        <option disabled value="" selected>SELECCIONE MES</option>
                                        <option value="8">AGOSTO</option>
                                        <option value="9">SEPTIEMBRE</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <select class="form-control" id="dia_desc" name="dia_desc">
                                        <option disabled value="" selected>SELECCIONE DÍA</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row text-center mt-4">
                                <div class="col">
                                    <button type="submit" class="btn btn-success pull-center">DESCARGAR ARCHIVO</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
</div>