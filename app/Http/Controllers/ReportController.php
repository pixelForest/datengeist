<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Report;

class ReportController extends Controller
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
        return view('reports.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = json_decode($request->info,true);
        $report = new Report;
        $report->browserApp = $data['browserApp'];
        $report->deviceType = $data['deviceType'];
        $report->country = $data['country'];
        $report->city = $data['city'];
        $report->region = $data['region'];
        $report->plugins = serialize($data['plugins']);
        $report->ipAddress = $data['ipAddress'];
        $report->isp = $data['isp'];
        $report->schools = serialize($data['schools']);
        $report->banks = serialize($data['banks']);
        $report->searchEngines = serialize($data['searchEngines']);
        $report->entertainment = serialize($data['entertainment']);
        $report->travelServices = serialize($data['travelServices']);
        $report->storage = serialize($data['storage']);
        $report->mail = serialize($data['mail']);
        $report->socialMedia = serialize($data['socialMedia']);
        $report->porn = serialize($data['porn']);
        $report->save();
        return redirect()->route('reports.show',$report->id);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      $report = Report::findOrFail($id);
      $plugins = unserialize($report->plugins);
      $schools = unserialize($report->schools);
      $banks = unserialize($report->banks);
      $searchEngines = unserialize($report->searchEngines);
      $entertainment = unserialize($report->entertainment);
      $travelServices = unserialize($report->travelServices);
      $storage = unserialize($report->storage);
      $mail = unserialize($report->mail);
      $socialMedia = unserialize($report->socialMedia);
      $porn = unserialize($report->porn);
      return view('reports.show')->withReport($report)->withPlugins($plugins)->withSchools($schools)->
      withBanks($banks)->withSearchEngines($searchEngines)->withEntertainment($entertainment)->
      withTravelServices($travelServices)->withStorage($storage)->withMail($mail)->withSocialMedia($socialMedia)->withPorn($porn);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
    }
}
