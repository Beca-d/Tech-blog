const { Post } = require('../models');

const postdata = [
    {
        title: 'How PandaDoc API Beats the Competition',
        post_content: 'https://medium.com/the-pandadoc-tech-blog/how-pandadoc-api-beats-the-competition-92a3ff96809',
        user_id: 10
      },
      {
        title: 'Terrain Relative Navigation: Touchdown on Rocky New Worlds',
        post_content: 'https://www.nasa.gov/directorates/spacetech/Terrain_Relative_Navigation',
        user_id: 8
      },
      {
        title: 'Upgrading Data Warehouse Infrastructure at AirBnB',
        post_content: 'https://medium.com/airbnb-engineering/upgrading-data-warehouse-infrastructure-at-airbnb-a4e18f09b6d5',
        user_id: 1
      },
      {
        title: 'Data Mesh - A Data Movement and Processing Platform @Netflix',
        post_content: 'https://netflixtechblog.com/data-mesh-a-data-movement-and-processing-platform-netflix-1288bcab2873',
        user_id: 4
      },
      {
        title: 'CSS: autofill.',
        post_content: 'https://davidwalsh.name/css-autofill',
        user_id: 7
      },
      {
        title: 'Set Brave as Default Browser from CMD Line',
        post_content: 'https://davidwalsh.name/brave-default-browser',
        user_id: 4
      },
      {
        title: 'Random Picking without Repetition.',
        post_content: 'https://thedailywtf.com/articles/top-slots',
        user_id: 1
      },
      {
        title: 'Developer Salaries in 2021',
        post_content: 'https://cult.honeypot.io/developer-salary-report-2021',
        user_id: 1
      },
      {
        title: 'Green Technologies to Save the World',
        post_content: 'https://cult.honeypot.io/reads/7-green-technologies-we-need-to-save-the-world',
        user_id: 9
      },
      {
        title: '102 Best Barcelona Startups.',
        post_content: 'https://cult.honeypot.io/reads/the-102-best-barcelona-startups-in-2022',
        user_id: 5
      },
      {
        title: 'Reduct Storage Client Update.',
        post_content: 'https://dev.to/reduct-storage/reduct-storage-client-sdk-for-javascript-100-was-released-43p6',
        user_id: 3
      },
      {
        title: 'Guide to Hacktoberfest!',
        post_content: 'https://dev.to/merico/hacktoberfest-2022-guide-for-devlake-and-devstream-5pi',
        user_id: 10
      },
      {
        title: 'a Tarot Rolodex?',
        post_content: 'https://zachgoldstein.engineering/posts/mechatarot/mechatarot/?mc_cid=560f0072fd&mc_eid=4b7466b9c7',
        user_id: 8
      },
      {
        title: 'Slow Passengers First - Airplane Boarding Policies.',
        post_content: 'https://journals.aps.org/pre/pdf/10.1103/PhysRevE.100.062313',
        user_id: 3
      },
      {
        title: 'The Bucket Argument.',
        post_content: 'https://en.wikipedia.org/wiki/Bucket_argument',
        user_id: 3
      },
      {
        title: 'Plant Machete!',
        post_content: 'https://www.dwbowen.com/plant-machete',
        user_id: 7
      },
      {
        title: 'Dragonfly Drone Sent to Saturn\'s Moon!',
        post_content: 'https://www.techeblog.com/nasa-nuclear-dragonfly-drone-saturn-titan/',
        user_id: 4
      },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;