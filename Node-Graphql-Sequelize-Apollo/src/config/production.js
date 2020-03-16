var production = {
    env: 'production',
    port: 3001,
    db: {
        mysql: {
            host: "104.197.119.136",
            port: 3306,
            database: "logistics_prd",
            user: "logisticsuser",
            password: "prL0g1st1cs502",
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
            host: "50.97.84.178",
            port: 3306,
            database: "pidelorapido_f3073",
            user: "admin2user",
            password: "q8Vu57XKcEmh5tLC",
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
            host: "104.197.119.136",
            port: 3306,
            database: "LogisticsProdV2",
            user: "logisticsuser",
            password: "prL0g1st1cs502",
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
    rootDirectory: 'dist',
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
    account_manager_api: 'http://ws.pidelorapido.com:3001/logistics/api/v1',
    token_time: '1hr'
};

export { production };