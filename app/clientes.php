<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class clientes extends Model
{
    //
    protected $fillable =['id', 'nombre', 'apellido', 'email', 'telefono', 'created_at', 'updated_at'];
}
