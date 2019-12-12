import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CommunicationService } from './services/app.communication.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [CommunicationService]
})
export class UtilityModule {}

