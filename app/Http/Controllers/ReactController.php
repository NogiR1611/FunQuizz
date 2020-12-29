<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Register;
use Illuminate\Support\Facades\Hash;
use DB;

class ReactController extends Controller
{
    public function show (Request $request) {
        $username = $request->session()->get("username_login");
        return view('index',[ 'username' => $username ]);
    }
 
    public function user_json(Request $request){
        $user = DB::table('register')->get();
        return response() -> json([
            'data' => $user
        ],200);
    }

    public function register_store(Request $request){
        
        DB::table('register')->insert([
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return redirect()->back();
    }

    public function login_store(Request $request){
        $data = Register::where('email',$request->email)->firstOrFail();
        if($data){
            if(Hash::check($request->password,$data->password)){
                session([
                    "berhasil_login" => true,
                    "username_login" => $data->username
                ]);
                return response()->json([
                    'success' => true,
                    'id' => $data->id,
                    'username' => $data->username,
                    'email' => $data->email,
                    'session' => $request->session()->get("berhasil_login")
                ]);
            }
        }

        return response()->json([
            'errors' => [
                'password' => ["Sorry password yang anda masukan salah"]
            ]
        ],404);
    }

    public function logout(Request $request){
        $request->session()-flush();
        return redirect()->back();
    }
}