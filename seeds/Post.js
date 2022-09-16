const { Post } = require('../models');

const postdata = [
    {
        title:"Untitled",
        content:"Were I to send this letter, you would feel the depth of my want pouring from these pages like the sulfur-tinged water from a hot spring It’s undeniable.",
        user_id:2,
    },
    {
        title:"Pulse",
        content:"My pulse pounds in my throat I swallow convulsively, at the mere thought of our union. What would you do with this knowledge?",
        user_id:4,
    },
    {
        title:"In the Road",
        content:"I did not have to ask –I haalready heard the news-.",
        user_id:4,
    },
    {
        title:"The city",
        content:"Mud splatters my bare feet Stars shine in darkened skies As I walk to where we used to meet  The night echoes some waif’s cries.	",
        user_id:4,
    },
    {
        title:"it turns out that vaccines actually cause you to think about death",
        content:"Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye.	",
        user_id:6,
    },
    {
        title:"How it Works",
        content:"Each Monday, a new poem is published to the blog, including a brief bio of the poet behind it and their socials. ",
        user_id:6,
    } 
    
    
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;