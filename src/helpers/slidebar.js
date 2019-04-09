const Stats = require('./stats');
const Publications = require('./publications');
const Comments = require('./comments');
const Groups = require('./groups');

module.exports = async viewModel=> {

    const results = await Promise.all([
        Stats(),
        Publications.popular(),
        Comments.newest(),
        Groups.newGroups()
    ]);
    viewModel.slidebar = {
        stats: results[0],
        popular: results[1],
        comments: results[2],
        groups: results[3]
    }

    return viewModel;
}