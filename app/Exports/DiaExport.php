<?php

namespace App\Exports;

use App\Models\dia;
use Maatwebsite\Excel\Concerns\FromCollection;
// https://www.nigmacode.com/laravel/exportar-excel-en-laravel/

class DiaExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return dia::all();
    }
}
