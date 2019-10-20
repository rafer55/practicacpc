@extends('template/app')
@section('tittle','Editar Consulta')
@section('seccionPpal')
    <div style="padding: 20px; text-align: center">
    <h1>Editar una Consulta</h1>
    </div>
    <form action="/updateconsulta/{{ $consultas -> id }}" method="post"> 
        @csrf
    <div class="row">
        <div class="col-sm-8 offset-4" style="padding-bottom: 10px">
            <div class="col-sm-3"><label for="nombre">Ingresar nombre</label></div>
            <div class="col-sm-6"><input type="text" name="nombre" id="nombre" value="{{$consultas -> nombre}}"> </div>
        </div>
        <div class="col-sm-8 offset-4" style="padding-bottom: 10px">
            <div class="col-sm-3"><label for="email">Ingresar email</label></div>
            <div class="col-sm-6"><input type="email" name="email" id="email" value="{{$consultas -> email}}"> </div>
        </div>
        <div class="col-sm-8 offset-4" style="padding-bottom: 10px">
            <div class="col-sm-3"><label for="asunto">Asunto</label></div>
            <div class="col-sm-6"><input type="asunto" name="asunto" id="asunto" value="{{$consultas -> asunto}}"> </div>
        </div>
        <div class="col-sm-8 offset-4" style="padding-bottom: 10px">
            <div class="col-sm-3"><label for="mensaje">Mensaje</label></div>
            <div class="col-sm-6"><textarea name="mensaje" id="mensaje" cols="40" rows="5" >{{$consultas -> mensaje}}</textarea> </div>
        </div>
        <input type="hidden" name="_method" id="id" value="POST">
        <div class="col-sm-4 offset-6" style="padding-bottom: 10px">
            <input type="submit" value="Enviar" class="btn-primary">
        </div>
    </div>
    </form>
@endsection