<?php

declare(strict_types = 1);

namespace DigitalCreative\ValueWidget;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class ValueWidgetServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Nova::serving(static function (ServingNova $event): void {

            Nova::script('value-icon-widget', __DIR__ . '/../dist/js/card.js');
            Nova::style('value-icon-widget', __DIR__ . '/../dist/css/card.css');

        });
    }
}
