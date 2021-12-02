class Artist < ApplicationRecord
  belongs_to :dashboard
  has_many :songs, dependent: :destroy
  validates :name, :description, presence: true
end
