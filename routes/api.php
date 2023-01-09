<?php
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Laravue\JsonResponse;
use \App\Laravue\Acl;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



use App\Http\Controllers\Admin\Api\AuthController;
Route::post('auth/login', [AuthController::class, 'login']);
Route::get('/user', function (Request $request) {
    return new UserResource($request->user());
});

// Api resource routes
use App\Http\Controllers\Admin\Api\RoleController;
Route::apiResource('roles', RoleController::class)->middleware('permission:' . Acl::PERMISSION_PERMISSION_MANAGE);
use App\Http\Controllers\Admin\Api\UserController;
Route::apiResource('users', UserController::class)->middleware('permission:' . Acl::PERMISSION_USER_MANAGE);
use App\Http\Controllers\Admin\Api\PermissionController;
Route::apiResource('permissions', PermissionController::class)->middleware('permission:' . Acl::PERMISSION_PERMISSION_MANAGE);




