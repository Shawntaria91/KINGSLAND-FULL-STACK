function main(commands) {
    /**
     * Use map for preserving order
     */
    let users = {};
    for (let idx = 0; idx < commands.length; idx++) {
        const cmd = commands[idx];
        if (cmd.includes("Add")) {
            const username = cmd.split("->")[1];
            if (!!users[username]) {
                console.log(`${username} is already registered`);
            } else {
                users[username] = { sentEmails: [] };
            }
        } else if (cmd.includes("Send")) {
            const [send, username, sentEmail] = cmd.split("->");
            if (!!users[username]) {
                users[username].sentEmails.push(sentEmail);
            }
        } else if (cmd.includes("Delete")) {
            const username = cmd.split("->")[1];
            if (!!users[username]) {
                delete users[username];
            } else {
                console.log(`${username} not found!`);
            }
        } else if (cmd.includes("Statistics")) {
            /**
             * {
             *      username1: { sentEmails: [] },
             *      username2: { sentEmails: [] }
             * }
             */
            let userEntries = Object.entries(users);
            /**
             * [
             *        [
             *          "usernameB",
             *          {
             *              sentEmails: [1, 2]
             *          }
             *      ]
             *      [
             *          "Abc",
             *          {
             *              sentEmails: []
             *          }
             *      ],
             * ]
             */
            userEntries.sort((first, sec) => {
                let user1Username = first[0];
                let user2Username = sec[0];
                let user1SentEmailsCount = first[1].sentEmails.length;
                let user2SentEmailsCount = sec[1].sentEmails.length;
                if (user1SentEmailsCount > user2SentEmailsCount) {
                    return -1;
                } else if (user1SentEmailsCount < user2SentEmailsCount) {
                    return 1;
                } else {
                    if (user1Username > user2Username) {
                        return 1;
                    } else if (user1Username < user2Username) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            });
            console.log(`Users count: ${userEntries.length}`);
            for (let idx = 0; idx < userEntries.length; idx++) {
                const [username, objValue] = userEntries[idx];
                const { sentEmails } = objValue;
                console.log(username);
                for (let secIdx = 0; secIdx < sentEmails.length; secIdx++) {
                    const sentEmail = sentEmails[secIdx];
                    console.log(` - ${sentEmail}`);
                }
            }
            break;
        }
    }
}
main([`Add->Mike`,`Add->George`,
`Send->George->Hello World,`
`Send->George->Some random test mail`,
`Send->Mike->Hello, do you want to meet up
tomorrow?`,
`Send->George->It would be a pleasure`,
`Send->Mike->Another random test mail`,
`Statistics`]);