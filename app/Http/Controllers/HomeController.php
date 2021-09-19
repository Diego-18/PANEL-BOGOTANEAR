<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;

use App\Exports\DiaExport;
use Maatwebsite\Excel\Facades\Excel;


class HomeController extends Controller
{
    public function index() {
        return view("home");
    }

    public function data(Request $request)
    {
        $response = Http::withHeaders(['TOKEN' => '3F0254D8-025E-4058-B04F-3AAE5A2FED14'])->acceptJson()->get("http://200.69.100.66/ServicioRestSelloRojo/Service1SelloRojo.svc/ganadores/81");
    
        return  $response;
    }

    public function data_premio(Request $request) {
        $response = Http::withHeaders(['TOKEN' => '3F0254D8-025E-4058-B04F-3AAE5A2FED14'])->acceptJson()->get("http://200.69.100.66/ServicioRestSelloRojo/Service1SelloRojo.svc/GanadoresAgrupado/81");
       
   
        return   $response;
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

