class MockupController < ActionController::Base
  def show
    @image = params[:image]
  end
end
