puts "Seeding users..."
User.create(username: "test_admin", password: "password", is_admin: true, is_member: false )
User.create(username: "test_member", password: "password", is_admin: false, is_member: true)
User.create(username: "test_visitor", password: "password", is_admin: false, is_member: false)

puts "Seeding events..."
Event.create(name: "Main garden tour", date: "11/11/22", start_time: "11:00 AM", end_time: "3:00 PM", is_public: true, recurring_days: "Monday, Wednesday, Friday", spots_left: 100, description: "Public tour through the lush gardens of Ashton Botanical Garden with a special walk through our famed cherry blossom garden")
Event.create(name: "Regional tour: African Savanna", date: "11/20/22", start_time: "11:00 AM", end_time: "3:00 PM", is_public: true, recurring_days: "")
Event.create(name: "Regional tour: Amazon rainforest", date: "11/30/22", start_time: "11:00 AM", end_time: "3:00 PM", is_public: true, recurring_days: "")
Event.create(name: "'Young Botanist' club", date: "12/1/22", start_time: "9:00 AM", end_time: "12:00 PM", is_public: true, recurring_days: "Friday")
Event.create(name: "Christmas garden lighting", date: "12/21/22", start_time: "5:00 PM", end_time: "6:00 PM", is_public: true, recurring_days: "")


puts "Seeding requests..."
RequestedEvent.create(name: "Wedding", date: "11/18/22", start_time: "12:00 PM", end_time: "3:00 PM", is_public: false, spots_left: nil, description: "Robert Smith and Martha's wedding.", user_id: 3)
RequestedEvent.create(name: "Birthday", date: "12/2/22", start_time: "9:00 AM", end_time: "11:00 PM", is_public: false, spots_left: nil, description: "Nika's 10th birthday party", user_id: 3)
RequestedEvent.create(name: "Baby shower", date: "1/18/22", start_time: "10:00 AM", end_time: "1:00 PM", is_public: false, spots_left: nil, description: "Julia's babyshower", user_id: 3)


puts "Seeding reservations..."
Reservation.create(user_id: 3, event_id: 1)

puts "Seeding compelete!"