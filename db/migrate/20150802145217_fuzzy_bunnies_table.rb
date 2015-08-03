class FuzzyBunniesTable < ActiveRecord::Migration
  def change
    create_table :fuzzy_bunnies do |t|
      t.string  :url
      t.string  :name
      t.integer :cuteness

      t.timestamps null: false
    end
  end
end
