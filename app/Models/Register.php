<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Register extends Model
{
    use HasFactory;
    protected $guard = "register";
    protected $table = "register";
    protected $fillable = ["username,email,password"];
    protected $hidden = ["password"];
}