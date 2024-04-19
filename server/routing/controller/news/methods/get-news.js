
const NewsModel = require('./../../../../../database/models/news-model');

async function get_all_news (request , response , next) {

    
    const allnews = await NewsModel.find({date_to_post:{$lte: '2026-10-26'}})/* .sort({dat}) */;

    console.log({allnews});

    response.status(200).json({status:true , payload:allnews});
}

module.exports = get_all_news ;