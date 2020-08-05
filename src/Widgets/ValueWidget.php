<?php

namespace DigitalCreative\ValueWidget\Widgets;

use DigitalCreative\NovaDashboard\Widget;
use DigitalCreative\NovaDashboard\WidgetOptionTab;
use Laravel\Nova\Fields\KeyValue;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Text;

abstract class ValueWidget extends Widget
{

    public const PREFIX = 'prefix';
    public const SUFFIX = 'suffix';
    public const DECIMAL = 'decimal';
    public const NO_CURRENT_DATA = 'no_current_data';

    public const LABELS = 'labels';
    public const LABEL_NO_PRIOR_DATA = 'No Prior Data';
    public const LABEL_NO_CURRENT_DATA = 'No Current Data';
    public const LABEL_NO_INCREASE = 'No Increase';
    public const LABEL_INCREASE = 'Increase';
    public const LABEL_DECREASE = 'Decrease';
    public const LABEL_PREVIOUS_VALUE = 'Previous Value';

    public function component(): string
    {
        return 'value-widget';
    }

    public function widgetFields()
    {
        return WidgetOptionTab::make(__('Widget Settings'), [
            self::PREFIX => static function (string $attribute) {
                return Text::make(__('Prefix'), $attribute);
            },
            self::SUFFIX => static function (string $attribute) {
                return Text::make(__('Suffix'), $attribute);
            },
            self::DECIMAL => static function (string $attribute) {
                return Number::make(__('Decimal Rounding'), $attribute)->default(2);
            },
            self::NO_CURRENT_DATA => static function (string $attribute) {
                return Text::make(__('No Current Data'), $attribute)->default(__('N/A'))
                           ->help(__('Shown when there is no current data available.'));
            },
            self::LABELS => static function (string $attribute) {
                return KeyValue::make(__('Labels'), $attribute)
                               ->keyLabel(__('Option'))
                               ->valueLabel(__('Label'))
                               ->disableEditingKeys()
                               ->disableDeletingRows()
                               ->default([
                                   static::LABEL_NO_PRIOR_DATA => __('No Prior Data'),
                                   static::LABEL_NO_CURRENT_DATA => __('No Current Data'),
                                   static::LABEL_NO_INCREASE => __('No Increase'),
                                   static::LABEL_INCREASE => __('Increase'),
                                   static::LABEL_DECREASE => __('Decrease'),
                                   static::LABEL_PREVIOUS_VALUE => __('Previous value:'),
                               ]);
            },
        ]);
    }

}
