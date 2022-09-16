const { Comment } = require('../models');

const commentdata = [
    {
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        user_id:2,
        post_id:6
    },
    {
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        user_id:4,
        post_id:2
    },
    {
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        user_id:6,
        post_id:2
    },
    {
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Porttitor rhoncus dolor purus non. Non tellus orci ac auctor augue mauris augue neque gravida. Facilisis leo vel fringilla est ullamcorper. Ultrices sagittis orci a scelerisque purus. Mi in nulla posuere sollicitudin aliquam ultrices. Nec dui nunc mattis enim ut. Cras sed felis eget velit aliquet sagittis. Blandit cursus risus at ultrices mi tempus. Elit ullamcorper dignissim cras tincidunt. Semper quis lectus nulla at volutpat.",
        user_id:4,
        post_id:2
    },
    
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;