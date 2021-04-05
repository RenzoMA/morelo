import { Component, OnInit } from "@angular/core";
import { SessionService } from '../../services/session.service';

@Component({
  selector: "app-indicadores",
  templateUrl: "./indicadores.component.html",
  styleUrls: ["./indicadores.component.scss"],
})
export class IndicadoresComponent implements OnInit {
  userName: string = "";
  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.userName = this.sessionService.getUser();
  }
}
