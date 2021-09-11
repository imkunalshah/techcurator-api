const { GoogleSpreadsheet } = require('google-spreadsheet');
const questionSchema = require("../models/questions");

var fetchedRows = [];
var cnt = 0;
// console.log(doc.title);

module.exports = {
    fetchQuestions: async (req, res, next) => {

        console.log('Inside - getRecord');
        try {
            const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
            await doc.useServiceAccountAuth({
                client_email: 'sheets@tech-curators-api.iam.gserviceaccount.com',
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQClk0aqyk5GQqII\nGA8LIXvA4C6F7qiwOws9BJzLsP7+Xaw7ye9ryF4WWXH7GxdOgbrz1KPUsoy2Efr5\npETxk2JqCvkb5rbFp3o3btv/iKOE8tPN7O+fffzBKVeEGi5yAWDMGAXIL1u+73x4\nWUInHJpZH0k+Rkm7/PlGXCqeNffym7LV4uoKRiTMRMaCDH7eHG5o/eEy2g3vmjbC\n3wnvNu1NdrXzxXIcLpNGpg67KhvzFoUV1gdpImC0u/s54l/b9Vn38jVRA66tH+Cy\niLug3R+E/joP9WzyJHMlk7Cf3Wy5uzqq2fs9L4T4iy8w71CTlETuI55GZdd/Oz6X\nuwj4ncebAgMBAAECggEATDhc6phQqiVYY7N3kV8rkeFhaUQxIVc82Cz8ZQQojj3e\n4HMYJRzKuy0XvEl/VCOCRWaYuHwtLE9gonUNS8vWHQzKGh79+kUbjNMasSpcZAJI\noF42/MvJg74dTHGk+dRKlAlm9/1dFas3OEuWmVygbPBrDiDbJo/QzKP29nfPmT13\noVphR5Yys/47Xa8Gaztz2TaQ2qT1DoK+AXMTP1rop6OuR3zGBxKFbxhEP498c9w2\nVKv7UqWz5njQUsSR5bJ+0TTSf1+Q8zoQd1ccc+rwwgOmissmqCcFmSavVKctu67T\np96PwR2J7Fgd7ewr/kHPyyy7Rx7MsXxOyjroUMzj4QKBgQDZlX5/+amNtva0b4Fe\nE6fgbboXxWLOOhIx4aHgTc/wYwEcPyvT/fgi5AVnXcCN7Z0+GwwF8zgfY9G+rv0x\nbB/nJ5HQUbv6Oer9j0n0DaGyyW4DpmoxlMzfU6ZqiQFiMrcOZd41VGqRtXIDzT90\nMxxQKO1UW+Szbk9w4YLiixN4sQKBgQDCzw80qmzDZJ6pwrD5AiwhQlyONrotQfFw\nXUv0mcoZT/GIRCqUgVYCZij6umyrOcOxmfDpcx+DoQeBPIpudTotBeOtO5yXZbbn\nuZQYSgywbj1dE7t346u42XN8P+Qok2rafQ3VX2UDMuyvnn2nFYR9JDYssXBIHmM8\nLixicKcYCwKBgFbJ34xybGQ/j8ZHF+YLlxHZErp6nD/AQBOveV88Cm5LP10iAXxs\nuDZKl7E0XyL9nZPxO+l/q2ox6a7So+G7zDnquanLgFx+D7KWHhx/93iWChDgp0kh\nnlqSRjYGcgvWSNgwX+MLyfpW0qSbkOzrmiaLPKdChEXiAUP4X7m3WcvxAoGALp4k\nMmMyIdP7T/6CISSO8OqTgYjBJsFoCI6a9Y6z2TjTQNunIOCOd4aA+fcQuCzbkq2X\nBBaDjRlE1X1qVyKAaHPHVxYz09sIWQ2EzgcyYCoRTyvAqeD2oAaRZ0NW0wrsABr6\n63unjYtrLl+MDCbPDK9Us39GsktrTeRyxJ/WrJ8CgYBDL3W38qliS+xBRLeTsflD\nhRbzR2METYRE/3cc/KjSVkvPuOzYcP7+IyQs52Oo8sR3mygRlvqXB1nQDm0QRzJS\nN5vFj7aFO7P3sJqwz2n1eZpHSItQUWITjdGaaFdJBLfwf64DEqGYFEkdv0c8BwaH\njsbsfF8W0Wd2YfMy3Wwuaw==\n-----END PRIVATE KEY-----\n",
            });
            await doc.loadInfo();
            // loads document properties and worksheets
            // console.log(doc.title);
            const sheet = doc.sheetsByIndex[0] // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
            console.log(sheet.title);
            console.log(sheet.rowCount);
            const rows = await sheet.getRows({ offset: 0 });
            console.log(rows);
            for (var i = 0; i < rows.length; i++) {
                var question = new Object();
                const row = rows[i];
                question.topic = row.Topic;
                question.difficulty_level = row['Difficulty Level'];
                question.question = row.Question;
                question.option_1 = row['Option 1'];
                question.option_2 = row['Option 2'];
                question.option_3 = row['Option 3'];
                question.option_4 = row['Option 4'];
                question.correct_option = row['Correct Option'];
                const newData = JSON.stringify(question);
                const body = JSON.parse(newData);
                fetchedRows[cnt] = body;
                cnt++;
                // console.log(body);
            }

            await questionSchema.insertMany(fetchedRows, (err, result) => {
                if (err) {
                    next();
                    return console.log(err);
                }
                console.log('added to db :' + result);
                next();
            });
        } catch (e) {
            console.log("err :" + e);
        }
    },
    getQuestions: async (req, res) => {
        try {
            const data = await questionSchema.find();
            res.status(200).json({
                isSuccessful: true,
                message: "Questions fetched successfully",
                data: data
            });
        } catch (err) {
            res.status(400).json({
                isSuccessful: false,
                message: err.message,
                data: null
            });
        }
    }

}