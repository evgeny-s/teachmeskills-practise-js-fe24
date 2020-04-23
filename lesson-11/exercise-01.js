/*
  Create brand new ReactJS application with `create-react-app` command.
  Create Github application.
  Top half of the page should consist of input for github_id and Submit button.
  It should fetch data from github api about this user: https://api.github.com/users/{userId}

1.
  Bottom half of the page should consist of several tabs (User React Router):
  User (https://api.github.com/users/{userId}) - user info with data: avatar_url, name, location, bio, url
  Repositories (https://api.github.com/users/{userId}/repos) - list of repositories with metadata: id, name, url, description
  Gist (https://api.github.com/users/{userId}/gists) - list of gists with metadata: id, name, url, description
  Subscriptions (https://api.github.com/users/{userId}/subscriptions) - list of subscriptions with metadata: id, name, url, description

2.
  Add Nested Routes in order to show info about specific repository/gist/subscription
 */
