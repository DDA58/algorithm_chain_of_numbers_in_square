#!/usr/bin/env node

import ChainHelper from "./Services/ChainHelper";
import {Command} from "commander";

const APP_VERSION: string = '1.0.0',
    APP_DESCRIPTION: string = 'App does chain numbers in square',
    COMMAND_NAME: string = 'run',
    COMMAND_DESCRIPTION: string = 'Run console app'

const
    {prompt}: any = require('inquirer'),
    chalk: any = require('chalk');

new Command()
    .version(APP_VERSION)
    .description(APP_DESCRIPTION)
    .command(COMMAND_NAME)
    .description(COMMAND_DESCRIPTION)
    .action((): void => {
        const PROMPT_TYPE: string = 'number',
            PROMPT_NAME: string = 'amountOfNumbers',
            PROMPT_MESSAGE: string = 'Amount of numbers in the side of the square'

        prompt([
            {
                type: PROMPT_TYPE,
                name: PROMPT_NAME,
                message: PROMPT_MESSAGE,
            },
        ]).then((options: Options): void => {
            if (!options.amountOfNumbers) {
                const NOT_VALID_MESSAGE: string = 'Amount of numbers is not valid'

                console.log(
                    chalk.red(NOT_VALID_MESSAGE)
                )

                return;
            }

            console.table(
                ChainHelper.handle(+options.amountOfNumbers)
            )
        })
    })
    .parse(process.argv)