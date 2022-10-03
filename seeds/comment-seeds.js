const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'This is Fantastic!',
        user_id: 6,
        post_id: 1
      },
      {
        comment_text: 'Really cool, super enjoyed this article :)',
        user_id: 6,
        post_id: 8
      },
      {
        comment_text: 'I know this guy',
        user_id: 3,
        post_id: 10
      },
      {
        comment_text: 'Not as innovative as some of the other technologies I\'ve seen, but I can appreciate the simplicity of it.',
        user_id: 3,
        post_id: 4
      },
      {
        comment_text: 'Some great information, really enjoyed the read!',
        user_id: 7,
        post_id: 5
      },
      {
        comment_text: 'Awesome post, keep it up!',
        user_id: 1,
        post_id: 16
      },
      {
        comment_text: 'Not that impressed tbh.',
        user_id: 6,
        post_id: 7
      },
      {
        comment_text: 'This is fine, everything\'s fine :|.',
        user_id: 7,
        post_id: 4
      },
      {
        comment_text: 'Stoked for this update!',
        user_id: 6,
        post_id: 12
      },
      {
        comment_text: 'Meh...',
        user_id: 6,
        post_id: 3
      },
      {
        comment_text: 'I don\'t think your giving these guys enough credit, a ton of work went into this project. Just my opinion.',
        user_id: 3,
        post_id: 14
      },
      {
        comment_text: 'Super impressive!!!',
        user_id: 5,
        post_id: 4
      },
      {
        comment_text: 'I\'ve seen better',
        user_id: 4,
        post_id: 9
      },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;