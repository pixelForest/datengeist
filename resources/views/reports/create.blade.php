<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta name="referrer" content="never">
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0">
  <title>Datengeist | Generating</title>
  <link href="{{asset('css/standardize.css')}}" rel="stylesheet">
  <link href="{{asset('css/generate.css')}}" rel="stylesheet">
  <script src="{{asset('js/infoCollect.js')}}"></script>
  <script src="{{asset('js/hosts.js')}}"></script>
  <script src="{{asset('js/blacklist.js')}}"></script>
  <script src="{{asset('js/history.js')}}"></script>
  <script src="{{asset('js/personal.js')}}"></script>
</head>
<body class="body page-index clearfix">

  <div style="display:none">
    <div>
      Now checking sites you have affiliations to
    </div>

    <div style="display: block; float: left; padding-right: 50px; margin-left: 10px" id="visited_container">
      <h3>Sites you've probably visited:</h3>
      <ul id="visited">
      </ul>
    </div>
    <div style="display: block; float: left;" id="not_visited_container">
      <h3>Sites checked so far:</h3>
      <ul id="not_visited" style='color:#bbb;'>
      </ul>
    </div>
  </div>

  <div id="loader-wrapper" class="loader_container clearfix">
    <img class="loader" src="{{asset('images/loader.png')}}">
    <p class="text">GENERATING</p>
  </div>
  <div class="backdrop"></div>

  <form id="infoForm" method="POST" action="{{route('reports.store')}}">
    {{csrf_field()}}
    <input style="display:none" id="info" type="text" name="info" value="0">
    <button id="submitInfo" style="display:none" type="submit" name="action" value="{{route('reports.store')}}">next</button>
  </form>
  <script src="{{asset('js/generate.js')}}"></script>
</body>
</html>
