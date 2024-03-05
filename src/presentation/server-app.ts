import { SaveFile } from "../domain/save-file.use-case";
import { CreateTable } from "../domain/use-cases/create-table.use-case";


interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}

export class ServerApp {



    static run({ base, limit, showTable }: RunOptions) {
        console.log('Server running...')

        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile()
            .execute({
                fileContent: table,
                fileDestination: `outputs/table${base}`
            });

        if (showTable) console.log(table);

        (wasCreated)
            ? console.log('File created!')
            : console.log('File not created!');
    }

}