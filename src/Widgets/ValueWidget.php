<?php

namespace DigitalCreative\ValueWidget\Widgets;

use DigitalCreative\NovaDashboard\Widget;
use Illuminate\Support\Str;
use Laravel\Nova\Fields\KeyValue;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;

abstract class ValueWidget extends Widget
{

    public const OPTION_PREFIX = 'prefix';
    public const OPTION_SUFFIX = 'suffix';
    public const OPTION_TITLE = 'title';
    public const OPTION_DECIMAL = 'decimal';
    public const OPTION_NO_CURRENT_DATA = 'no_current_data';
    public const OPTION_HELP = 'help';
    public const OPTION_LABELS = 'labels';

    public const OPTION_LABEL_NO_PRIOR_DATA = 'No Prior Data';
    public const OPTION_LABEL_NO_CURRENT_DATA = 'No Current Data';
    public const OPTION_LABEL_NO_INCREASE = 'No Increase';
    public const OPTION_LABEL_INCREASE = 'Increase';
    public const OPTION_LABEL_DECREASE = 'Decrease';
    public const OPTION_LABEL_PREVIOUS_VALUE = 'Previous Value';

    public function component(): string
    {
        return 'value-widget';
    }

    public function fields(): array
    {

        return [

            Text::make(__('Title'), static::OPTION_TITLE)->default(static function () {
                return Str::title(Str::snake(class_basename(static::class), ' '));
            }),

            Text::make(__('Prefix'), static::OPTION_PREFIX),
            Text::make(__('Suffix'), static::OPTION_SUFFIX),

            Number::make(__('Decimal Rounding'), static::OPTION_DECIMAL)->default(2),

            Text::make(__('No Current Data'), static::OPTION_NO_CURRENT_DATA)->default(__('N/A'))
                ->help(__('Shown when there is no current data available.')),

            KeyValue::make(__('Labels'), static::OPTION_LABELS)
                    ->keyLabel(__('Option'))
                    ->valueLabel(__('Label'))
                    ->disableEditingKeys()
                    ->disableDeletingRows()
                    ->default([
                        static::OPTION_LABEL_NO_PRIOR_DATA => __('No Prior Data'),
                        static::OPTION_LABEL_NO_CURRENT_DATA => __('No Current Data'),
                        static::OPTION_LABEL_NO_INCREASE => __('No Increase'),
                        static::OPTION_LABEL_INCREASE => __('Increase'),
                        static::OPTION_LABEL_DECREASE => __('Decrease'),
                        static::OPTION_LABEL_PREVIOUS_VALUE => __('Previous value:')
                    ]),

            Textarea::make(__('Help'), static::OPTION_HELP)

        ];

    }

}
