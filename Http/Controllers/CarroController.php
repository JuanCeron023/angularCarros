<?php

namespace App\Http\Controllers;
use App\Models\Carro;
use Error;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class CarroController extends Controller
{
    public function getCarro(){
        return response()->json(Carro::all(),200);
    }

    public function getCarroById($id){
        $carro = Carro::find($id);
        if(is_null($carro)){
            return response()->json(['message' => 'carro no encontrado'], 404);
        }else{
            return response()->json($carro::find($id),200);
        }   
    }

    public function addCarro(Request $request){
        $carro = Carro::create($request->all());
        return response($carro,201);
    }

    public function updateCarro(Request $request, $id){
        $carro = Carro::find($id);
        if(is_null($carro)){
            return response()->json(['message' => 'carro no encontrado'], 404);
        }else{
            $carro -> update($request->all());
            //return response()->json(['message' => 'datos del carro actualizados'],200);
            
           return response($carro,200);
        } 
    }

    public function deleteCarro(Request $request, $id){

        $carro = Carro::find($id);
        if(is_null($carro)){
            return response()->json(['message' => 'carro no encontrado'], 404);
        }else{
            $numeros=$carro->imagen;
            $carro -> delete();
            try{
                $image_pathws = public_path().'/img/'.$numeros;
                unlink($image_pathws);            
            }
            catch(Error){
            }
            finally{
                return response()->json(['message' => 'carro borrado'],200);
            }
            
        } 
    }






    public function uploadimage(Request $request)
    {
      //check file
      if ($request->hasFile('image'))
      {
            $file      = $request->file('image');
            $filename  = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $picture   = $filename;
            //move image to public/img folder
            $file->move(public_path('img'), $picture);
            return response()->json(["message" => "Image Uploaded Succesfully"]);
      } 
      else
      {
            return response()->json(["message" => "Select image first."]);
      }
    }



    public function verimagen()
        {
             $imgsrc = "http://127.0.0.1:8000/img/49.jpg";
            return response()->json($imgsrc);
        }



}
