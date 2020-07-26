<?php

namespace DigitalCreative\ValueWidget;

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
            Nova::script('value-widget', __DIR__ . '/../dist/js/widget.js');
        });
    }
}
