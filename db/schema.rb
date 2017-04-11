# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170403223235) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cars", force: :cascade do |t|
    t.string   "model",                        null: false
    t.string   "make",                         null: false
    t.float    "rating"
    t.boolean  "four_by_four", default: false
    t.boolean  "chains",       default: false
    t.integer  "user_id"
    t.integer  "trip_id"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.index ["trip_id"], name: "index_cars_on_trip_id", using: :btree
    t.index ["user_id"], name: "index_cars_on_user_id", using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.integer  "trip_id"
    t.integer  "user_id"
    t.text     "body"
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trip_id"], name: "index_messages_on_trip_id", using: :btree
  end

  create_table "reports", force: :cascade do |t|
    t.string   "snow_information"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "trips", force: :cascade do |t|
    t.string   "name",              null: false
    t.string   "date",              null: false
    t.string   "pickup_time",       null: false
    t.string   "departure_time",    null: false
    t.string   "start_address",     null: false
    t.string   "end_address",       null: false
    t.float    "start_lat"
    t.float    "start_long"
    t.float    "end_lat"
    t.float    "end_long"
    t.float    "latitude"
    t.float    "longitude"
    t.integer  "user_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.text     "rider_ids"
    t.integer  "available_seats"
    t.text     "trip_car"
    t.text     "driver_username"
    t.text     "rider_username"
    t.text     "rider_avatar_url"
    t.text     "driver_avatar_url"
    t.index ["user_id"], name: "index_trips_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "username"
    t.float    "driver_rating"
    t.float    "rider_rating"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "avatar_url"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "messages", "trips"
end
