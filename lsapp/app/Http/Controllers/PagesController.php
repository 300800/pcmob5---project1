<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index()
    {
        $title = 'Welcome To Graces Manpower Agency!';
        //return view('pages.index', compact('title'));
        return view('pages.index')->with('title', $title);
    }
    public function about()
    {
        $title = 'About us';
        return view('pages.about', compact('title'));
    }
    public function services()
    {
        $data = array(
            'title' => 'Services',
            'services' =>  ['New Helper', 'Transfer Helper', 'Renewal of Work Permit and other Passes', 'Home Leave Documentation', 'Passport Renewal', 'Application for EP, S/Pass, Permanent Residence'],
        );
        return view('pages.services')->with($data);
    }
    public function profiles()
    {
        $data = array(
            'title' => 'Profiles',
            'profiles' => ['Filipino', 'photo', 'photo', 'photo', 'photo'],
        );
        return view('pages.profiles')->with($data);
    }
}
