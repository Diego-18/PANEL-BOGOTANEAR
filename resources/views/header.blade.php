<nav class="navbar navbar-expand-custom navbar-mainbg">
    <a class="navbar-brand navbar-logo" href="{{ route('home') }}">PANEL ADMINISTRATIVO</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <div class="hori-selector">
                <div class="left"></div>
                <div class="right"></div>
            </div>
            <li class="nav-item active">
                <a class="nav-link" href="javascript:void(0);" id="btn_inicio"><i class="fas fa-cubes"></i>PREMIO</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);" id="btn_dia"><i class="fas fa-calendar-check"></i>DÍA</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);" id="btn_empaques"><i class="fas fa-tags"></i>EMPAQUES</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);" id="btn_puntos"><i class="fas fa-location-arrow"></i>PUNTOS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('cerrar_sesion') }}"><i class="fas fa-sign-out-alt"></i>Salir</a>
            </li>
        </ul>
    </div>
</nav>
