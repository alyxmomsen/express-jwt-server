const NewsModel = require("./../../../../../database/models/news-model");

async function update_one_post(request, response, next) {
  
    const requestbody = request.body ;

    const {postid , title , body} = requestbody ;

    if(!postid) return response.status(403).json('no post id');

    const updated_result = await NewsModel.findByIdAndUpdate({_id:postid} , {title , body});

    response.status(200).json({body: requestbody});
}

module.exports = update_one_post;
