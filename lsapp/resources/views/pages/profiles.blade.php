@extends('layouts.app')

    @section('content')

        <h1>{{$title}}</h1>
        @if(count($profiles) > 0)
            <ul class = "list-group">
                @foreach ($profiles as $image)
                    <li class="list-group-item">{{$image}}</li>                     
                    <p><a class="label" href="/name" role="label">Name</p>
                     echo Form::label('name');
                @endforeach   
            </ul>
        @endif
    @endsection

