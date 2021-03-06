<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\consultas;

class consultascontroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $consultas = new consultas;
        $consultas->nombre = $request->nombre;
        $consultas->email = $request->email;
        $consultas->asunto = $request->asunto;
        $consultas->mensaje = $request->mensaje;

        $consultas->save();
        return view('contact');
    }

    public function read()
    {
        $consultas = consultas::all();
        return view('listconsultas',compact("consultas"));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $consultas = consultas::findorFail($id);
        return view('editconsulta',compact('consultas'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $consultas = consultas::findorFail($id);
        $consultas -> update($request->all());
        return redirect('listadeconsultas');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $consultas = consultas::findorFail($id);
        $consultas -> delete();
        return redirect('listadeconsultas');
    }
}
