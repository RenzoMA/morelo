import { Component, OnInit } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { SessionService } from "../../services/session.service";

@Component({
  selector: "app-confirmacion",
  templateUrl: "./confirmacion.component.html",
  styleUrls: ["./confirmacion.component.scss"],
})
export class ConfirmacionComponent implements OnInit {
  userName: string = "";
  columns = [
    { prop: "Codigo" },
    { name: "Direccion" },
    { name: "Distrito" },
    { name: "Nro Suministro" }
  ];
  rows = [];
  ColumnMode = ColumnMode;
  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.userName = this.sessionService.getUser();
  }
}
