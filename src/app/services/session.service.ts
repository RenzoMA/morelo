import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SessionService {
  constructor() {}

  isLoggedIn() {
    const user = localStorage.getItem("morelo_user");
    return user ? true : false;
  }

  logIn(user: string, password: string) {
    localStorage.setItem("morelo_user", JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem("morelo_user");
  }
}
