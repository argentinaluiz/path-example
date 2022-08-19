import { IExampleScraper } from "#example/infra/web-scraper/ports/IExampleScraper";

export class SignInUseCase {
    constructor(
        private readonly exampleService: IExampleScraper,
    ) { }

    async execute(): Promise<void> {
        console.log('oi')
    }
}