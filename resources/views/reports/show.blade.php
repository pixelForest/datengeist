<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta name="referrer" content="never">
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Data Display</title>
</head>
<body>
  <div style="display: block; float: left; padding-right: 50px; margin-left: 10px" id="visited_container">
    <h3>Personal Information</h3>
    <ul id="visited">
      <li>{{$report->browserApp}}</li>
      <li>{{$report->deviceType}}</li>
      <li>{{$report->country}}</li>
      <li>{{$report->city}}</li>
      <li>{{$report->region}}</li>
      <li>{{$report->ipAddress}}</li>
      <li>{{$report->isp}}</li>
    </ul>
  </div>
  <div style="display: block; float: left;" id="not_visited_container">
    <h3>Services used</h3>
    <ul id="not_visited">
      @foreach($plugins as $plugin)
      <li>{{$plugin}}</li>
      @endforeach
      @foreach($schools as $school)
      <li>{{$school}}</li>
      @endforeach
      @foreach($banks as $bank)
      <li>{{$bank}}</li>
      @endforeach
      @foreach($searchEngines as $engine)
      <li>{{$engine}}</li>
      @endforeach
      @foreach($entertainment as $ent)
      <li>{{$ent}}</li>
      @endforeach
      @foreach($travelServices as $ts)
      <li>{{$ts}}</li>
      @endforeach
      @foreach($storage as $s)
      <li>{{$s}}</li>
      @endforeach
      @foreach($mail as $m)
      <li>{{$m}}</li>
      @endforeach
      @foreach($socialMedia as $sm)
      <li>{{$sm}}</li>
      @endforeach
      @foreach($porn as $p)
      <li>{{$p}}</li>
      @endforeach
    </ul>
  </div>
</body>
</html>
