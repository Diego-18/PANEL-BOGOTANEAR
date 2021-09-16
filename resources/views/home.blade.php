@include('head')

<body>
    @include('header')
    <div class="mt-5 div-home" id="premios_div">
        <h4 class="card-title" style="text-align: center;">
            <i class="fas fa-cubes" style="color:#d62215" aria-hidden="true">
            </i> Redenciones por premio
        </h4>
        <br>
        <div style="width: 90%; justify-content: end; display: flex;"></div>
        <div style="margin-top: 3rem; width: 1400px;">
            <canvas id="premio_graf" width="1400"></canvas>
        </div>
    </div>
    <center>
        @include('loader')
    </center>
    @include('dia')
    @include('empaques')
    @include('puntos')
</body>

</html>
