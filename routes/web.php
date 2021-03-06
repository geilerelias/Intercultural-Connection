<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/clear-cache', function () {
    try {
        $exitCode = Artisan::call('config:cache');
        return 'DONE'; //Return anything
    } catch (Throwable $th) {
        //throw $th;
    }
});


Route::get('/storage', function () {
    try {
        $exitCode = Artisan::call('storage:link');

        return 'DONE =>'.$exitCode; //Return anything
    } catch (Throwable $th) {
        //throw $th;
    }
});

Route::get('storage/{folder}/{filename}', function ($folder, $filename) {

    try {
        $path = storage_path() . '/app/' . $folder . '/' . $filename;

        //si no se encuentra lanzamos un error 404.
        if (!Storage::exists($folder . '/'  . $filename)) {
            abort(404);
        }

        $file = File::get($path);
        $type = File::mimeType($path);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);
        return $response;
    } catch (\Throwable $th) {
        return  $th->getMessage();
    }
});
Route::get('/{any?}', function () {
    return view("app");
})->where('any', '.*')->name('app');
