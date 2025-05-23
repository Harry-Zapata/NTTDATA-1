<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class usersController extends Controller
{
    public function getUsers()
    {
        try {
            $response = Http::get('https://randomuser.me/api/?results=10');
            $data = $response->json();

            $users = [];

            foreach ($data['results'] as $user ) {
                $users[] = [
                    'id' => $user['login']['uuid'],
                    'nombre' => $user['name']['first'] . ' ' . $user['name']['last'],
                    'genero' => $user['gender'],
                    'ubicacion' => $user['location']['city'] . ', ' . $user['location']['state'] . ', ' . $user['location']['country'],
                    'correo' => $user['email'],
                    'fecha_nacimiento' => $user['dob']['date'],
                    'foto' => $user['picture']['thumbnail']
                ];
            }

            return response()->json($users);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }
}
