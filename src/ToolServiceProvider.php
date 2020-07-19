<?php

namespace DigitalCreative\SimpleMetricsWidget;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Nova;

class ToolServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function () {
            Nova::script('simple-metrics-widget', __DIR__ . '/../dist/js/widget.js');
        });
    }
}
