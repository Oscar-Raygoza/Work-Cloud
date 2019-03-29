const Stats = require('./stats');
const Comments = require('./comments');
const Publications = require('./publications');

module.exports = async viewModel=> {

    const results = await Promise.all([
        Stats(),
        Publications.popular(),
        Comments.newWest()
    ]);
    viewModel.slidebar = {
        stats: results[0],
        popular: results[1],
        comments: results[2]
    }

    return viewModel;
}