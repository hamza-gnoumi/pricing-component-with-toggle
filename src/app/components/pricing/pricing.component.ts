import { Component, Input } from '@angular/core';
import { Option } from 'src/app/option';

@Component({
  selector: 'pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  @Input()
  type;
  @Input()
  option: Option;
  @Input()
  doit;

}
