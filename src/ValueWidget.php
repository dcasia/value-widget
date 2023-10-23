<?php

declare(strict_types = 1);

namespace DigitalCreative\ValueWidget;

use DigitalCreative\NovaDashboard\Card\Widget;

abstract class ValueWidget extends Widget
{
    public $component = 'value-widget';

    public $width = self::ONE_QUARTER_WIDTH;

    public function title(string $title): self
    {
        return $this->withMeta([ 'title' => $title ]);
    }

    public function icon(string $icon): self
    {
        return $this->withMeta([ 'icon' => $icon ]);
    }

    public function textColor(string $dark, ?string $light = null): self
    {
        return $this
            ->withMeta([ 'textColorDark' => $dark ])
            ->withMeta([ 'textColorLight' => $light ?: $dark ]);
    }

    public function backgroundColor(string $dark, ?string $light = null): self
    {
        return $this
            ->withMeta([ 'backgroundColorDark' => $dark ])
            ->withMeta([ 'backgroundColorLight' => $light ?: $dark ]);
    }
}
