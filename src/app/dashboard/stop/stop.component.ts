import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TransitDeparture } from 'src/app/transit-departure';
import { StopDeparture } from 'src/app/stop-departure';
import { MatRipple } from '@angular/material';

@Component({
  selector: 'iw-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.scss']
})
export class StopComponent implements OnInit {
  public thisIsProgress: number;
  _departures: Array<StopDeparture> = [];
  private _name: string;
  @Input() set name(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  @Input() set departures(departures: Array<StopDeparture>) {
    this._departures = departures;
    /*
    if (this._departures.length > 0) {
      if (this.nextDeparture) {
        if (
          this.nextDeparture.departure.getTime() -
            this._departures[0].departure.getTime() !=
          0
        ) {
          // Do something on departure update
        }
      }

      this.nextDeparture = this._departures[0];
    }

    if (this._departures.length > 1) {
      this.laterDeparture = this._departures[1];
    } else {
      this.laterDeparture = null;
    }
    this.thisIsProgress = Math.round(
      510 - 0.43 * (this.nextDeparture.departing * 60)
    );*/
  }

  get departures() {
    return this._departures;
  }

  public deviation: { title: string; text: string; severity: number };

  public nextDeparture: TransitDeparture;
  public laterDeparture: TransitDeparture;

  @ViewChild(MatRipple) ripple: MatRipple;

  /** Shows a centered and persistent ripple. */
  launchRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true,
      animation: {
        enterDuration: 1000,
        exitDuration: 1000
      }
    });

    // Fade out the ripple later.
    rippleRef.fadeOut();
  }

  constructor() {
    setInterval(() => {
      if (this.ripple) {
        this.launchRipple();
      }
    }, 15000);
  }

  ngOnInit() {}
}
