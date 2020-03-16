var localhost = {
    env: 'localhost',
    port: 5001,
    db: {
        mysql: {
            host: "172.28.128.3",
            port: 3306,
            database: "logisticsv1",
            user: "root",
            password: "root",
            dialect: "mysql",
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            define: {
                timestamps: false
            }
        },
        mysql_core: {
            host: "172.28.128.3",
            port: 3306,
            database: "symfony",
            user: "root",
            password: "root",
            dialect: "mysql",
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            define: {
                timestamps: false
            }
        },
        mysql_logisticsV2: {
            host: "172.28.128.3",
            port: 3306,
            database: "logisticsv2",
            user: "root",
            password: "root",
            dialect: "mysql",
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            define: {
                timestamps: false
            }
        }
    },
    rootDirectory: 'src',
    statementOfAccountStatus: {
        SENT: 1,        
        TO_SEND: 2,
        PAYMENT_PROBLEM: 3,
        STATEMENTOFACCOUNT_PROBLEM: 4,        
        PAID: 5        
    },
    agency: {
        transexpress: 'trans',
        c807: 'c807'
    },
    account_manager_api: 'https://sandbox.pidelorapido.com:9001/api',
    token_time: '1hr'
};

export { localhost };