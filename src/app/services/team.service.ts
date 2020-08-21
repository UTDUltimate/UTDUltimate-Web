import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Team } from "../models/team";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TeamService {
  constructor(private http: HttpClient) {}

  private teamsUrl = "api/teams"; // URL to future web api

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /* GET teams from the server */
  getTeams(): Observable<Team[]> {
    return this.http
      .get<Team[]>(this.teamsUrl)
      .pipe(catchError(this.handleError<Team[]>("getTeams", [])));
  }

  /*GET individual team by id. Will 404 if id not found*/
  getTeam(id: number): Observable<Team> {
    const url = `${this.teamsUrl}/${id}`;
    return this.http
      .get<Team>(url)
      .pipe(catchError(this.handleError<Team>(`getTeam id=${id}`)));
  }
}
