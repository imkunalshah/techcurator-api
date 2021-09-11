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
                client_email: process.env.CLIENT_EMAIL,
                private_key: process.env.CLIENT_SECRET
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