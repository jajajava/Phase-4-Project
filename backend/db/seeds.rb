puts "Seeding users..."
User.create(username: "test_admin", password: "password", age: 24, is_admin: true, is_member: false )
User.create(username: "test_member", password: "password", age: 13, is_admin: false, is_member: true)
User.create(username: "test_visitor", password: "password", age: 19, is_admin: false, is_member: false)

puts "Seeding events..."
Event.create(name: "Wedding", date: "11/18/22", time: "12:00 PM", is_public: false, recurring_days: "", spots_left: nil)
Event.create(name: "Birthday", date: "12/2/22", time: "9:00 AM", is_public: false, recurring_days: "", spots_left: nil)
Event.create(name: "Baby shower", date: "1/18/22", time: "10:00 AM", is_public: false, recurring_days: "", spots_left: nil)
Event.create(name: "Garden tour", date: "11/11/22", time: "11:00 AM", is_public: true, recurring_days: "Monday, Wednesday, Friday", spots_left: 100)


puts "Seeding reservations..."
Reservation.create(user_id: 3, event_id: 1)

puts "Seeding compelete!"