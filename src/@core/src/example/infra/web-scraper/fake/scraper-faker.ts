import { IExampleScraper } from "../ports/IExampleScraper";

export class ScraperFaker implements IExampleScraper {
    public async signIn(): Promise<void> {
        console.log("Fake sign in");
    }
}