@extends('template/app')
@section('tittle','contacto')
@section('seccionPpal')
    <style>
    .filas{
        padding-left:20px;
        padding-bottom:15px;
        text-align: center;
    }
    </style>
    <div style="padding: 20px; text-align: center">
    <h1>Lista de Consultas</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
            <table class="table table-striped table-bordered table-hover">
                <tr>
                <th class="filas">Nombre</th>
                <th class="filas">Email</th>
                <th class="filas">Asunto</th>
                <th class="filas">Mensaje</th>
                <th class="filas">Accion</th>
                </tr>
            @foreach($consultas as $consulta)
                <tr>
                <td class="filas"> {{$consulta -> nombre}} </td>
                <td class="filas"> {{$consulta -> email}} </td>
                <td class="filas"> {{$consulta -> asunto}} </td>
                <td class="filas"> {{$consulta -> mensaje}} </td>
                <td class="filas"><a href="{{$consulta -> id}}" class="btn btn-primary">Editar</a><a href="{{$consulta -> id}}" class="btn btn-danger" style="margin-left: 10px">Eliminar</a></td>
                </tr>
            @endforeach
            </table>
            </div>
        </div>
    </div>
@endsection