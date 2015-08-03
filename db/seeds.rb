require 'faker'
10.times do
  FuzzyBunny.create name: Faker::Name.name,
                    url: "https://myliteraryquest.files.wordpress.com/2013/06/cute-bunny-015.jpg",
                    cuteness: rand(10)
end

10.times do
  FuzzyBunny.create name: Faker::Name.name,
                    url: "https://myliteraryquest.files.wordpress.com/2011/04/12426-bigthumbnail.jpg",
                    cuteness: rand(10)
end

10.times do
  FuzzyBunny.create name: Faker::Name.name,
                    url: "https://s-media-cache-ak0.pinimg.com/236x/8c/a6/76/8ca676c1cf82cb50f4eaebae9af83d7b.jpg",
                    cuteness: rand(10)
end

10.times do
  FuzzyBunny.create name: Faker::Name.name,
                    url: "http://cute-n-tiny.com/wp-content/uploads/2009/11/cute_tiny-bunny-400x544.jpg",
                    cuteness: rand(10)
end