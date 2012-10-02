class Book < ActiveRecord::Base
  attr_accessible :author, :description, :published_at, :title
end
