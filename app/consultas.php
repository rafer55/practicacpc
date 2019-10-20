<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class consultas extends Model
{
    //
    protected $fillable = array('id', 'nombre', 'email', 'asunto','mensaje');
}
