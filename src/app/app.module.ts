import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularMultiSelectModule } from '../../projects/angular-multiselect-dropdown-lib/src/lib/multiselect.component';
import { HighlightModule } from 'ngx-highlightjs';
import {SourceTab} from './components/sourcetab/sourcetab.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CheckForUpdateService } from './check-for-update.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
    declarations: [
        AppComponent,
        SourceTab,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        ReactiveFormsModule,
        FormsModule,
        AngularMultiSelectModule,
        HttpClientModule,
        AdsenseModule.forRoot(),
        NgbModule,
        HighlightModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        BrowserAnimationsModule
    ],
    providers: [CheckForUpdateService],
    bootstrap: [AppComponent]
})
export class AppModule { }
