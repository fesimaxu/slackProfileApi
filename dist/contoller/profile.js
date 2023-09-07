"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileDetails = void 0;
const getProfileDetails = (req, res, next) => {
    const { slack_name } = req.query;
    const { track } = req.query;
    //a Date object representing the current date and time
    const currentDateTime = new Date();
    console.log("currentDate", currentDateTime);
    // day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = currentDateTime.getDay();
    //an array to map the numerical day of the week to its name
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    //the name of the day of the week
    const dayName = daysOfWeek[dayOfWeek];
    const slackProfile = {
        slack_name: slack_name,
        current_day: dayName,
        utc_time: currentDateTime,
        track: track,
        github_file_url: `https://github.com/fesimaxu/slackProfileApi/blob/main/src/app.ts`,
        github_repo_url: `https://github.com/fesimaxu/slackProfileApi`,
        status_code: 200,
    };
    try {
        res.send(slackProfile);
    }
    catch (error) {
        next(error);
    }
};
exports.getProfileDetails = getProfileDetails;
