import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private update: SwUpdate,
    private snackBar: MatSnackBar) { }

  ngOnInit(){
    this.update.versionUpdates.pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      switchMap(() => this.snackBar.open('A new version is available!', 'Update now').afterDismissed()),
      filter(result => result.dismissedByAction), map(() =>
        this.update.activateUpdate().then(() => location.reload()))).subscribe();
  }



}
