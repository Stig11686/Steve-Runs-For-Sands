const axios = require('axios');
const appID = process.env.JUST_GIVING_APP_ID;

module.exports = async function fetchJustGivingData () {
    try {
        const res = await axios.get(`https://api.justgiving.com/${appID}/v1/fundraising/pages/Steve-Marks`);
        const {fundraisingTarget, totalRaisedPercentageOfFundraisingTarget, totalRaisedOnline } = res.data;
        const data = {
            fundraisingTarget,
            totalRaisedPercentageOfFundraisingTarget,
            totalRaisedOnline
        };

        return data;
    } catch(err){
        return err;
    }
} 


