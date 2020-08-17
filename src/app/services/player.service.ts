import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Player } from "../models/player";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  private playersUrl = "api/players"; // URL to future web api

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

  /* GET players from the server */
  getPlayers(): Observable<Player[]> {
    return this.http
      .get<Player[]>(this.playersUrl)
      .pipe(catchError(this.handleError<Player[]>("getPlayers", [])));
  }

  /*GET individual player by id. Will 404 if id not found*/
  getPlayer(id: number): Observable<Player> {
    const url = `${this.playersUrl}/${id}`;
    return this.http
      .get<Player>(url)
      .pipe(catchError(this.handleError<Player>(`getPlayer id=${id}`)));
  }
}
