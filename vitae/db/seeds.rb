# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# users = User.create!([{username: 'Yolea', password: '123456'}])
# p `#{users.count} users created.`

# posts = Post.create!([{content: 'I love Saint Albans', image_url: 'https://imgur.com/gGiEmYe', user_id: 1}])
# p `#{posts.count} users created.`

comments = Post.create!([{content: 'I love Saint Albans', image_url: 'https://imgur.com/gGiEmYe', user_id: 1}])
p `#{posts.count} users created.`