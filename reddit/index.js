// Write a command that fetches and saves reddit posts on /r/programming in the form of JSON file

const axios = require('axios');
const fs = require('fs');

function getPosts(callback) {
  axios.get('https://www.reddit.com/r/programming.json')
    .then(res => {
      const posts = [];
      res.data.data.children.forEach(element => {
        let post = {
          title: element.data.title
        }
        posts.push(post)
      });
      callback(posts);
    }).catch(err => console.warn(err));
}

function exportJson(posts) {
  const data = {
    data: posts
  }
  const postsJson = JSON.stringify(data)
  fs.appendFile('posts.json', postsJson, (err) => {
    console.log('Success')
  })
}

getPosts(exportJson);