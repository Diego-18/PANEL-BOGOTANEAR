<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Support\Facades\Http;

class LoginController extends Controller
{
    public function __construct()
    {
    }

    public function login(Request $request)
    {
        //900973583
        //tbCGWnRE7HYp
        try {
            DB::beginTransaction();
            $user = $request->username;
            $pass = $request->password;

            $consulta = User::where("username", $user)->where("password", $pass)->count();
            $user = User::where("username", $user)->where("password", $pass)->first();

            if ($consulta == 1) {
                DB::commit();
                session(['session' => $user["id"]]);
                session(['session_name' => $user["name"]]);
                session(['session_user' => $user["username"]]);
                return true;
            } else {
                DB::rollBack();
                return false;
            }
        } catch (Exception $ex) {
            DB::rollBack();
            return false;
        }
    }

    public function logout(Request $request)
    {
        try {
            session()->forget('session');
            session()->forget('session_name');
            session()->forget('session_user');
            return redirect('/');
        } catch (Exception $ex) {
            return redirect('/');
        }
    }
}
