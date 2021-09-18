<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use SebastianBergmann\Environment\Console;
use App\Exports\DiaExport;
use Maatwebsite\Excel\Facades\Excel;


class HomeController extends Controller
{
    public function index() {
        return view("home");
    }

    public function data(Request $request)
    {
        // $response = Http::withHeaders(['TOKEN' => '3F0254D8-025E-4058-B04F-3AAE5A2FED14'])->acceptJson()->get("http://200.69.100.66/ServicioRestSelloRojo/Service1SelloRojo.svc/ganadores/81");
        // $json = '[
        //         {
        //         "ganador": [
        //             {
        //               "nombre": "73200335",
        //               "identificacion": "JEISON RUIZ",
        //               "tipoid": "Cedula de Ciudadania",
        //               "ciudad": "BOGOTA",
        //               "telefono": "3044869196",
        //               "telefonofijo": "12345647",
        //               "cod_regional": "1",
        //               "cod_oficina": "734",
        //               "nom_oficina": "SUBA CALLE 139",
        //               "fecha": "09/09/2021 09:14:58 a. m.",
        //               "fechanacimiento": "13/08/1983 12:00:00 a. m.",
        //               "barrio": "AURES",
        //               "titulo": "Corona Tradicional Pastilla<br/>Individual de 31.25 gramos",
        //               "gramaje": "31",
        //               "cantidad": "1",
        //               "totalgramaje": "31",
        //               "marcado": "CON LOGO"
        //             },
        //             {
        //               "nombre": "73200335",
        //               "identificacion": "JEISON RUIZ",
        //               "tipoid": "Cedula de Ciudadania",
        //               "ciudad": "BOGOTA",
        //               "telefono": "3044869196",
        //               "telefonofijo": "12345647",
        //               "cod_regional": "1",
        //               "cod_oficina": "734",
        //               "nom_oficina": "SUBA CALLE 139",
        //               "fecha": "09/09/2021 09:14:58 a. m.",
        //               "fechanacimiento": "13/08/1983 12:00:00 a. m.",
        //               "barrio": "AURES",
        //               "titulo": "Tradicional 1000 gramos",
        //               "gramaje": "1000",
        //               "cantidad": "1",
        //               "totalgramaje": "1000",
        //               "marcado": ""
        //             }
        //       ]
        //     }
        // ]';
        //$val = $response[0]["ganador"];
        /*foreach ($val as $key => $value) {
            echo $value["titulo"];
            echo "<br>";
        }*/
        return  '';
    }

    public function data_premio(Request $request) {
        // $response = Http::withHeaders(['TOKEN' => '3F0254D8-025E-4058-B04F-3AAE5A2FED14'])->acceptJson()->get("http://200.69.100.66/ServicioRestSelloRojo/Service1SelloRojo.svc/GanadoresAgrupado/81");
       
    //     $json = '[
    //         {
    //         "ganador": [
    //             {
    //               "nombre": "73200335",
    //               "identificacion": "JEISON RUIZ",
    //               "tipoid": "Cedula de Ciudadania",
    //               "ciudad": "BOGOTA",
    //               "telefono": "3044869196",
    //               "telefonofijo": "12345647",
    //               "cod_regional": "1",
    //               "cod_oficina": "734",
    //               "nom_oficina": "SUBA CALLE 139",
    //               "fecha": "09/09/2021 09:14:58 a. m.",
    //               "fechanacimiento": "13/08/1983 12:00:00 a. m.",
    //               "barrio": "AURES",
    //               "titulo": "Corona Tradicional Pastilla<br/>Individual de 31.25 gramos",
    //               "gramaje": "31",
    //               "cantidad": "1",
    //               "totalgramaje": "31",
    //               "marcado": "CON LOGO"
    //             },
    //             {
    //               "nombre": "73200335",
    //               "identificacion": "JEISON RUIZ",
    //               "tipoid": "Cedula de Ciudadania",
    //               "ciudad": "BOGOTA",
    //               "telefono": "3044869196",
    //               "telefonofijo": "12345647",
    //               "cod_regional": "1",
    //               "cod_oficina": "734",
    //               "nom_oficina": "SUBA CALLE 139",
    //               "fecha": "09/09/2021 09:14:58 a. m.",
    //               "fechanacimiento": "13/08/1983 12:00:00 a. m.",
    //               "barrio": "AURES",
    //               "titulo": "Tradicional 1000 gramos",
    //               "gramaje": "1000",
    //               "cantidad": "1",
    //               "totalgramaje": "1000",
    //               "marcado": ""
    //             }
    //       ]
    //     }
    // ]';
        return   '';
    }

    public function dia_datos(){
 
        $redimeExport = new DiaExport();
        return Excel::download($redimeExport, 'Ganadores Efecty.xlsx');
        // return response()->json([
        //     'result' => false,
        //     'valid' => "Ocurrió un error, intenta más tarde",
        // ]);
    }
}

