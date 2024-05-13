import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { RegComponent } from './reg/reg.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecordingComponent } from './recording/recording.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { TipsComponent } from './tips/tips.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'reg', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'reg', component: RegComponent, data: { text: 'Reg' } },
  { path: 'welcome', component: WelcomeComponent, data: { text: 'welcome' } },
  { path: 'recording', component: RecordingComponent, data: { text: 'Recording' } },
  { path: 'analysis', component: AnalysisComponent, data: { text: 'Analysis' } },
  { path: 'tips', component: TipsComponent, data: { text: 'Tips' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
