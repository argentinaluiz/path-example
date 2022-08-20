import { IExampleScraper } from "#example/infra";

export class SignInUseCase {
    constructor(
        private readonly exampleService: IExampleScraper,
    ) { }

    async execute(): Promise<void> {
        console.log('oi')
    }
}