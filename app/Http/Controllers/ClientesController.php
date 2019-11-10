<?php

namespace App\Http\Controllers;

use App\clientes;
use Illuminate\Http\Request;

class ClientesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $clientes = clientes::all();
        return response(json_encode($clientes))->header("Access-Control-Allow-Origin", "http://localhost:8080");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $clientes = new clientes();
        $clientes->nombre = $request->nombre;
        $clientes->apellido = $request->apellido;
        $clientes->email = $request->email;
        $clientes->telefono = $request->telefono;
        $clientes->save();
        return response ("Ingresado con Exito")->header("Access-Control-Allow-Origin", "http://localhost:8080");;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\clientes  $clientes
     * @return \Illuminate\Http\Response
     */
    public function show(clientes $clientes, $id)
    {
        //
        $clientes = clientes::findOrFail($id);
        return ($clientes);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\clientes  $clientes
     * @return \Illuminate\Http\Response
     */
    public function edit(clientes $clientes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\clientes  $clientes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, clientes $clientes, $id)
    {
        //
        $clientes = clientes::findOrFail($id);
        $clientes->update($request->all());
        return "Registro Actualizado";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\clientes  $clientes
     * @return \Illuminate\Http\Response
     */
    public function destroy(clientes $clientes, $id)
    {
        //
        $clientes = clientes::findOrFail($id);
        $clientes->delete();

        return "Registro Eliminado";
    }
}
