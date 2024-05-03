const axios = require('axios');

module.exports = async function fetchStravaInfo(){

    try {
        const request = axios.get('https://www.strava.com/api/v3/athlete/113045232/stats', {
            headers: {
                'Authorization': `Bearer ${process.env.STRAVA_ACCESS_TOKEN}`
            }
        });
        const res = await request.data;
        console.log(res);
    } catch(err){
        console.log(err);
    }
    
    //return res;

    // const defaultclient = strava.ApiClient.instance;
    // // Configure OAuth2 access token for authorization: strava_oauth
    // const strava_oauth = defaultClient.authentications['strava_oauth'];
    // strava_oauth.accessToken = process.env.STRAVA_ACCESS_TOKEN;

    // const api = new StravaApiV3.ActivitiesApi()

    // const id = 126021;

    // const opts = {
    //   includeAllEfforts: true,
    //   includeManualEfforts: true,
    // };

    // const callback = function(error, data, response) {
    //     if (error) {
    //         console.error(error);
    //       } else {
    //         console.log('API called successfully. Returned data: ' + data);
    //       }
    // }

    // return api.getActivityById(id, opts, callback);



}