<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->increments('id');
            $table->string("browserApp");
            $table->string("deviceType");
            $table->string("country");
            $table->string("city");
            $table->string("region");
            $table->string("plugins");
            $table->string("ipAddress");
            $table->string("isp");
            $table->string("schools");
            $table->string("banks");
            $table->string("searchEngines");
            $table->string("entertainment");
            $table->string("travelServices");
            $table->string("storage");
            $table->string("mail");
            $table->string("socialMedia");
            $table->string("porn");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reports');
    }
}
