<?php

namespace DigitalCreative\ValueWidget\Widgets;

use DigitalCreative\NovaDashboard\ValueResult as BaseValueResult;

/**
 * @method self amount(int $int)
 * @method self currentValue(int $int)
 * @method self previousValue(int $int)
 *
 * @property int currentValue
 * @property int|null previousValue
 */
class ValueResult extends BaseValueResult
{

    protected function previousValuePercentage(): ?float
    {

        if (($previousValue = $this->previousValue) !== null) {

            if (($previousValue === $this->currentValue) ||
                ($previousValue !== null && $this->currentValue === null)) {

                return 0;

            }

            if ($previousValue === 0) {

                return 100;

            }

            $decreaseValue = $this->currentValue - $previousValue;

            return round(($decreaseValue / $previousValue) * 100, $this->options->get('decimal', 2));

        }

        return null;

    }

    protected function isPositive(): ?bool
    {

        if (($previousValue = $this->previousValue) !== null) {

            return $this->currentValue >= $previousValue;

        }

        return null;

    }

    public function jsonSerialize(): array
    {
        return array_merge([
            'isPositive' => $this->isPositive(),
            'previousValuePercentage' => abs($this->previousValuePercentage()),
        ], parent::jsonSerialize());
    }

}
