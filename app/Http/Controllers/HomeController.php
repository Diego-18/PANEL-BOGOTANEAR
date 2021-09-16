<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class HomeController extends Controller
{
    public function index() {
        return view("home");
    }

    public function data(Request $request)
    {
        $response = Http::withHeaders(['TOKEN' => '3F0254D8-025E-4058-B04F-3AAE5A2FED14'])->acceptJson()->get("http://200.69.100.66/ServicioRestSelloRojo/Service1SelloRojo.svc/ganadores/81");
        //$val = $response[0]["ganador"];
        /*foreach ($val as $key => $value) {
            echo $value["titulo"];
            echo "<br>";
        }*/
        return $response;
    }

    public function data_premio(Request $request) {
        $response = Http::withHeaders(['TOKEN' => '3F0254D8-025E-4058-B04F-3AAE5A2FED14'])->acceptJson()->get("http://200.69.100.66/ServicioRestSelloRojo/Service1SelloRojo.svc/GanadoresAgrupado/81");
        return $response;
    }
}
