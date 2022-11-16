puts "Seeding users..."
User.create(username: "test_admin", password: "password", is_admin: true, is_member: false )
User.create(username: "test_member", password: "password", is_admin: false, is_member: true)
User.create(username: "test_visitor", password: "password", is_admin: false, is_member: false)

puts "Seeding events..."
Event.create(name: "Main Garden Tour", date: "11/11/22", start_time: "11:00 AM", end_time: "3:00 PM", is_public: true, recurring_days: "Monday, Wednesday, Friday", spots_left: 100, description: "Public tour through the lush gardens of Ashton Botanical Garden with a special walk through our famed cherry blossom garden", image: "https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FyZGVufGVufDB8fDB8fA%3D%3D&w=1000&q=80")
Event.create(name: "Regional Tour: African Savanna", date: "11/20/22", start_time: "11:00 AM", end_time: "3:00 PM", is_public: true, recurring_days: "", description: "A guided tour centered around the resilient plantlife from the dry savanna climate of Zimbabwe. Reserve your spot today to learn about all of the advanced survival traits the plants developed to adapt to their surroundings!", image: "https://www.ourbreathingplanet.com/wp-content/uploads/2018/07/3-54.png")
Event.create(name: "Regional Tour: Amazon Rainforest", date: "11/30/22", start_time: "11:00 AM", end_time: "3:00 PM", is_public: true, recurring_days: "", description:  "Learn about some of the fascinating flora of the Amazon Rainforest!", image: "https://assets-global.website-files.com/5ea992a5dcf9009f68802a74/5ea992a5dcf9002a8c803680_passion-fruit-flower-copy.jpeg")
Event.create(name: "'Young Botanist' Club", date: "12/1/22", start_time: "9:00 AM", end_time: "12:00 PM", is_public: true, recurring_days: "Friday", description: "Your love for nature starts here! Discover incredible opportunities to learn about botany, with guidance from our research department (ages 10-16).", image: "https://www.gannett-cdn.com/presto/2021/05/20/PMJS/0d84d2cf-dab9-40f9-8b7a-d10f9a791936-MJS_Teens_grow_01044.JPG")
Event.create(name: "Christmas Garden Lighting", date: "12/21/22", start_time: "5:00 PM", end_time: "6:00 PM", is_public: true, recurring_days: "", description: "Bring your family to see our dazzling annual Christmas tree light show!", image: "https://i.pinimg.com/564x/b4/c2/59/b4c2597fca7a828fdb84ec37b3dd4999.jpg")


puts "Seeding requests..."
RequestedEvent.create(name: "Wedding", date: "11/18/22", start_time: "12:00 PM", end_time: "3:00 PM", is_public: false, spots_left: nil, description: "Robert Smith and Martha's wedding.", user_id: 3)
RequestedEvent.create(name: "Birthday", date: "12/2/22", start_time: "9:00 AM", end_time: "11:00 PM", is_public: false, spots_left: nil, description: "Nika's 10th birthday party", user_id: 3)
RequestedEvent.create(name: "Baby shower", date: "1/18/22", start_time: "10:00 AM", end_time: "1:00 PM", is_public: false, spots_left: nil, description: "Julia's babyshower", user_id: 3)


puts "Seeding reservations..."
Reservation.create(user_id: 3, event_id: 1)

puts "Seeding compelete!"