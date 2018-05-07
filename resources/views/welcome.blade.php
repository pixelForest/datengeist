<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0">
  <meta name="referrer" content="never">
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Datengeist</title>
  <link rel="stylesheet" href="{{asset('css/standardize.css')}}">
  <link rel="stylesheet" href="{{asset('css/index.css')}}">
</head>
<body class="body page-index clearfix">
  <h1 style="display: none;">DATENGEIST</h1>
<!--
  <audio id="landing_sound" autoplay hidden loop>
  <source src="audio/landing.mp3" type="audio/mpeg"/>
  </audio>
-->
  <div id="site-wrapper" class="site-wrapper">
    <div id="description" class="description_wrapper">
      <p class="description-copy">Each and every single one of us creates up to <span>2.5 quintillion bytes of data</span> every day. This data can take various forms; from the information that we send to each other on the myriad of messaging services, to the data we share about ourselves within our social networks. Each one of our activities online creates a trail of data that leads right back to us. While most of this data remains inaccessible, a large part of our personal information can still be easily found on the internet. This data can then be harnessed and used to profile you, building an accurate picture of who you are, the things you like, and the activities you prefer to engage in. Everyone of us has this data about us, floating around out there; our data ghost — our <span>datengeist</span>.&nbsp;<br><br><br>This interactive experience is a digital artwork that challenges how we identify as private individuals in the 21st century. Pulling from real-time social media data sources, the work is a two-part system that exists both online and in the physical world. The online component invites participants to allow themselves to be data-mined. This information is processed and presented to you as your <span>datengeist</span>: the digital shadow of your real world identity. The physical installation (currently on show at the <a target="_blank" href="http://www.admgradshow.com">ADM Show 2018</a>) takes this further, presenting an immersive world filled with captured <span>datengeists.</span> Visitors will be able to reach out and interact with any of these digital shadows, revealing the personal information they hold within.&nbsp;<br><br><br><br><span style="opacity: .5; letter-spacing: 0px; font: normal 12px/1.38 SFMono-Light;">Designed by Kapilan Naidu<br>In collaboration with Darryl Lim</span></p>
      <div id="more_btn" class="arrow">
        <img id="arrow-right" class="arrow-right" src="images/arrow_side.svg">
        <img id="arrow-left" class="arrow-left" src="images/arrow_side.svg">
      </div>
    </div>
    <div id="main-wrapper" class="main_wrapper">
      <div id="begin_btn" class="button">
        <a id="begin_btn_after" class="button_after" href="{{route('reports.create')}}">BEGIN</a>
        <a id="begin_btn_before" class="button_before" href="{{route('reports.create')}}">BEGIN</a>
      </div>
      <img class="title_logo" src="images/title_anim.png">
    </div>
    <div id="particle-sphere" class="particle_sphere"></div>
    <div id="particles" class="particles"></div>
  </div>
  <div id="scene" class="backdrop"></div>
  <script src="{{asset('js/jquery-min.js')}}"></script>
  <script src="{{asset('js/three.min.js')}}"></script>
  <script src="{{asset('js/index.js')}}"></script>
</body>
</html>
