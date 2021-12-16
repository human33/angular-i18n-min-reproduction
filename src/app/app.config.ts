import { Injectable } from '@angular/core';
import {firstValueFrom, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const SETTINGS_LOCATION = "assets/appsettings.json";

@Injectable({providedIn: 'root'})
export class AppConfig {
    public constructor(private http: HttpClient) {}
    
    private config: { [key: string]: {} } = {};

    async getSettings(): Promise<void> {
        try {
            this.config = await firstValueFrom(this.http.get<{}>(SETTINGS_LOCATION));
        } catch (error) {
            console.error("Unable to load configuration, error:" + error);
        }
    }
    
    public getSection<SectionType>(name: string): SectionType {
        return this.config[name] as SectionType;
    }
}