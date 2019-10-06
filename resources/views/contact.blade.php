@extends('template/app')
@section('tittle','contacto')
@section('seccionPpal')
    <div style="padding: 20px; text-align: center">
    <h1>pagina de contactanos</h1>
    </div>
    <form action="" method="post">
    <div class="row">
        <div class="col-sm-8 col-md-offset-4" style="padding-bottom: 10px">
            <div class="col-sm-3"><label for="nombre">Ingresar nombre</label></div>
            <div class="col-sm-6"><input type="text" name="nombre" id="nombre"></div>
        </div>
        <div class="col-sm-8 col-md-offset-4" style="padding-bottom: 10px">
            <div class="col-sm-3"><label for="email">Ingresar email</label></div>
            <div class="col-sm-6"><input type="email" name="email" id="email"></div>
        </div>
        <div class="col-sm-8 col-md-offset-4" style="padding-bottom: 10px">
            <div class="col-sm-3"><label for="asunto">Asunto</label></div>
            <div class="col-sm-6"><input type="asunto" name="asunto" id="asunto"></div>
        </div>
        <div class="col-sm-8 col-md-offset-4" style="padding-bottom: 10px">
            <div class="col-sm-3"><label for="mensaje">Mensaje</label></div>
            <div class="col-sm-6"><textarea name="mensaje" id="mensaje" cols="40" rows="5"></textarea></div>
        </div>
        <div class="col-sm-4 col-md-offset-6" style="padding-bottom: 10px">
            <input type="submit" value="Enviar" class="btn-primary">
        </div>
    </div>
    </form>
@endsection