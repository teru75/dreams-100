class AddRowOrderToDreams < ActiveRecord::Migration[5.2]
  def change
    add_column :dreams, :row_order, :integer
  end
end
