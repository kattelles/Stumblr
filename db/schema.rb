# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160704232250) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blogs", force: :cascade do |t|
    t.integer  "owner_id",    null: false
    t.string   "title"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "cover_photo"
  end

  add_index "blogs", ["owner_id"], name: "index_blogs_on_owner_id", unique: true, using: :btree

  create_table "follows", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "blog_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "follows", ["blog_id"], name: "index_follows_on_blog_id", using: :btree
  add_index "follows", ["user_id"], name: "index_follows_on_user_id", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "post_id",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "likes", ["post_id"], name: "index_likes_on_post_id", using: :btree

  create_table "posts", force: :cascade do |t|
    t.integer "user_id",       null: false
    t.string  "title"
    t.text    "content"
    t.string  "image_url"
    t.text    "quote"
    t.text    "quote_source"
    t.string  "link_url"
    t.string  "post_type"
    t.string  "audio_url"
    t.string  "video_url"
    t.string  "image_caption"
    t.string  "link_title"
  end

  add_index "posts", ["user_id"], name: "index_posts_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "avatar"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
