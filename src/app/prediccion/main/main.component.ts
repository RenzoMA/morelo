import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session.service";
import { ColumnMode } from "@swimlane/ngx-datatable";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
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
