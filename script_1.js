
        // --- UTILITY FUNCTIONS (RESTORED) ---
        // CRITICAL BUG FIX: These functions were missing, causing the questions to never load!
        function rand(arr) { 
            return arr[Math.floor(Math.random() * arr.length)]; 
        }
        function shuffle(arr) { 
            let array = [...arr];
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        const DRILLS_PER_LEVEL = 5;
        const MAX_LEVELS = 100;

        let progressData = JSON.parse(localStorage.getItem('techEnglishFinal_v6')) || { 
            tenses: 0, sentences: 0, agile: 0, qa: 0, arch: 0, mentor: 0, client: 0, teamwork: 0, story: 0, totalXP: 0 
        };

        const generators = {
    "tenses": {
        "title": "Grammar: Tenses",
        "icon": "\u23f1\ufe0f",
        "type": "builder",
        "desc": "Past, Present, and Future.",
        "templates": [
            {
                "p": "Say you resolved the login issue yesterday.",
                "target": "Yesterday I fixed the login issue",
                "extras": [
                    "fix",
                    "will fix",
                    "fixing"
                ]
            },
            {
                "p": "Say you are currently writing unit tests.",
                "target": "Right now I am writing unit tests",
                "extras": [
                    "wrote",
                    "will write",
                    "writes"
                ]
            },
            {
                "p": "Say you plan to deploy the hotfix tomorrow.",
                "target": "Tomorrow I will deploy the hotfix",
                "extras": [
                    "deployed",
                    "deploying",
                    "deploy"
                ]
            },
            {
                "p": "Say you attended the sprint planning this morning.",
                "target": "This morning I attended sprint planning",
                "extras": [
                    "attend",
                    "will attend",
                    "attending"
                ]
            },
            {
                "p": "Say you are investigating the memory leak.",
                "target": "I am investigating the memory leak",
                "extras": [
                    "investigated",
                    "will investigate",
                    "investigates"
                ]
            },
            {
                "p": "Say you will review the pull request after lunch.",
                "target": "I will review the pull request",
                "extras": [
                    "reviewed",
                    "reviewing",
                    "review"
                ]
            },
            {
                "p": "Say you found a critical vulnerability yesterday.",
                "target": "Yesterday I found a critical vulnerability",
                "extras": [
                    "find",
                    "will find",
                    "finding"
                ]
            },
            {
                "p": "Say you are currently refactoring the payment module.",
                "target": "I am refactoring the payment module",
                "extras": [
                    "refactored",
                    "will refactor",
                    "refactors"
                ]
            },
            {
                "p": "Say you will present the architecture tomorrow.",
                "target": "Tomorrow I will present the architecture",
                "extras": [
                    "presented",
                    "presenting",
                    "present"
                ]
            },
            {
                "p": "Say you optimized the database queries last week.",
                "target": "Last week I optimized the database queries",
                "extras": [
                    "optimize",
                    "will optimize",
                    "optimizing"
                ]
            },
            {
                "p": "Say you migrated the server yesterday.",
                "target": "Yesterday I migrated the server",
                "extras": [
                    "migrate",
                    "will migrate",
                    "migrating"
                ]
            },
            {
                "p": "Say you are currently debugging the mobile app.",
                "target": "I am debugging the mobile app",
                "extras": [
                    "debugged",
                    "will debug",
                    "debugs"
                ]
            },
            {
                "p": "Say you will update the documentation soon.",
                "target": "I will update the documentation soon",
                "extras": [
                    "updated",
                    "updating",
                    "update"
                ]
            },
            {
                "p": "Say you merged the feature branch this morning.",
                "target": "This morning I merged the feature branch",
                "extras": [
                    "merge",
                    "will merge",
                    "merging"
                ]
            },
            {
                "p": "Say you are monitoring the system logs.",
                "target": "I am monitoring the system logs",
                "extras": [
                    "monitored",
                    "will monitor",
                    "monitors"
                ]
            },
            {
                "p": "Say you will schedule a meeting with the client.",
                "target": "I will schedule a meeting with the client",
                "extras": [
                    "scheduled",
                    "scheduling",
                    "schedule"
                ]
            },
            {
                "p": "Say you configured the firewall yesterday.",
                "target": "Yesterday I configured the firewall",
                "extras": [
                    "configure",
                    "will configure",
                    "configuring"
                ]
            },
            {
                "p": "Say you are currently designing the UI mockups.",
                "target": "I am designing the UI mockups",
                "extras": [
                    "designed",
                    "will design",
                    "designs"
                ]
            },
            {
                "p": "Say you will clear the cache tonight.",
                "target": "Tonight I will clear the cache",
                "extras": [
                    "cleared",
                    "clearing",
                    "clear"
                ]
            },
            {
                "p": "Say you restarted the instances an hour ago.",
                "target": "An hour ago I restarted the instances",
                "extras": [
                    "restart",
                    "will restart",
                    "restarting"
                ]
            }
        ]
    },
    "sentences": {
        "title": "Grammar: 3-Word",
        "icon": "\ud83e\uddf1",
        "type": "builder",
        "desc": "Subject-Verb-Object structures.",
        "templates": [
            {
                "p": "Subject-Verb-Object (Server)",
                "target": "I restarted the server",
                "extras": [
                    "is",
                    "was",
                    "will"
                ]
            },
            {
                "p": "Subject-Verb-Object (Code)",
                "target": "I pushed the code",
                "extras": [
                    "pushing",
                    "pushes",
                    "the"
                ]
            },
            {
                "p": "Subject-Verb-Object (Database)",
                "target": "I queried the database",
                "extras": [
                    "query",
                    "querying",
                    "will"
                ]
            },
            {
                "p": "Subject-Verb (Tests)",
                "target": "The tests passed",
                "extras": [
                    "passing",
                    "pass",
                    "I"
                ]
            },
            {
                "p": "Subject-Verb (Pipeline)",
                "target": "The pipeline failed",
                "extras": [
                    "failing",
                    "fails",
                    "was"
                ]
            },
            {
                "p": "Subject-Verb (System)",
                "target": "The system crashed",
                "extras": [
                    "crashing",
                    "crashes",
                    "will"
                ]
            },
            {
                "p": "Subject-Verb-Object (Ticket)",
                "target": "I closed the ticket",
                "extras": [
                    "closing",
                    "closes",
                    "the"
                ]
            },
            {
                "p": "Subject-Verb-Object (Bug)",
                "target": "I found a bug",
                "extras": [
                    "finding",
                    "finds",
                    "error"
                ]
            },
            {
                "p": "Subject-Verb-Object (Meeting)",
                "target": "I scheduled a meeting",
                "extras": [
                    "scheduling",
                    "schedules",
                    "the"
                ]
            },
            {
                "p": "Subject-Verb (App)",
                "target": "The app works",
                "extras": [
                    "working",
                    "worked",
                    "I"
                ]
            },
            {
                "p": "Subject-Verb-Object (Logs)",
                "target": "I checked the logs",
                "extras": [
                    "checking",
                    "checks",
                    "will"
                ]
            },
            {
                "p": "Subject-Verb-Object (Cache)",
                "target": "I cleared the cache",
                "extras": [
                    "clearing",
                    "clears",
                    "the"
                ]
            },
            {
                "p": "Subject-Verb (Client)",
                "target": "The client approved",
                "extras": [
                    "approving",
                    "approves",
                    "will"
                ]
            },
            {
                "p": "Subject-Verb-Object (Design)",
                "target": "I finished the design",
                "extras": [
                    "finishing",
                    "finishes",
                    "the"
                ]
            },
            {
                "p": "Subject-Verb-Object (PR)",
                "target": "I approved the PR",
                "extras": [
                    "approving",
                    "approves",
                    "will"
                ]
            },
            {
                "p": "Subject-Verb (Deployment)",
                "target": "The deployment succeeded",
                "extras": [
                    "succeeding",
                    "succeeds",
                    "was"
                ]
            },
            {
                "p": "Subject-Verb-Object (Email)",
                "target": "I sent the email",
                "extras": [
                    "sending",
                    "sends",
                    "the"
                ]
            },
            {
                "p": "Subject-Verb-Object (Branch)",
                "target": "I deleted the branch",
                "extras": [
                    "deleting",
                    "deletes",
                    "will"
                ]
            },
            {
                "p": "Subject-Verb (Server)",
                "target": "The server responded",
                "extras": [
                    "responding",
                    "responds",
                    "was"
                ]
            },
            {
                "p": "Subject-Verb-Object (Data)",
                "target": "I backed up data",
                "extras": [
                    "backing",
                    "backs",
                    "the"
                ]
            }
        ]
    },
    "agile": {
        "title": "Comm: Agile",
        "icon": "\ud83c\udfa4",
        "type": "scenario",
        "desc": "Casual slang for Standups.",
        "templates": [
            {
                "p": "You finished a task and it's live.",
                "opts": [
                    {
                        "t": "I pushed the auth fix to prod.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Auth fix is go.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "I did the auth.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are stuck on a database error.",
                "opts": [
                    {
                        "t": "I'm currently blocked by a weird SQL error.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "I am wait for SQL.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "SQL is stop me.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You need a code review.",
                "opts": [
                    {
                        "t": "Can someone take a quick look at my PR?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Review my code.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Look at PR please.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You were in meetings all day yesterday.",
                "opts": [
                    {
                        "t": "I was tied up in meetings yesterday.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "I did no work.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Meetings stop me.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You promise to finish by the end of the day.",
                "opts": [
                    {
                        "t": "I'll have this wrapped up by EOD.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "I finish at night.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "End of day I do.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are starting work on a new ticket.",
                "opts": [
                    {
                        "t": "I'm picking up the payment gateway ticket next.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "I do payment ticket.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Payment ticket is me.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You need to pair program with someone.",
                "opts": [
                    {
                        "t": "Does anyone have time to pair on this bug?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Who will code with me?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "I need help coding.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You found a bug that wasn't assigned to you.",
                "opts": [
                    {
                        "t": "I noticed a bug in the navbar, should I create a ticket?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Navbar is broken.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "I fix navbar now.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are asking about the priority of a task.",
                "opts": [
                    {
                        "t": "Is this feature a high priority for this sprint?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Must I do this fast?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Is this important?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are giving a status update on a long task.",
                "opts": [
                    {
                        "t": "I'm still making progress on the backend migration.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Backend is slow.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "I work on backend.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You need clarification from the Product Owner.",
                "opts": [
                    {
                        "t": "I need to sync with Product to clarify these requirements.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Product must tell me.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "I don't know what to do.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are handing over a task to another developer.",
                "opts": [
                    {
                        "t": "I'm passing this ticket over to Sarah for frontend implementation.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Sarah will do frontend.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "I give Sarah ticket.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are reporting that a test failed in CI.",
                "opts": [
                    {
                        "t": "The build is failing in CI, I'm looking into it.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "CI is red.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Build broke.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are asking if a deployment is safe.",
                "opts": [
                    {
                        "t": "Are we clear to deploy this hotfix?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Can I deploy?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Is deploy okay?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are explaining why a task took longer than expected.",
                "opts": [
                    {
                        "t": "The legacy code was messier than anticipated.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Old code is bad.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "It took long time.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            }
        ]
    },
    "qa": {
        "title": "Comm: QA Bugs",
        "icon": "\ud83d\udc1b",
        "type": "scenario",
        "desc": "Environments and rollbacks.",
        "templates": [
            {
                "p": "QA says a bug exists, but you can't reproduce it.",
                "opts": [
                    {
                        "t": "That's weird, it works on my local machine.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "My laptop has no bug.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "You are wrong.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You want QA to test your fix.",
                "opts": [
                    {
                        "t": "Can you verify this fix on the staging environment?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Test my code.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Check staging now.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "QA is seeing old code.",
                "opts": [
                    {
                        "t": "Did you clear your browser cache and hard refresh?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Clear cache.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "You have old code.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A critical bug is found in production.",
                "opts": [
                    {
                        "t": "We need to roll back the deployment immediately.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Delete the code.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Stop the server.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You need steps to reproduce the bug.",
                "opts": [
                    {
                        "t": "Could you provide the exact steps to reproduce this?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "How did you do that?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Show me how.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You need a screenshot of the error.",
                "opts": [
                    {
                        "t": "Can you send me a screenshot of the console output?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Give me picture.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "I need photo.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You suspect a data issue, not a code issue.",
                "opts": [
                    {
                        "t": "This looks like a data integrity issue in the test DB.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Database is wrong.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Data is bad.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You fixed the bug and want to close the ticket.",
                "opts": [
                    {
                        "t": "I've pushed the fix, feel free to close the ticket once verified.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Bug is dead.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Ticket is finish.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You found the root cause of the bug.",
                "opts": [
                    {
                        "t": "I found the root cause, it was a null pointer exception.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "I know why.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "It is null.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are explaining that a bug is actually a feature.",
                "opts": [
                    {
                        "t": "That is actually the expected behavior based on the requirements.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Not a bug.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "It is supposed to do that.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You need QA to test on a specific browser.",
                "opts": [
                    {
                        "t": "Could you test this specifically on Safari?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Test on Safari.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Safari only.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are asking about the severity of the bug.",
                "opts": [
                    {
                        "t": "Is this a blocker for the release?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Is this bad?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Must we fix now?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are requesting a log file.",
                "opts": [
                    {
                        "t": "Can you attach the server logs to the Jira ticket?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Give me logs.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "I need log file.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are confirming that a fix is deployed.",
                "opts": [
                    {
                        "t": "The hotfix is now live on production.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Fix is there.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Code is live.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are asking if the bug happens consistently.",
                "opts": [
                    {
                        "t": "Is this issue happening intermittently or every time?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Does it always happen?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Is it random?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            }
        ]
    },
    "arch": {
        "title": "System Arch",
        "icon": "\ud83c\udfd7\ufe0f",
        "type": "scenario",
        "desc": "Explain databases and APIs.",
        "templates": [
            {
                "p": "Explain why we use Redis.",
                "opts": [
                    {
                        "t": "We use Redis for faster data caching.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Redis makes us fast.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Because Redis is good.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain why we use Docker.",
                "opts": [
                    {
                        "t": "Docker helps us containerize the application for consistent environments.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Docker is for containers.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "We put app in Docker.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain why we use Microservices.",
                "opts": [
                    {
                        "t": "It allows us to scale different components independently.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Micro is better than monolith.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Because small is good.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain a database index.",
                "opts": [
                    {
                        "t": "It speeds up read queries at the cost of slower writes.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "It makes database fast.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Index is for searching.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain asynchronous processing.",
                "opts": [
                    {
                        "t": "We use a message queue to handle tasks in the background.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "We do it later.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Background is async.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain why we use JWT.",
                "opts": [
                    {
                        "t": "JWT allows us to manage stateless authentication securely.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "JWT is for login.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "We use tokens.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain why we use AWS S3.",
                "opts": [
                    {
                        "t": "We use S3 for highly available object storage.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "S3 holds files.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "AWS is for pictures.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain why we use GraphQL.",
                "opts": [
                    {
                        "t": "GraphQL prevents over-fetching and under-fetching of data.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "GraphQL is better than REST.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "We ask for what we want.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain why we use PostgreSQL.",
                "opts": [
                    {
                        "t": "We need strict relational data integrity.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Postgres is a database.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Because tables are good.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain why we use Kafka.",
                "opts": [
                    {
                        "t": "Kafka provides a distributed event streaming platform.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Kafka is for messages.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "We send data with Kafka.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain Load Balancing.",
                "opts": [
                    {
                        "t": "A load balancer distributes incoming traffic across multiple servers.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "It balances the load.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "It makes traffic fair.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain CDN (Content Delivery Network).",
                "opts": [
                    {
                        "t": "A CDN caches static assets closer to the end user.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "CDN makes images fast.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "It puts files near people.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain CI/CD.",
                "opts": [
                    {
                        "t": "CI/CD automates our testing and deployment pipelines.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "It pushes code automatically.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Continuous thing.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain Serverless.",
                "opts": [
                    {
                        "t": "Serverless abstracts infrastructure management so we focus on code.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "No servers used.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Code runs in cloud.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Explain API Gateway.",
                "opts": [
                    {
                        "t": "An API Gateway routes requests and handles cross-cutting concerns like auth.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Gateway is a door.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "It passes the API.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            }
        ]
    },
    "mentor": {
        "title": "Mentoring",
        "icon": "\ud83d\udc68\u200d\ud83d\udcbb",
        "type": "scenario",
        "desc": "Code reviews for juniors.",
        "templates": [
            {
                "p": "A junior wrote a huge function.",
                "opts": [
                    {
                        "t": "Please extract this logic into a separate method.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Your function is too big.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Cut the code.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A junior forgot unit tests.",
                "opts": [
                    {
                        "t": "Could you add some test coverage for this edge case?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "You forgot tests.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Where is test?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A junior hardcoded a password.",
                "opts": [
                    {
                        "t": "We should move this secret to an environment variable.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Never hardcode passwords!",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Why password here?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A junior used bad variable names.",
                "opts": [
                    {
                        "t": "Let's use more descriptive variable names here for clarity.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Bad names.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "I don't understand vars.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A junior left dead code.",
                "opts": [
                    {
                        "t": "Let's remove this dead code before merging.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Delete this.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Why is this here?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You approve a PR.",
                "opts": [
                    {
                        "t": "This looks good to me, ready to merge.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "I like it.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Merge the code.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A junior didn't handle errors.",
                "opts": [
                    {
                        "t": "We need to add a try-catch block here.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Handle errors.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Code will crash.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A junior used a deprecated function.",
                "opts": [
                    {
                        "t": "This function is deprecated, let's use the newer alternative.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Don't use this.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Old function.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A junior asks for help.",
                "opts": [
                    {
                        "t": "Sure, let's jump on a quick call to debug this together.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "I will fix it for you.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Read the docs.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A junior made a great improvement.",
                "opts": [
                    {
                        "t": "Great catch! This refactor makes the code much cleaner.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Good job.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Nice.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A junior pushed directly to main.",
                "opts": [
                    {
                        "t": "Please remember to always create a feature branch and a PR.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Don't push to main.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "You broke the rules.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A junior ignored linting errors.",
                "opts": [
                    {
                        "t": "Could you fix the formatting issues raised by the linter?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Code is messy.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Fix formatting.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A junior didn't document a complex function.",
                "opts": [
                    {
                        "t": "Let's add a quick JSDoc comment explaining what this does.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Write a comment.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "I don't know what this is.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A junior reinvented the wheel.",
                "opts": [
                    {
                        "t": "We actually have a utility function for this already, let's reuse it.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Don't write this again.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Use the other code.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A junior is stuck for hours.",
                "opts": [
                    {
                        "t": "Don't hesitate to reach out if you're blocked for more than 30 minutes.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Ask for help faster.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Why didn't you ask?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            }
        ]
    },
    "client": {
        "title": "Client Scope",
        "icon": "\ud83d\udc54",
        "type": "scenario",
        "desc": "Push back on crazy deadlines.",
        "templates": [
            {
                "p": "Client wants a huge feature tomorrow.",
                "opts": [
                    {
                        "t": "That feature is out of scope for the current MVP.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "We cannot do it.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "I am not doing that.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client wants 10x speed for free.",
                "opts": [
                    {
                        "t": "There is a strict trade-off between performance and server costs.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Fast means expensive.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "We trade performance.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client wants an impossible date.",
                "opts": [
                    {
                        "t": "To hit that date, we would need to cut some features.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "That date is impossible.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "We no finish.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client keeps changing design.",
                "opts": [
                    {
                        "t": "Let's freeze the requirements so we can proceed.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Stop changing things.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "We are confused.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client asks for a status.",
                "opts": [
                    {
                        "t": "We are currently on track for the milestone delivery.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "We are working.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Code is good.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client wants to skip QA.",
                "opts": [
                    {
                        "t": "Skipping tests introduces too much technical risk.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "No QA is bad.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "We must test.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client wants to use a trendy but wrong technology.",
                "opts": [
                    {
                        "t": "While popular, that stack doesn't fit our specific use case.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "That tech is bad.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "No, we use Java.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client found a minor bug and is panicking.",
                "opts": [
                    {
                        "t": "We have logged the issue and it will be addressed in the next sprint.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Calm down.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "It is just a small bug.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client asks for a feature that contradicts another.",
                "opts": [
                    {
                        "t": "This request conflicts with the previous requirement, let's clarify.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "You contradict yourself.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "That makes no sense.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client asks why an estimate is high.",
                "opts": [
                    {
                        "t": "This feature involves complex backend integrations.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Because it takes long.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Code is hard.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client wants daily status meetings.",
                "opts": [
                    {
                        "t": "We typically provide weekly updates to maintain development velocity.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "No time for meetings.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "We need to code.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client provides vague requirements.",
                "opts": [
                    {
                        "t": "Could we get a more detailed spec before we provide an estimate?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "I don't understand.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "What do you want?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client wants to add one 'quick' thing.",
                "opts": [
                    {
                        "t": "We can add this to the backlog for prioritization.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "No more features.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "We are busy.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client is happy with the release.",
                "opts": [
                    {
                        "t": "Thank you, we're glad the launch was a success.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "You're welcome.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Good.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "Client asks if the system is secure.",
                "opts": [
                    {
                        "t": "We follow industry standard security practices.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Yes, very safe.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Cannot be hacked.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            }
        ]
    },
    "teamwork": {
        "title": "Polite Pushback",
        "icon": "\ud83e\udd1d",
        "type": "scenario",
        "desc": "Professional disagreement.",
        "templates": [
            {
                "p": "You disagree with an architecture idea.",
                "opts": [
                    {
                        "t": "I understand your approach, but I have a security concern.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "You are wrong.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "I don't like it.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You think testing is needed.",
                "opts": [
                    {
                        "t": "That makes sense, however we should definitely test it first.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "No deploying.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "We must test.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A coworker interrupts you.",
                "opts": [
                    {
                        "t": "I'm in the middle of something, can I ping you later?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Go away.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "I am busy.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You need clarification.",
                "opts": [
                    {
                        "t": "Could you elaborate on what you precisely mean by that?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "I don't get it.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "What?",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You suggest a better approach.",
                "opts": [
                    {
                        "t": "What if we considered an alternative approach?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "My idea is better.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Your idea is bad.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You think the sprint is overloaded.",
                "opts": [
                    {
                        "t": "I think we might be overcommitting this sprint.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Too much work.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "We will fail.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A coworker is struggling.",
                "opts": [
                    {
                        "t": "Do you want to pair program on this issue for a bit?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Let me do it.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "You are slow.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You need a coworker to review your PR quickly.",
                "opts": [
                    {
                        "t": "If you have a moment, I'd appreciate a quick review on this PR.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Review this now.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "PR is waiting.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A coworker took credit for your work.",
                "opts": [
                    {
                        "t": "Just to clarify, we actually collaborated on that feature.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "That was my work.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "You stole my credit.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are giving constructive feedback.",
                "opts": [
                    {
                        "t": "I noticed a potential edge case we might want to handle here.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "You missed an error.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Code is buggy.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You want to standardize code style.",
                "opts": [
                    {
                        "t": "Should we align on a standard styling convention for this project?",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Your style is ugly.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Format your code.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "A coworker is speaking over others.",
                "opts": [
                    {
                        "t": "I'd love to hear what Sarah was saying before we move on.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Stop talking.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Let Sarah speak.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You made a mistake and are owning up to it.",
                "opts": [
                    {
                        "t": "That was my oversight, I'll push a fix immediately.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Oops.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "My bad.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are pushing back on a coworker's unrealistic request.",
                "opts": [
                    {
                        "t": "I won't have bandwidth for that until next week.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "I can't do it.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "No time.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            },
            {
                "p": "You are thanking a coworker for their help.",
                "opts": [
                    {
                        "t": "Thanks for jumping in to help debug that, I really appreciate it.",
                        "correct": true,
                        "msg": "Correct!"
                    },
                    {
                        "t": "Thanks.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    },
                    {
                        "t": "Good job.",
                        "correct": false,
                        "msg": "Incorrect/Unprofessional."
                    }
                ]
            }
        ]
    },
    "story": {
        "title": "Incident Report",
        "icon": "\ud83d\udcac",
        "type": "story",
        "desc": "Live chat with the CEO.",
        "stories": [
            {
                "initPrompt": "[CTO]: The main database just went offline.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "I am logging into the AWS console now to check the RDS status.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I check AWS.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Database is offline.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[CTO]: Are we seeing a CPU spike?",
                        "opts": [
                            {
                                "t": "Yes, CPU utilization hit 100% right before the crash.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "CPU is hot.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "It is 100.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[CTO]: Can we failover to the read replica?",
                        "opts": [
                            {
                                "t": "Initiating manual failover now, it should take two minutes.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I do failover.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Yes we can.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[CTO]: Keep me posted on the recovery.",
                        "opts": [
                            {
                                "t": "Failover complete, application is connecting successfully.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "It is back.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Done.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[QA LEAD]: The nightly CI pipeline has been failing for two days.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "Let me pull up the Jenkins logs to see which step failed.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I look at Jenkins.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Pipeline is bad.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[QA LEAD]: It looks like an integration test timeout.",
                        "opts": [
                            {
                                "t": "The mock database might be taking too long to spin up.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Mock DB is slow.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Tests are too long.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[QA LEAD]: Can we bypass it to unblock the team?",
                        "opts": [
                            {
                                "t": "No, bypassing tests introduces too much risk.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "No skip tests.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Tests are important.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[QA LEAD]: When can you have it fixed?",
                        "opts": [
                            {
                                "t": "I'll optimize the teardown script and have a patch in an hour.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "One hour.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "I fix it fast.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[PRODUCT MANAGER]: Customers say the payment page is frozen.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "I'll check the error monitoring dashboard in Datadog.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I look at Datadog.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Payment is frozen.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[PRODUCT MANAGER]: Are we losing transactions?",
                        "opts": [
                            {
                                "t": "Yes, the Stripe API webhooks are returning 401 Unauthorized.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Stripe is bad.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Transactions are failing.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[PRODUCT MANAGER]: Did the API keys expire?",
                        "opts": [
                            {
                                "t": "It looks like someone accidentally rotated the production keys.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Keys are new.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Someone changed keys.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[PRODUCT MANAGER]: Roll them back immediately.",
                        "opts": [
                            {
                                "t": "Rolling back the environment variables and restarting the pods.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I roll back.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Fixing keys now.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[SUPPORT]: A user says their account was deleted accidentally.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "Can you provide their user ID so I can check the audit logs?",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Give me ID.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Who is user?",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SUPPORT]: It's user ID 84920.",
                        "opts": [
                            {
                                "t": "Querying the database... it seems their record was soft-deleted.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "They are soft deleted.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Record is gone.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SUPPORT]: Can we restore it?",
                        "opts": [
                            {
                                "t": "Yes, I just flipped the 'is_deleted' flag back to false.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I un-delete them.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Yes, done.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SUPPORT]: Thank you, I will inform the user.",
                        "opts": [
                            {
                                "t": "No problem, let me know if they still have issues logging in.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Okay.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "You are welcome.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[SECURITY TEAM]: We detected anomalous traffic from a Russian IP block.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "I am reviewing the access logs on the API gateway.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I look at logs.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Traffic is bad.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SECURITY TEAM]: Are they hitting the login endpoint?",
                        "opts": [
                            {
                                "t": "Yes, it looks like a coordinated credential stuffing attack.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "They are hacking us.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "It is credential stuffing.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SECURITY TEAM]: Implement a rate limit immediately.",
                        "opts": [
                            {
                                "t": "I am updating the WAF rules to block those specific subnets.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I block them.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "WAF is updated.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SECURITY TEAM]: Is the traffic dropping?",
                        "opts": [
                            {
                                "t": "Yes, the malicious requests are now returning 403 Forbidden.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Traffic is gone.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "They stopped.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[CTO]: The main database just went offline.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "I am logging into the AWS console now to check the RDS status.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I check AWS.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Database is offline.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[CTO]: Are we seeing a CPU spike?",
                        "opts": [
                            {
                                "t": "Yes, CPU utilization hit 100% right before the crash.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "CPU is hot.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "It is 100.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[CTO]: Can we failover to the read replica?",
                        "opts": [
                            {
                                "t": "Initiating manual failover now, it should take two minutes.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I do failover.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Yes we can.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[CTO]: Keep me posted on the recovery.",
                        "opts": [
                            {
                                "t": "Failover complete, application is connecting successfully.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "It is back.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Done.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[QA LEAD]: The nightly CI pipeline has been failing for two days.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "Let me pull up the Jenkins logs to see which step failed.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I look at Jenkins.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Pipeline is bad.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[QA LEAD]: It looks like an integration test timeout.",
                        "opts": [
                            {
                                "t": "The mock database might be taking too long to spin up.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Mock DB is slow.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Tests are too long.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[QA LEAD]: Can we bypass it to unblock the team?",
                        "opts": [
                            {
                                "t": "No, bypassing tests introduces too much risk.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "No skip tests.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Tests are important.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[QA LEAD]: When can you have it fixed?",
                        "opts": [
                            {
                                "t": "I'll optimize the teardown script and have a patch in an hour.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "One hour.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "I fix it fast.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[PRODUCT MANAGER]: Customers say the payment page is frozen.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "I'll check the error monitoring dashboard in Datadog.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I look at Datadog.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Payment is frozen.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[PRODUCT MANAGER]: Are we losing transactions?",
                        "opts": [
                            {
                                "t": "Yes, the Stripe API webhooks are returning 401 Unauthorized.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Stripe is bad.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Transactions are failing.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[PRODUCT MANAGER]: Did the API keys expire?",
                        "opts": [
                            {
                                "t": "It looks like someone accidentally rotated the production keys.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Keys are new.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Someone changed keys.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[PRODUCT MANAGER]: Roll them back immediately.",
                        "opts": [
                            {
                                "t": "Rolling back the environment variables and restarting the pods.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I roll back.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Fixing keys now.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[SUPPORT]: A user says their account was deleted accidentally.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "Can you provide their user ID so I can check the audit logs?",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Give me ID.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Who is user?",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SUPPORT]: It's user ID 84920.",
                        "opts": [
                            {
                                "t": "Querying the database... it seems their record was soft-deleted.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "They are soft deleted.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Record is gone.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SUPPORT]: Can we restore it?",
                        "opts": [
                            {
                                "t": "Yes, I just flipped the 'is_deleted' flag back to false.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I un-delete them.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Yes, done.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SUPPORT]: Thank you, I will inform the user.",
                        "opts": [
                            {
                                "t": "No problem, let me know if they still have issues logging in.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Okay.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "You are welcome.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[SECURITY TEAM]: We detected anomalous traffic from a Russian IP block.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "I am reviewing the access logs on the API gateway.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I look at logs.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Traffic is bad.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SECURITY TEAM]: Are they hitting the login endpoint?",
                        "opts": [
                            {
                                "t": "Yes, it looks like a coordinated credential stuffing attack.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "They are hacking us.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "It is credential stuffing.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SECURITY TEAM]: Implement a rate limit immediately.",
                        "opts": [
                            {
                                "t": "I am updating the WAF rules to block those specific subnets.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I block them.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "WAF is updated.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SECURITY TEAM]: Is the traffic dropping?",
                        "opts": [
                            {
                                "t": "Yes, the malicious requests are now returning 403 Forbidden.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Traffic is gone.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "They stopped.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[CTO]: The main database just went offline.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "I am logging into the AWS console now to check the RDS status.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I check AWS.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Database is offline.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[CTO]: Are we seeing a CPU spike?",
                        "opts": [
                            {
                                "t": "Yes, CPU utilization hit 100% right before the crash.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "CPU is hot.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "It is 100.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[CTO]: Can we failover to the read replica?",
                        "opts": [
                            {
                                "t": "Initiating manual failover now, it should take two minutes.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I do failover.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Yes we can.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[CTO]: Keep me posted on the recovery.",
                        "opts": [
                            {
                                "t": "Failover complete, application is connecting successfully.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "It is back.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Done.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[QA LEAD]: The nightly CI pipeline has been failing for two days.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "Let me pull up the Jenkins logs to see which step failed.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I look at Jenkins.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Pipeline is bad.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[QA LEAD]: It looks like an integration test timeout.",
                        "opts": [
                            {
                                "t": "The mock database might be taking too long to spin up.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Mock DB is slow.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Tests are too long.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[QA LEAD]: Can we bypass it to unblock the team?",
                        "opts": [
                            {
                                "t": "No, bypassing tests introduces too much risk.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "No skip tests.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Tests are important.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[QA LEAD]: When can you have it fixed?",
                        "opts": [
                            {
                                "t": "I'll optimize the teardown script and have a patch in an hour.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "One hour.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "I fix it fast.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[PRODUCT MANAGER]: Customers say the payment page is frozen.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "I'll check the error monitoring dashboard in Datadog.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I look at Datadog.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Payment is frozen.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[PRODUCT MANAGER]: Are we losing transactions?",
                        "opts": [
                            {
                                "t": "Yes, the Stripe API webhooks are returning 401 Unauthorized.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Stripe is bad.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Transactions are failing.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[PRODUCT MANAGER]: Did the API keys expire?",
                        "opts": [
                            {
                                "t": "It looks like someone accidentally rotated the production keys.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Keys are new.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Someone changed keys.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[PRODUCT MANAGER]: Roll them back immediately.",
                        "opts": [
                            {
                                "t": "Rolling back the environment variables and restarting the pods.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I roll back.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Fixing keys now.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[SUPPORT]: A user says their account was deleted accidentally.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "Can you provide their user ID so I can check the audit logs?",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Give me ID.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Who is user?",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SUPPORT]: It's user ID 84920.",
                        "opts": [
                            {
                                "t": "Querying the database... it seems their record was soft-deleted.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "They are soft deleted.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Record is gone.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SUPPORT]: Can we restore it?",
                        "opts": [
                            {
                                "t": "Yes, I just flipped the 'is_deleted' flag back to false.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I un-delete them.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Yes, done.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SUPPORT]: Thank you, I will inform the user.",
                        "opts": [
                            {
                                "t": "No problem, let me know if they still have issues logging in.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Okay.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "You are welcome.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            },
            {
                "initPrompt": "[SECURITY TEAM]: We detected anomalous traffic from a Russian IP block.",
                "steps": [
                    {
                        "opts": [
                            {
                                "t": "I am reviewing the access logs on the API gateway.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I look at logs.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "Traffic is bad.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SECURITY TEAM]: Are they hitting the login endpoint?",
                        "opts": [
                            {
                                "t": "Yes, it looks like a coordinated credential stuffing attack.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "They are hacking us.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "It is credential stuffing.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SECURITY TEAM]: Implement a rate limit immediately.",
                        "opts": [
                            {
                                "t": "I am updating the WAF rules to block those specific subnets.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "I block them.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "WAF is updated.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    },
                    {
                        "bossResp": "[SECURITY TEAM]: Is the traffic dropping?",
                        "opts": [
                            {
                                "t": "Yes, the malicious requests are now returning 403 Forbidden.",
                                "correct": true,
                                "msg": "Correct!"
                            },
                            {
                                "t": "Traffic is gone.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            },
                            {
                                "t": "They stopped.",
                                "correct": false,
                                "msg": "Incorrect/Unprofessional."
                            }
                        ],
                        "correctIdx": 0
                    }
                ]
            }
        ]
    }
};

        let currentCategory = null; // Global scope
        let currentExercise = null;
        let availableWords = []; let selectedWords = []; let targetSentence = "";
        let currentStoryObj = null; let currentStoryIndex = 0;

        
        let deckIndices = {};
        function getNextExercise(catKey) {
            let cat = generators[catKey];
            let pool = cat.type === 'story' ? cat.stories : cat.templates;
            if (!deckIndices[catKey] || deckIndices[catKey].length === 0) {
                let indices = Array.from({length: pool.length}, (_, i) => i);
                deckIndices[catKey] = shuffle(indices);
            }
            return pool[deckIndices[catKey].pop()];
        }
        
        function renderDashboard() {
            const container = document.getElementById('options-container');
            container.innerHTML = '';
            
            for (let key in generators) {
                const cat = generators[key];
                let currentLvl = Math.floor((progressData[key] || 0) / DRILLS_PER_LEVEL) + 1;
                let prog = (progressData[key] || 0) % DRILLS_PER_LEVEL;

                let card = document.createElement('div');
                card.className = 'dash-card group';
                card.onclick = () => showPath(key);
                card.innerHTML = `
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center">
                            <span class="text-3xl mr-3 group-hover:scale-125 transition-transform">${cat.icon}</span>
                            <div>
                                <h3 class="text-lg font-bold uppercase tracking-widest text-white group-hover:text-white transition-colors" style="color: var(--t-main);">${cat.title}</h3>
                                <p class="text-xs text-slate-400">${cat.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 pt-2 border-t border-[#1E293B] flex justify-between items-center">
                        <span class="text-xs font-bold text-slate-300 uppercase tracking-wider">Level ${currentLvl} <span class="text-slate-500 font-normal">/ 100</span></span>
                        <span class="text-xs font-bold" style="color: var(--t-main);">${prog} / ${DRILLS_PER_LEVEL} XP</span>
                    </div>
                `;
                container.appendChild(card);
            }
            document.getElementById('total-xp-display').innerText = progressData.totalXP;
        }

        function showDashboard() {
            document.getElementById('game-view').classList.add('hidden-element');
            document.getElementById('path-view').classList.add('hidden-element');
            document.getElementById('dashboard-view').classList.remove('hidden-element');
            document.getElementById('back-btn').classList.add('hidden-element');
            document.getElementById('nav-title').innerHTML = '<span class="mr-2 animate-pulse text-white">🔴</span> SOC TERMINAL';
            
            const robot = document.getElementById('robot-mascot');
            robot.innerText = '🤖';
            robot.className = "fixed right-6 bottom-10 text-[5rem] z-50 animate-bob transition-all duration-300 pointer-events-none";
            
            renderDashboard();
        }

        function showPath(categoryKey) {
            currentCategory = categoryKey;
            document.getElementById('dashboard-view').classList.add('hidden-element');
            document.getElementById('path-view').classList.remove('hidden-element');
            document.getElementById('game-view').classList.add('hidden-element');
            document.getElementById('back-btn').classList.remove('hidden-element');
            document.getElementById('back-btn').onclick = showDashboard;
            
            const cat = generators[categoryKey];
            document.getElementById('nav-title').innerText = "MODULE: " + cat.title;
            document.getElementById('path-module-title').innerText = cat.title;

            renderPathLine(categoryKey);
        }

        function renderPathLine(categoryKey) {
            const container = document.getElementById('path-nodes-container');
            container.innerHTML = '<div class="path-line"></div>'; 
            
            let currentLvl = Math.floor((progressData[categoryKey] || 0) / DRILLS_PER_LEVEL) + 1;
            
            for(let i=1; i<=MAX_LEVELS; i++) {
                let div = document.createElement('div');
                div.className = "relative flex flex-col items-center";
                
                let offset = (i % 4 === 1) ? -40 : (i % 4 === 3) ? 40 : 0;
                div.style.transform = `translateX(${offset}px)`;

                let statusClass = "";
                let iconText = i;
                
                if (i < currentLvl) {
                    statusClass = "completed";
                    iconText = "✔️";
                } else if (i === currentLvl) {
                    statusClass = "active";
                    iconText = "▶";
                } else {
                    statusClass = "locked";
                    iconText = "🔒";
                }

                div.innerHTML = `
                    <div class="text-xs font-bold uppercase tracking-widest mb-1 ${i === currentLvl ? 'text-white' : 'text-slate-500'}" ${i===currentLvl ? 'style="color: var(--t-main);"' : ''}>Level ${i}</div>
                    <div class="level-node ${statusClass}" ${i === currentLvl ? `onclick="startGame()"` : ''}>
                        ${iconText}
                    </div>
                `;
                container.appendChild(div);
            }

            setTimeout(() => {
                let activeNode = document.querySelector('.level-node.active');
                if(activeNode) activeNode.scrollIntoView({behavior: "smooth", block: "center"});
            }, 100);
        }

        function startGame() {
            document.getElementById('path-view').classList.add('hidden-element');
            document.getElementById('game-view').classList.remove('hidden-element');
            document.getElementById('back-btn').onclick = () => showPath(currentCategory);
            
            const cat = generators[currentCategory];
            document.getElementById('card-icon').innerText = cat.icon;
            document.getElementById('card-title').innerText = cat.title;

            document.getElementById('mechanic-builder').classList.add('hidden-element');
            document.getElementById('mechanic-scenario').classList.add('hidden-element');
            document.getElementById('mechanic-chat').classList.add('hidden-element');
            document.getElementById('prompt-container').classList.remove('hidden-element');
            document.getElementById('action-check').classList.add('hidden-element');

            if(cat.type === 'builder') {
                document.getElementById('mechanic-builder').classList.remove('hidden-element');
                document.getElementById('action-check').classList.remove('hidden-element');
                loadBuilder(getNextExercise(currentCategory));
            } else if (cat.type === 'scenario') {
                document.getElementById('mechanic-scenario').classList.remove('hidden-element');
                loadScenario(getNextExercise(currentCategory));
            } else if (cat.type === 'story') {
                document.getElementById('prompt-container').classList.add('hidden-element');
                document.getElementById('mechanic-chat').classList.remove('hidden-element');
                currentStoryObj = getNextExercise(currentCategory);
                currentStoryIndex = 0;
                document.getElementById('chat-history').innerHTML = `<div class="chat-bubble-boss font-bold" style="color: var(--t-main);">${currentStoryObj.initPrompt}</div>`;
                loadStoryStep();
            }
            updateGameUI();
        }

        function updateGameUI() {
            let prog = progressData[currentCategory] % DRILLS_PER_LEVEL;
            let percent = (prog / DRILLS_PER_LEVEL) * 100;
            document.getElementById('game-progress-text').innerText = prog;
            document.getElementById('game-progress-bar').style.width = percent + '%';
        }

        function resetGameUI() {
            document.getElementById('feedback-block').classList.add('hidden-element');
            if(generators[currentCategory].type === 'builder') document.getElementById('action-check').classList.remove('hidden-element');
            document.getElementById('action-continue').classList.add('hidden-element');
            document.getElementById('game-card').className = "glass-card p-6 md:p-8 rounded-xl text-center relative transition-colors duration-300";
            
            const robot = document.getElementById('robot-mascot');
            robot.innerText = '🤖';
            robot.className = "fixed right-6 bottom-10 text-[5rem] z-50 animate-bob transition-all duration-300 pointer-events-none";
            document.getElementById('thunder-overlay').classList.remove('animate-thunder');
        }

        function loadBuilder(exerciseData) {
            currentExercise = exerciseData; targetSentence = exerciseData.target;
            document.getElementById('drill-prompt').innerText = exerciseData.p;
            
            let words = targetSentence.split(" ").concat(exerciseData.extras);
            availableWords = shuffle(words).map((word, idx) => ({ id: idx, word: word, used: false }));
            selectedWords = [];
            resetGameUI(); renderWords();
        }

        function renderWords() {
            const bank = document.getElementById('word-bank'); const zone = document.getElementById('answer-zone');
            bank.innerHTML = ''; zone.innerHTML = '';

            selectedWords.forEach(sw => {
                let btn = document.createElement('div'); btn.className = 'word-block'; btn.innerText = sw.word;
                btn.onclick = () => { let aw = selectedWords.splice(selectedWords.findIndex(w => w.id === sw.id), 1)[0]; availableWords.find(w => w.id === aw.id).used = false; renderWords(); };
                zone.appendChild(btn);
            });

            availableWords.forEach(aw => {
                let btn = document.createElement('div'); btn.className = `word-block ${aw.used ? 'used' : ''}`; btn.innerText = aw.word;
                if (!aw.used) btn.onclick = () => { let awd = availableWords.find(w => w.id === aw.id); awd.used = true; selectedWords.push(awd); renderWords(); };
                bank.appendChild(btn);
            });

            let btnCheck = document.getElementById('btn-check');
            if (selectedWords.length > 0) { btnCheck.classList.remove('opacity-50', 'cursor-not-allowed'); btnCheck.disabled = false; } 
            else { btnCheck.classList.add('opacity-50', 'cursor-not-allowed'); btnCheck.disabled = true; }
        }

        function checkBuilderAnswer() {
            let isCorrect = selectedWords.map(w => w.word).join(" ").toLowerCase() === targetSentence.toLowerCase();
            showFeedback(isCorrect, isCorrect ? "Syntax Verified." : "Syntax Error.", isCorrect ? "Sentence built correctly." : `Expected Output: "${targetSentence}"`, () => loadBuilder(currentExercise));
        }

        function loadScenario(exerciseData) {
            currentExercise = exerciseData;
            document.getElementById('drill-prompt').innerText = exerciseData.p;
            
            let opts = shuffle([...exerciseData.opts]);
            for(let i=0; i<3; i++) {
                let btn = document.getElementById(`btn-opt-${i}`);
                btn.innerText = opts[i].t;
                btn.className = "btn-scenario w-full p-4 text-left text-white font-sans rounded";
                btn.onclick = () => checkScenarioAnswer(opts[i]);
            }
            resetGameUI();
        }

        function checkScenarioAnswer(selectedOpt) {
            showFeedback(selectedOpt.correct, selectedOpt.correct ? "Response Accepted." : "Response Denied.", selectedOpt.msg, () => loadScenario(currentExercise));
        }

        function loadStoryStep() {
            let step = currentStoryObj.steps[currentStoryIndex];
            let optsDiv = document.getElementById('chat-options');
            optsDiv.innerHTML = '';
            
            let shuffledOpts = shuffle(step.opts.map((txt, idx) => ({txt, isCorrect: idx === step.correctIdx})));
            
            shuffledOpts.forEach(opt => {
                let btn = document.createElement('button');
                btn.className = "btn-scenario w-full p-3 text-left text-white font-sans rounded text-sm";
                btn.innerText = opt.txt;
                btn.onclick = () => {
                    optsDiv.innerHTML = ''; // FIX: Prevent rapid-click double execution race condition
                    if(opt.isCorrect) {
                        document.getElementById('chat-history').innerHTML += `<div class="chat-bubble-user animate-pop">${opt.txt}</div>`;
                        currentStoryIndex++;
                        if(currentStoryIndex < currentStoryObj.steps.length) {
                            setTimeout(() => {
                                document.getElementById('chat-history').innerHTML += `<div class="chat-bubble-boss font-bold animate-pop" style="color: var(--t-main);">${currentStoryObj.steps[currentStoryIndex].bossResp}</div>`;
                                document.getElementById('mechanic-chat').scrollTop = document.getElementById('mechanic-chat').scrollHeight;
                                loadStoryStep();
                            }, 600);
                        } else {
                            setTimeout(() => showFeedback(true, "Incident Resolved.", "You successfully handled the incident report.", null), 600);
                        }
                    } else {
                        btn.className = "w-full p-3 text-left text-white font-sans rounded text-sm bg-red-900 border-red-500";
                        optsDiv.appendChild(btn); // Re-append only the wrong button for visual feedback
                        setTimeout(() => showFeedback(false, "Communication Failure.", "That was not the appropriate professional response.", () => {
                            document.getElementById('chat-history').innerHTML = `<div class="chat-bubble-boss font-bold" style="color: var(--t-main);">${currentStoryObj.initPrompt}</div>`;
                            currentStoryIndex = 0;
                            loadStoryStep();
                        }), 600);
                    }
                };
                optsDiv.appendChild(btn);
            });
            document.getElementById('mechanic-chat').scrollTop = document.getElementById('mechanic-chat').scrollHeight;
            resetGameUI();
        }

        function showFeedback(isCorrect, titleTxt, msgTxt, retryFunc) {
            const feedback = document.getElementById('feedback-block');
            document.getElementById('action-check').classList.add('hidden-element');
            
            if(generators[currentCategory].type === 'scenario') document.getElementById('mechanic-scenario').classList.add('hidden-element');
            if(generators[currentCategory].type === 'story') document.getElementById('chat-options').innerHTML = '';

            document.getElementById('action-continue').classList.remove('hidden-element');
            feedback.classList.remove('hidden-element');

            let btnContinue = document.getElementById('btn-continue');
            const robot = document.getElementById('robot-mascot');

            if (isCorrect) {
                document.getElementById('game-card').classList.add('animate-pop');
                document.getElementById('game-card').style.borderColor = "var(--t-main)";
                feedback.style.backgroundColor = "var(--t-main-dark)";
                feedback.style.borderColor = "var(--t-main)";
                feedback.style.boxShadow = "0 0 20px var(--t-main-glow)";
                
                document.getElementById('feedback-title').innerHTML = `<span style="color: var(--t-main);">${titleTxt}</span>`;
                document.getElementById('feedback-msg').innerText = msgTxt;
                btnContinue.style.backgroundColor = "var(--t-main)";
                btnContinue.onclick = () => awardXPAndNext();
                
                robot.innerText = '🦾🤖⚡';
                robot.className = "fixed right-6 bottom-10 text-[6rem] z-50 animate-robotHappy transition-all duration-300 pointer-events-none";
                robot.style.filter = "drop-shadow(0 0 15px var(--t-main))";
                
                let thunder = document.getElementById('thunder-overlay');
                thunder.classList.remove('animate-thunder'); void thunder.offsetWidth; thunder.classList.add('animate-thunder');
            } else {
                document.getElementById('game-card').classList.add('animate-shake');
                document.getElementById('game-card').style.borderColor = "#EF4444";
                feedback.style.backgroundColor = "#7F1D1D";
                feedback.style.borderColor = "#EF4444";
                feedback.style.boxShadow = "0 0 20px rgba(239,68,68,0.5)";
                
                document.getElementById('feedback-title').innerHTML = `<span class='text-red-500'>${titleTxt}</span>`;
                document.getElementById('feedback-msg').innerText = msgTxt;
                btnContinue.style.backgroundColor = "#EF4444";
                
                robot.innerText = '💥🤖';
                robot.className = "fixed right-6 bottom-10 text-[5rem] z-50 animate-robotFall pointer-events-none";
                robot.style.filter = "none";

                btnContinue.onclick = () => {
                    document.getElementById('game-card').classList.remove('animate-shake');
                    if(generators[currentCategory].type === 'scenario') document.getElementById('mechanic-scenario').classList.remove('hidden-element');
                    retryFunc();
                };
            }
        }

        function awardXPAndNext() {
            progressData[currentCategory] = (progressData[currentCategory] || 0) + 1;
            progressData.totalXP += (generators[currentCategory].type === 'story') ? 50 : 10;
            localStorage.setItem('techEnglishFinal_v6', JSON.stringify(progressData));
            
            if(progressData[currentCategory] % DRILLS_PER_LEVEL === 0 && progressData[currentCategory] > 0) {
                alert(`🎉 SYSTEM UPGRADE: You reached Level ${Math.floor(progressData[currentCategory] / DRILLS_PER_LEVEL) + 1} in ${generators[currentCategory].title}! 🎉`);
                showPath(currentCategory); 
                return;
            }
            updateGameUI();
            
            let cat = generators[currentCategory];
            if(cat.type === 'story') {
                document.getElementById('chat-history').innerHTML = '';
                currentStoryObj = getNextExercise(currentCategory); currentStoryIndex = 0;
                document.getElementById('chat-history').innerHTML = `<div class="chat-bubble-boss font-bold" style="color: var(--t-main);">${currentStoryObj.initPrompt}</div>`;
                loadStoryStep();
            } else if (cat.type === 'scenario') {
                document.getElementById('mechanic-scenario').classList.remove('hidden-element');
                loadScenario(getNextExercise(currentCategory));
            } else {
                loadBuilder(getNextExercise(currentCategory));
            }
        }

        renderDashboard();
    